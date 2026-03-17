import React from 'react';
import { ShoppingBag } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="relative z-50 w-full pt-6 pb-2 px-4 sm:px-6 lg:px-12 font-body flex justify-between items-center">
      
      {/* 1. LOGO SECTION (Text removed, image made larger and responsive) */}
      <div className="flex items-center cursor-pointer">
        <img 
          src="/swad-sudha-logo.png" 
          alt="SwadSudha Logo" 
          // h-12 for mobile, h-16 for tablets, h-[70px] for desktop
          // w-auto ensures the logo maintains its correct shape without stretching
          className="h-20 sm:h-30 lg:h-[90px] w-auto object-contain transition-transform origin-left" 
        />
      </div>

      {/* 2. MENU & BUTTON SECTION */}
      <div className="flex items-center gap-4 lg:gap-6">
        
        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-[14px] text-[#4b5563] lg:text-white lg:bg-white/10 lg:backdrop-blur-md lg:border lg:border-white/20 px-8 py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <a href="#" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Home</a>
          <a href="#menu" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Our Menu</a>
          <a href="#" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">About Us</a>
        </div>
        
        {/* Order Button */}
        <div className="flex items-center">
          <button className="hidden sm:flex bg-white text-[#467b2d] px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-gray-100 transition-colors items-center gap-2 border border-gray-100 lg:border-none">
            <ShoppingBag size={16} /> Order Now
          </button>
        </div>

      </div>

    </nav>
  );
};

export default NavBar;