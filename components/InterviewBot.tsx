import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { createChatSession } from '../services/geminiService';
import { Chat, GenerateContentResponse, GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';

// --- Audio Helper Functions for Gemini Live API ---
function floatTo16BitPCM(float32Array: Float32Array): ArrayBuffer {
  const buffer = new ArrayBuffer(float32Array.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < float32Array.length; i++) {
    const s = Math.max(-1, Math.min(1, float32Array[i]));
    view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }
  return buffer;
}

function base64EncodeAudio(float32Array: Float32Array): string {
  const arrayBuffer = floatTo16BitPCM(float32Array);
  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decodeAudioData(
  base64String: string,
  targetSampleRate: number = 24000
): Float32Array {
  const binaryString = atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  
  const int16Array = new Int16Array(bytes.buffer);
  const float32Array = new Float32Array(int16Array.length);
  
  for (let i = 0; i < int16Array.length; i++) {
    float32Array[i] = int16Array[i] / 32768.0;
  }
  
  return float32Array;
}

const InterviewBot: React.FC = () => {
  // --- Text Chat State ---
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTextLoading, setIsTextLoading] = useState(false);
  const [textSession, setTextSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- Voice Chat State ---
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isVoiceConnected, setIsVoiceConnected] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<'idle' | 'connecting' | 'listening' | 'speaking'>('idle');
  
  // Refs for Audio
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const liveSessionRef = useRef<any>(null); 
  const nextStartTimeRef = useRef<number>(0);
  const audioQueueRef = useRef<AudioBufferSourceNode[]>([]);

  // --------------------------------------------------------------------------
  // TEXT MODE LOGIC
  // --------------------------------------------------------------------------
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startTextSession = async () => {
    setIsTextLoading(true);
    const newSession = createChatSession();
    setTextSession(newSession);
    setMessages([]);

    try {
      const response: GenerateContentResponse = await newSession.sendMessage({ message: "Bắt đầu buổi phỏng vấn" });
      setMessages([{
        id: Date.now().toString(),
        role: 'model',
        text: response.text || "Xin chào! Tôi đã sẵn sàng phỏng vấn bạn về Java."
      }]);
    } catch (error) {
        console.error(error);
      setMessages([{
        id: 'error',
        role: 'model',
        text: "Lỗi kết nối. Vui lòng kiểm tra API Key.",
        isError: true
      }]);
    } finally {
      setIsTextLoading(false);
    }
  };

  useEffect(() => {
    if (!isVoiceMode && messages.length === 0) {
      startTextSession();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTextSend = async () => {
    if (!input.trim() || !textSession || isTextLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTextLoading(true);

    try {
      const streamResult = await textSession.sendMessageStream({ message: userMsg.text });
      let botResponseText = "";
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '' }]);

      for await (const chunk of streamResult) {
          const c = chunk as GenerateContentResponse;
          if (c.text) {
             botResponseText += c.text;
             setMessages(prev => prev.map(msg => 
                 msg.id === botMsgId ? { ...msg, text: botResponseText } : msg
             ));
          }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Có lỗi xảy ra khi xử lý câu trả lời.",
        isError: true
      }]);
    } finally {
      setIsTextLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleTextSend();
    }
  };

  // --------------------------------------------------------------------------
  // VOICE MODE LOGIC
  // --------------------------------------------------------------------------
  
  const stopAudioProcessing = () => {
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    audioQueueRef.current.forEach(source => {
        try { source.stop(); } catch(e) {}
    });
    audioQueueRef.current = [];
  };

  const startVoiceSession = async () => {
    setVoiceStatus('connecting');
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass({ sampleRate: 16000 }); 
        audioContextRef.current = ctx;
        nextStartTimeRef.current = ctx.currentTime;

        const sessionPromise = ai.live.connect({
            model: 'gemini-2.5-flash-native-audio-preview-09-2025',
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }, 
                },
                systemInstruction: `Bạn là một người phỏng vấn Java Senior.
                Chiến thuật phỏng vấn thích ứng (Adaptive):
                1. Nếu ứng viên trả lời ĐÚNG và TỐT: Hãy hỏi sâu hơn (drill-down).
                2. Nếu ứng viên trả lời SAI hoặc ẤP ÚNG: Hãy hạ độ khó. Hỏi một câu lý thuyết cơ bản hơn.
                3. Luôn giữ hội thoại tự nhiên, ngắn gọn như gọi điện thoại. Mỗi lượt chỉ hỏi 1 câu.
                4. Bắt đầu bằng việc chào và hỏi về Java Core.`,
            },
            callbacks: {
                onopen: async () => {
                    console.log('Live Session Open');
                    setVoiceStatus('listening');
                    setIsVoiceConnected(true);

                    try {
                        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                        streamRef.current = stream;
                        
                        const source = ctx.createMediaStreamSource(stream);
                        sourceRef.current = source;
                        
                        const processor = ctx.createScriptProcessor(4096, 1, 1);
                        processorRef.current = processor;
                        
                        processor.onaudioprocess = (e) => {
                            const inputData = e.inputBuffer.getChannelData(0);
                            const base64Data = base64EncodeAudio(inputData);
                            
                            sessionPromise.then(session => {
                                session.sendRealtimeInput({
                                    media: {
                                        mimeType: 'audio/pcm;rate=16000',
                                        data: base64Data
                                    }
                                });
                            });
                        };

                        source.connect(processor);
                        const muteNode = ctx.createGain();
                        muteNode.gain.value = 0;
                        processor.connect(muteNode);
                        muteNode.connect(ctx.destination);

                    } catch (err) {
                        console.error('Mic Error:', err);
                        setVoiceStatus('idle');
                    }
                },
                onmessage: async (msg: LiveServerMessage) => {
                    const audioData = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
                    if (audioData) {
                        setVoiceStatus('speaking');
                        const float32Data = decodeAudioData(audioData, 24000);
                        const audioBuffer = ctx.createBuffer(1, float32Data.length, 24000);
                        audioBuffer.getChannelData(0).set(float32Data);
                        
                        const source = ctx.createBufferSource();
                        source.buffer = audioBuffer;
                        source.connect(ctx.destination);
                        
                        if (nextStartTimeRef.current < ctx.currentTime) {
                            nextStartTimeRef.current = ctx.currentTime;
                        }
                        
                        source.start(nextStartTimeRef.current);
                        nextStartTimeRef.current += audioBuffer.duration;
                        
                        audioQueueRef.current.push(source);
                        
                        source.onended = () => {
                             if (ctx.currentTime >= nextStartTimeRef.current - 0.1) {
                                 setVoiceStatus('listening');
                             }
                             const index = audioQueueRef.current.indexOf(source);
                             if (index > -1) audioQueueRef.current.splice(index, 1);
                        };
                    }
                    
                    const interrupted = msg.serverContent?.interrupted;
                    if (interrupted) {
                        audioQueueRef.current.forEach(s => {
                            try { s.stop(); } catch(e) {}
                        });
                        audioQueueRef.current = [];
                        nextStartTimeRef.current = ctx.currentTime;
                        setVoiceStatus('listening');
                    }
                },
                onclose: () => {
                    setIsVoiceConnected(false);
                    setVoiceStatus('idle');
                },
                onerror: (e) => {
                    setVoiceStatus('idle');
                    setIsVoiceConnected(false);
                }
            }
        });
        
        liveSessionRef.current = sessionPromise;

    } catch (error) {
        console.error("Setup Error", error);
        setVoiceStatus('idle');
    }
  };

  const endVoiceSession = () => {
     stopAudioProcessing();
     setIsVoiceConnected(false);
     setVoiceStatus('idle');
  };

  useEffect(() => {
    return () => {
        stopAudioProcessing();
    };
  }, []);

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
       {/* HEADER (Sticky) */}
       <div className="bg-white/90 backdrop-blur-sm px-4 py-3 shadow-sm z-20 flex justify-between items-center border-b border-gray-100">
           <div>
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isVoiceMode && isVoiceConnected ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></span>
                <h2 className="font-bold text-gray-800 text-sm">
                    {isVoiceMode ? 'Voice Interview' : 'Chat Interview'}
                </h2>
            </div>
           </div>
           
           <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
               <button 
                onClick={() => { if(isVoiceMode) endVoiceSession(); setIsVoiceMode(false); }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${!isVoiceMode ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500'}`}
               >
                   Chat
               </button>
               <button 
                onClick={() => { setIsVoiceMode(true); }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${isVoiceMode ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500'}`}
               >
                   Voice
               </button>
           </div>
       </div>

       {/* CONTENT AREA */}
       {isVoiceMode ? (
           // --- VOICE INTERFACE ---
           <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 text-white relative overflow-hidden">
               
               {/* Background Glow */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full filter blur-[100px] transition-all duration-1000 ${
                   voiceStatus === 'speaking' ? 'bg-indigo-600/40 opacity-100' : 
                   voiceStatus === 'listening' ? 'bg-emerald-600/30 opacity-80' : 
                   'bg-gray-700/20 opacity-50'
               }`}></div>

               {/* Status Indicator */}
               <div className="relative z-10 flex flex-col items-center">
                    <div className={`text-6xl font-black mb-4 transition-all duration-300 ${
                         voiceStatus === 'speaking' ? 'scale-110 text-indigo-300' : 
                         voiceStatus === 'listening' ? 'scale-100 text-emerald-300' : 'text-gray-500'
                    }`}>
                        {voiceStatus === 'speaking' && 'AI'}
                        {voiceStatus === 'listening' && '...'}
                        {voiceStatus === 'idle' && 'OFF'}
                        {voiceStatus === 'connecting' && '...'}
                    </div>
                    
                    <p className="text-sm font-medium tracking-widest uppercase opacity-70">
                        {voiceStatus === 'idle' && 'Sẵn sàng'}
                        {voiceStatus === 'connecting' && 'Đang kết nối'}
                        {voiceStatus === 'listening' && 'Đang nghe bạn'}
                        {voiceStatus === 'speaking' && 'Đang trả lời'}
                    </p>
               </div>

               {/* Main Control */}
               <div className="mt-20 z-10">
                   {!isVoiceConnected ? (
                       <button 
                        onClick={startVoiceSession}
                        className="group relative flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-full shadow-lg hover:bg-emerald-400 transition-all active:scale-95"
                       >
                           <div className="absolute inset-0 rounded-full border-2 border-emerald-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
                           <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                       </button>
                   ) : (
                       <button 
                        onClick={endVoiceSession}
                        className="group relative flex items-center justify-center w-20 h-20 bg-rose-500 rounded-full shadow-lg hover:bg-rose-400 transition-all active:scale-95"
                       >
                           <div className="absolute inset-0 rounded-full border-2 border-rose-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
                           <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                       </button>
                   )}
               </div>

           </div>
       ) : (
           // --- TEXT INTERFACE ---
           <>
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 bg-white">
                {messages.length === 0 && !isTextLoading && (
                    <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl">☕</span>
                        </div>
                        <p className="text-sm font-medium text-gray-500">Bắt đầu phỏng vấn Java</p>
                    </div>
                )}
                
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-2 items-end`}>
                            {/* Avatar */}
                            <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${msg.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-green-100 text-green-600'}`}>
                                {msg.role === 'user' ? 'Me' : 'AI'}
                            </div>

                            {/* Bubble */}
                            <div 
                                className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-indigo-600 text-white rounded-br-sm' 
                                    : msg.isError 
                                        ? 'bg-rose-50 text-rose-600 border border-rose-100'
                                        : 'bg-gray-100 text-gray-800 rounded-bl-sm border border-gray-200/50'
                                }`}
                            >
                                {msg.role === 'model' ? (
                                    <div className="whitespace-pre-wrap">{msg.text}</div>
                                ) : (
                                    msg.text
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                
                {isTextLoading && messages[messages.length - 1]?.role === 'user' && (
                    <div className="flex justify-start w-full">
                         <div className="flex gap-2 items-end">
                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold">AI</div>
                            <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex space-x-1">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white/80 backdrop-blur-md border-t border-gray-100 pb-20 sm:pb-3">
                <div className="flex items-end gap-2 bg-gray-100 rounded-[24px] px-2 py-2 border border-transparent focus-within:border-indigo-300 focus-within:bg-white focus-within:shadow-md transition-all duration-300">
                    <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Nhập câu trả lời..."
                            className="flex-1 bg-transparent border-none focus:ring-0 text-sm max-h-32 resize-none py-2.5 px-3"
                            rows={1}
                    />
                    <button 
                        onClick={handleTextSend}
                        disabled={!input.trim() || isTextLoading}
                        className={`w-9 h-9 flex items-center justify-center rounded-full mb-0.5 transition-all ${!input.trim() || isTextLoading ? 'text-gray-400 bg-gray-200 scale-90' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm active:scale-95'}`}
                    >
                        <svg className="w-5 h-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                </div>
            </div>
           </>
       )}
    </div>
  );
};

export default InterviewBot;