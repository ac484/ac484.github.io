'use client';

import { useState, useEffect } from 'react';
import { useScrollPosition } from '../../hooks'; // 更新引用路徑

export function BackToTop() {
  const scrollPosition = useScrollPosition();
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    setShowBackToTop(scrollPosition > 300);
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showBackToTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-30 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors animate-fadeIn"
      aria-label="回到頂部"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}