import React from 'react';
import { ShoppingBag } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="relative z-50 w-full pt-4 pb-2 font-body">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-12 h-12 bg-white rounded-full p-1 shadow-md border-2 border-white flex items-center justify-center overflow-hidden">
            <img src="/swad-sudha-logo.jpg" alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <div className="hidden w-full h-full bg-[#2c4c3b] rounded-full items-center justify-center text-white font-black text-sm">SS</div>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-[#2b2b2b] italic">Swad<span className="text-[#568a35]">Sudha</span></h1>
        </div>

        {/* Menu & Button */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden md:flex items-center gap-8 font-bold text-[14px] text-[#4b5563] lg:text-white lg:bg-white/10 lg:backdrop-blur-md lg:border lg:border-white/20 px-8 py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <a href="#" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Home</a>
            <a href="#menu" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Our Menu</a>
            <a href="#" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">About Us</a>
          </div>
          <div className="flex items-center">
            <button className="hidden sm:flex bg-white text-[#467b2d] px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-gray-100 transition-colors items-center gap-2 border border-gray-100 lg:border-none">
              <ShoppingBag size={16} /> Order Now
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;