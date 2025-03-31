'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="機電工程公司"
            width={120}
            height={40}
          />
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="#services" className="hover:text-blue-600 font-medium">服務項目</Link>
          <Link href="#projects" className="hover:text-blue-600 font-medium">工程案例</Link>
          <Link href="#about" className="hover:text-blue-600 font-medium">關於我們</Link>
          <Link href="#contact" className="hover:text-blue-600 font-medium">聯絡我們</Link>
          <Link href="#careers" className="hover:text-blue-600 font-medium">人才招募</Link>
        </div>
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="開啟選單"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* 手機版導航選單 */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-20 animate-fadeIn">
          <div className="flex flex-col py-4 px-6">
            <Link 
              href="#services" 
              className="py-3 border-b border-gray-100 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              服務項目
            </Link>
            <Link 
              href="#projects" 
              className="py-3 border-b border-gray-100 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              工程案例
            </Link>
            <Link 
              href="#about" 
              className="py-3 border-b border-gray-100 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              關於我們
            </Link>
            <Link 
              href="#contact" 
              className="py-3 border-b border-gray-100 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              聯絡我們
            </Link>
            <Link 
              href="#careers" 
              className="py-3 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              人才招募
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}