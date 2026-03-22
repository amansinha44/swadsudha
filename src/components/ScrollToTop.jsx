import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Button kab dikhana hai? (visibility)
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Scroll percentage calculate karna (Circle fill karne ke liye)
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG Circle Logic
  const radius = 22; // Circle ki radius
  const circumference = 2 * Math.PI * radius; // Circle ki total lambai
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      onClick={scrollToTop}
      // Inspiration CSS ka logic: translateY aur opacity transition
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] cursor-pointer w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center transition-all duration-300 group bg-black/60 backdrop-blur-md shadow-[0_4px_24px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_24px_-10px_#7cb342]
        ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-5 invisible'}`}
    >
      {/* 🔴 SVG Progress Ring (CSS wali trick yahan use ki hai) */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 50 50">
        
        {/* Background Track Circle (Halki transparent line) */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2.5"
        />
        
        {/* Active Progress Circle (Aapka primary green color) */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="#7cb342" // Primary Color
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: 'stroke-dashoffset 0.1s ease-out', // Smooth progress animation
          }}
          className="group-hover:stroke-white transition-colors duration-300" 
        />
      </svg>

      {/* 🔴 Center Icon (Arrow) */}
      <ArrowUp
        size={20}
        strokeWidth={2.5}
        // Icon base color white hai, hover par green ho jayega aur upar jump karega
        className="text-[#cccccc] group-hover:text-[#7cb342] group-hover:-translate-y-1 transition-all duration-300 relative z-10"
      />
    </div>
  );
};

export default ScrollToTop;