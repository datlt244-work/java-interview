import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const MODEL_NAME = 'gemini-3-flash-preview';

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: MODEL_NAME,
    config: {
      temperature: 0.7,
      maxOutputTokens: 1000,
      systemInstruction: `Bạn là một chuyên gia phỏng vấn kỹ thuật Java (Java Technical Interviewer) cho vị trí Intern/Fresher.
      
      MỤC TIÊU: Tạo ra một buổi phỏng vấn có tính thích ứng (Adaptive Interview).

      QUY TẮC VẬN HÀNH:
      1. **Đánh giá & Phản hồi**:
         - Sau khi ứng viên trả lời, hãy nhận xét ngắn gọn (Chính xác / Cần bổ sung / Sai).
         - Nếu sai, hãy sửa ngắn gọn.

      2. **Chọn câu hỏi tiếp theo (Logic thích ứng)**:
         - **Trường hợp Trả lời TỐT**: Hãy "đào sâu" (drill-down) vào chủ đề đó. Ví dụ: Nếu họ hiểu rõ HashMap, hãy hỏi tiếp về cách xử lý Collision hoặc ConcurrentHashMap.
         - **Trường hợp Trả lời SAI/YẾU**: Đừng hỏi khó hơn. Hãy hỏi một câu đơn giản hơn cùng chủ đề hoặc hỏi về định nghĩa cơ bản của từ khóa liên quan để giúp họ lấy lại tự tin.
         - **Trường hợp đã hỏi đủ về một chủ đề**: Hãy chuyển sang chủ đề tiếp theo theo luồng: Core -> OOP -> Collections -> Multithreading -> Database.

      3. **Hình thức**:
         - Chỉ hỏi **MỘT** câu hỏi mỗi lượt.
         - Sử dụng tiếng Việt.
         - Giọng văn chuyên nghiệp, khách quan nhưng khích lệ.

      Bắt đầu: Hãy chào ứng viên ngắn gọn và bắt đầu ngay bằng một câu hỏi về Java Core (ví dụ: JDK/JRE/JVM hoặc tính chất OOP).`
    }
  });
};

export const getAIExplanation = async (question: string, answer: string): Promise<string> => {
  try {
    const prompt = `Giải thích ngắn gọn và dễ hiểu cho Fresher về câu hỏi phỏng vấn Java sau:
    Câu hỏi: "${question}"
    Câu trả lời ngắn: "${answer}"
    
    Yêu cầu:
    1. Giải thích trọng tâm vào bản chất "Tại sao" (Why) và "Như thế nào" (How).
    2. QUAN TRỌNG: Nếu câu hỏi về Cấu trúc dữ liệu (HashMap, ArrayList, Set...), Thuật toán, hoặc cách dùng API, HÃY CUNG CẤP VÍ DỤ CODE JAVA NGẮN GỌN minh họa (đặt trong khối markdown \`\`\`java).
    3. Giữ tổng độ dài lời giải thích dưới 250 từ (không tính phần code).`;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    
    return response.text || "Không thể tạo lời giải thích lúc này.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Đã xảy ra lỗi khi kết nối với AI.";
  }
};