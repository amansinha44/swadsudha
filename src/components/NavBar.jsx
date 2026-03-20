import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react'; // Menu aur X icons import kiye

const NavBar = () => {
  // Menu ko open/close karne ke liye state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full pt-6 pb-2 px-4 sm:px-6 lg:px-12 font-body flex justify-between items-center">
      
      {/* 1. LOGO SECTION */}
      <div className="flex items-center cursor-pointer">
        <img 
          src="/swad-sudha-logo.png" 
          alt="SwadSudha Logo" 
          className="h-20 sm:h-30 lg:h-[90px] w-auto object-contain transition-transform origin-left" 
        />
      </div>

      {/* 2. MENU & BUTTON SECTION */}
      <div className="flex items-center gap-4 lg:gap-6">
        
        {/* Desktop Menu Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 font-bold text-[14px] text-[#4b5563] lg:text-white lg:bg-white/10 lg:backdrop-blur-md lg:border lg:border-white/20 px-8 py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <a href="#" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Home</a>
          <a href="#menu" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Our Menu</a>
          <a href="#" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">About Us</a>
        </div>
        
        {/* Desktop Order Button (Hidden on Small Mobile) */}
        <div className="hidden sm:flex items-center">
          <button className="bg-white text-[#467b2d] px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-gray-100 transition-colors flex items-center gap-2 border border-gray-100 lg:border-none">
            <ShoppingBag size={16} /> Order Now
          </button>
        </div>

        {/* 🔴 MOBILE MENU BUTTON (Hamburger Icon) - Visible only on mobile */}
        <button 
          className="md:hidden flex items-center justify-center p-2 text-[#467b2d] bg-white rounded-full shadow-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Agar menu open hai toh 'X' dikhega, warna '3 lines' */}
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* 🔴 MOBILE DROPDOWN MENU - Jab open hoga tabhi dikhega */}
      {isMobileMenuOpen && (
        <div className="absolute top-[90px] right-4 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#" className="px-6 py-3 font-bold text-gray-700 hover:bg-gray-50 hover:text-[#467b2d] border-b border-gray-50 transition-colors">Home</a>
          <a href="#menu" className="px-6 py-3 font-bold text-gray-700 hover:bg-gray-50 hover:text-[#467b2d] border-b border-gray-50 transition-colors">Our Menu</a>
          <a href="#" className="px-6 py-3 font-bold text-gray-700 hover:bg-gray-50 hover:text-[#467b2d] transition-colors">About Us</a>
          
          {/* Mobile version of Order Button inside menu */}
          <div className="px-4 py-4 bg-gray-50 sm:hidden">
            <button className="w-full bg-[#467b2d] text-white px-4 py-2.5 rounded-full font-bold text-sm shadow hover:bg-[#3a6625] transition-colors flex items-center justify-center gap-2">
              <ShoppingBag size={16} /> Order Now
            </button>
          </div>
        </div>
      )}

    </nav>
  );
};

export default NavBar;