import React from 'react';
import { ViewState } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, onChangeView }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-0 sm:p-4 font-sans antialiased">
      {/* Mobile Container Simulation */}
      <div className="w-full max-w-md bg-white sm:rounded-[32px] shadow-2xl h-[100dvh] sm:h-[850px] flex flex-col relative overflow-hidden ring-1 ring-gray-900/5">
        
        {/* Header - Glassmorphism */}
        <header className="absolute top-0 w-full bg-white/80 backdrop-blur-md z-20 border-b border-gray-100/50 transition-all duration-300">
          <div className="flex justify-between items-center p-5 pt-8 sm:pt-6">
            <div>
              <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                JavaPrep Mate
              </h1>
              <p className="text-gray-400 text-[11px] font-medium tracking-wide uppercase">Intern & Fresher Interview</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] shadow-lg shadow-indigo-500/20">
               <div className="h-full w-full bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-indigo-600">Dev</span>
               </div>
            </div>
          </div>
        </header>

        {/* Main Content Area - Added top padding for absolute header */}
        <main className="flex-1 overflow-y-auto no-scrollbar relative bg-gray-50 pt-[88px] pb-[80px]">
          {children}
        </main>

        {/* Bottom Navigation - Glassmorphism with Floating effect */}
        <nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-100 flex justify-around items-center h-[80px] pb-4 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
          <NavItem 
            isActive={activeView === 'home'} 
            onClick={() => onChangeView('home')} 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />}
            label="Chủ đề"
          />
          <NavItem 
            isActive={activeView === 'flashcards'} 
            onClick={() => onChangeView('flashcards')} 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />}
            label="Ôn tập"
          />
          <NavItem 
            isActive={activeView === 'interview'} 
            onClick={() => onChangeView('interview')} 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />}
            label="AI Phỏng vấn"
          />
        </nav>
      </div>
    </div>
  );
};

const NavItem: React.FC<{ isActive: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ isActive, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className="group flex flex-col items-center justify-center w-20 h-full relative"
  >
    {isActive && (
      <span className="absolute -top-[1px] w-12 h-1 bg-indigo-500 rounded-b-lg shadow-sm animate-in fade-in slide-in-from-top-1 duration-300"></span>
    )}
    <div className={`transition-all duration-300 transform group-active:scale-90 ${isActive ? 'text-indigo-600 -translate-y-1' : 'text-gray-400'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {icon}
      </svg>
    </div>
    <span className={`text-[10px] font-semibold transition-colors duration-300 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`}>
      {label}
    </span>
  </button>
);

export default Layout;