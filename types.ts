export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Question {
  id: number;
  category: "Core" | "OOP" | "Spring Boot";
  question: string;
  answer: string;
  difficulty: Difficulty;
  keywords?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  totalQuestions: number;
}

export type ViewState = 'home' | 'flashcards' | 'interview';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}