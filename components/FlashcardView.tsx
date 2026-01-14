import React, { useState, useEffect } from 'react';
import { Question, Difficulty } from '../types';
import KeywordHighlighter from './KeywordHighlighter';
import { getAIExplanation } from '../services/geminiService';

interface Props {
  questions: Question[];
  categoryName: string;
  onBack: () => void;
}

const FlashcardView: React.FC<Props> = ({ questions, categoryName, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string>('');
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  // Reset state when question changes
  useEffect(() => {
    setIsFlipped(false);
    setShowExplanation(false);
    setAiExplanation('');
  }, [currentIndex]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          // Next Question
          if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
          }
          break;
        case 'ArrowLeft':
          // Previous Question
          if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
          }
          break;
        case ' ':
        case 'ArrowUp':
        case 'ArrowDown':
          // Flip Card
          e.preventDefault(); // Prevent scrolling
          setIsFlipped(prev => !prev);
          break;
        case 'Escape':
          onBack();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, questions.length, onBack]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleExplain = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (aiExplanation) {
      setShowExplanation(!showExplanation);
      return;
    }
    
    setIsLoadingAi(true);
    setShowExplanation(true);
    const result = await getAIExplanation(currentQuestion.question, currentQuestion.answer);
    setAiExplanation(result);
    setIsLoadingAi(false);
  };

  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case 'Beginner': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Intermediate': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Advanced': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  // Helper function to render AI content with simple code block parsing
  const renderAiContent = (text: string) => {
    // Split by markdown code blocks ``` or ```java
    const parts = text.split(/```(?:java)?/);
    
    return parts.map((part, index) => {
      // Odd indices are code blocks (because split creates: [text, code, text, code...])
      if (index % 2 === 1) {
        return (
          <div key={index} className="my-3 rounded-lg overflow-hidden bg-gray-900 shadow-md border border-gray-700">
            <div className="bg-gray-800 px-3 py-1 text-[10px] font-mono text-gray-400 border-b border-gray-700 flex justify-between items-center">
               <span className="font-bold text-indigo-400">JAVA</span>
            </div>
            <pre className="p-3 text-xs font-mono text-indigo-50 overflow-x-auto whitespace-pre">
              <code>{part.trim()}</code>
            </pre>
          </div>
        );
      }
      // Regular text
      return (
        <div key={index} className="whitespace-pre-line mb-2 text-gray-600 leading-relaxed">
          {part.trim()}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col h-full bg-gray-50/50">
      {/* Top Bar with Progress */}
      <div className="bg-white/80 backdrop-blur-md pt-2 sticky top-0 z-30">
        <div className="flex items-center px-4 py-3">
            <button onClick={onBack} className="p-2 -ml-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="ml-2 flex-1">
                <h2 className="text-base font-bold text-gray-800 leading-tight">{categoryName}</h2>
                <div className="flex items-center gap-2 mt-1">
                    <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 w-8 text-right">{currentIndex + 1}/{questions.length}</span>
                </div>
            </div>
        </div>
      </div>

      {/* Card Container */}
      <div className="flex-1 flex flex-col items-center justify-start p-4 pt-6 pb-20">
        
        {/* The Card */}
        <div 
          className="w-full max-w-sm relative perspective-1000 min-h-[460px] flex-1"
        >
          <div className={`relative w-full h-full transition-all duration-700 preserve-3d transform shadow-2xl rounded-3xl ${isFlipped ? 'rotate-y-180' : ''}`}>
            
            {/* --- FRONT SIDE --- */}
            <div 
                onClick={() => setIsFlipped(true)}
                className={`absolute w-full h-full backface-hidden bg-white rounded-3xl p-8 flex flex-col justify-between cursor-pointer border border-gray-100 ${isFlipped ? 'pointer-events-none' : ''}`}
            >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-bl-[100px] -z-10 rounded-tr-3xl"></div>
                
                <div className="flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wide ${getDifficultyColor(currentQuestion.difficulty)}`}>
                        {currentQuestion.difficulty}
                    </span>
                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">Chạm / Space để lật</span>
                </div>

                <div className="text-center flex-1 flex flex-col justify-center items-center">
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-indigo-500 shadow-sm">
                        ?
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 leading-snug">{currentQuestion.question}</h3>
                </div>
                
                <div className="w-full text-center">
                    <span className="text-xs text-indigo-400 font-medium animate-pulse">Nhấn vào thẻ để xem đáp án</span>
                </div>
            </div>

            {/* --- BACK SIDE (Readability Focused) --- */}
            <div className={`absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-3xl overflow-hidden flex flex-col border border-indigo-100 ${isFlipped ? '' : 'pointer-events-none'}`}>
                {/* Header Strip */}
                <div className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md z-10">
                    <div className="flex items-center gap-2">
                         <span className="text-lg">💡</span>
                         <span className="font-bold text-sm uppercase tracking-wide">Đáp án gợi ý</span>
                    </div>
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                        className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </button>
                </div>
                
                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 bg-slate-50 relative">
                    <div className="prose prose-sm max-w-none mb-6">
                        <p className="text-base text-gray-700 leading-7 font-normal whitespace-pre-wrap">
                             <KeywordHighlighter text={currentQuestion.answer} keywords={currentQuestion.keywords || []} />
                        </p>
                    </div>

                    {currentQuestion.keywords && currentQuestion.keywords.length > 0 && (
                        <div className="mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Keywords</p>
                            <div className="flex flex-wrap gap-2">
                                {currentQuestion.keywords.map((k, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg text-xs font-semibold">
                                        {k}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* AI Explanation Expander */}
                    <div className="mt-2">
                         <button 
                            onClick={handleExplain}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${showExplanation ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-dashed border-gray-300 hover:border-indigo-300'}`}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <span className={`text-xs font-bold ${showExplanation ? 'text-indigo-700' : 'text-gray-600'}`}>Giải thích sâu (AI)</span>
                            </div>
                            <svg className={`w-4 h-4 text-gray-400 transition-transform ${showExplanation ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>

                        {showExplanation && (
                            <div className="mt-2 p-4 bg-white rounded-xl border border-indigo-100 text-sm shadow-sm animate-in slide-in-from-top-2 fade-in duration-300">
                                {isLoadingAi ? (
                                    <div className="flex items-center gap-2 text-indigo-500">
                                        <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                                        <span>AI đang phân tích...</span>
                                    </div>
                                ) : (
                                    <div className="prose prose-sm max-w-none">
                                        {renderAiContent(aiExplanation)}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="h-8"></div>
                </div>
            </div>
          </div>
        </div>

        {/* Floating Controls */}
        <div className="flex items-center gap-6 mt-6 z-20">
            <button 
                onClick={handlePrev} 
                disabled={currentIndex === 0}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-all active:scale-95 border ${currentIndex === 0 ? 'bg-gray-100 text-gray-300 border-transparent' : 'bg-white text-gray-600 border-gray-100 hover:text-indigo-600'}`}
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <button 
                onClick={handleNext}
                disabled={currentIndex === questions.length - 1}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl shadow-indigo-200 transform transition-all active:scale-95 ${currentIndex === questions.length - 1 ? 'bg-gray-100 text-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            >
                <svg className="w-8 h-8 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
        
        {/* Helper Text for Desktop */}
        <div className="mt-4 text-[10px] text-gray-400 hidden sm:block">
            Sử dụng phím mũi tên ⬅️ ➡️ để chuyển câu, Space/⬆️/⬇️ để lật thẻ
        </div>
      </div>
    </div>
  );
};

export default FlashcardView;