import React, { useState } from 'react';
import Layout from './components/Layout';
import FlashcardView from './components/FlashcardView';
import InterviewBot from './components/InterviewBot';
import { CATEGORIES, STATIC_QUESTIONS } from './constants';
import { ViewState, Category } from './types';

function App() {
  const [activeView, setActiveView] = useState<ViewState>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setActiveView('flashcards');
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setActiveView('home');
  };

  const getQuestionsForCategory = (catId: string) => {
    return STATIC_QUESTIONS.filter(q => q.category === catId);
  };

  // Render content based on state
  const renderContent = () => {
    switch (activeView) {
      case 'flashcards':
        if (selectedCategory) {
          const questions = getQuestionsForCategory(selectedCategory.id);
          return (
            <FlashcardView 
              questions={questions} 
              categoryName={selectedCategory.name}
              onBack={handleBackToHome}
            />
          );
        }
        // Fallback layout
        return (
            <div className="p-6 pt-2">
                <h2 className="text-xl font-bold mb-6 text-gray-800">Chọn bộ câu hỏi</h2>
                <div className="grid grid-cols-2 gap-4">
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat)}
                      className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-indigo-100 transition-all text-left flex flex-col items-center justify-center gap-3 aspect-square"
                    >
                      <span className="text-4xl filter drop-shadow-sm">{cat.icon}</span>
                      <div className="text-center">
                          <span className="font-bold text-gray-800 block text-sm">{cat.name}</span>
                          <span className="text-xs text-gray-400 mt-1 block">{cat.totalQuestions} câu hỏi</span>
                      </div>
                    </button>
                  ))}
                </div>
            </div>
        );

      case 'interview':
        return <InterviewBot />;

      case 'home':
      default:
        return (
          <div className="p-5 space-y-8">
            {/* Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/30">
              {/* Abstract shapes */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              
              <div className="relative p-6 z-10">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h2 className="text-2xl font-bold mb-1">Xin chào! 👋</h2>
                        <p className="text-indigo-100 text-sm opacity-90">Sẵn sàng chinh phục Java?</p>
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-white/10">
                        Fresher
                    </span>
                </div>
                
                <button 
                    onClick={() => setActiveView('interview')}
                    className="w-full bg-white text-indigo-700 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                >
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    Phỏng vấn thử ngay
                </button>
              </div>
            </div>

            {/* Topics Section */}
            <div>
              <div className="flex items-center justify-between mb-4 px-1">
                  <h3 className="font-bold text-gray-800 text-lg">Chủ đề ôn tập</h3>
                  <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">{CATEGORIES.length} chủ đề</span>
              </div>
              
              <div className="space-y-3">
                {CATEGORIES.map((cat) => (
                  <div 
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat)}
                    className="group bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center cursor-pointer active:scale-[0.99] transition-all hover:border-indigo-100 hover:shadow-md"
                  >
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl mr-4 flex-shrink-0 transition-colors group-hover:bg-indigo-50">
                      <span className="filter drop-shadow-sm transform transition-transform group-hover:scale-110 duration-300">{cat.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold text-gray-800 group-hover:text-indigo-700 transition-colors">{cat.name}</h4>
                          <svg className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                      <p className="text-xs text-gray-500 truncate pr-4">{cat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

             {/* Daily Tip - Enhanced */}
             <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-5 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-orange-200 rounded-full blur-2xl opacity-20 -mr-8 -mt-8"></div>
                 <div className="flex items-start gap-4 relative z-10">
                     <div className="bg-white p-2 rounded-xl shadow-sm text-xl">💡</div>
                     <div>
                         <h4 className="font-bold text-orange-900 text-sm mb-1">Mẹo "ăn điểm" hôm nay</h4>
                         <p className="text-xs text-orange-800/80 leading-relaxed font-medium">
                             Khi trả lời về <b>HashMap</b>, đừng quên nhắc đến <span className="underline decoration-orange-300">contract</span> giữa <i>hashCode()</i> và <i>equals()</i>.
                         </p>
                     </div>
                 </div>
             </div>
          </div>
        );
    }
  };

  return (
    <Layout activeView={activeView} onChangeView={setActiveView}>
      {renderContent()}
    </Layout>
  );
}

export default App;