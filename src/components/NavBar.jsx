import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Home, Info, Utensils, CalendarDays, Phone } from 'lucide-react'; 

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative z-[100] w-full py-4 px-4 sm:px-6 lg:px-12 font-body flex justify-between items-center bg-transparent md:bg-[#467b2d] md:shadow-md transition-colors">
      
      {/* 1. LOGO SECTION */}
      <div className="flex items-center cursor-pointer">
        <Link to="/">
          <img 
            src="/swad-sudha-logo.png" 
            alt="SwadSudha Logo" 
            className="h-16 sm:h-20 lg:h-[80px] w-auto object-contain transition-transform origin-left bg-white/90 md:bg-transparent rounded-xl md:rounded-none p-1 md:p-0" 
          />
        </Link>
      </div>

      {/* 2. MENU & BUTTON SECTION */}
      <div className="flex items-center gap-4 lg:gap-6">
        
        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-white md:bg-white/10 md:backdrop-blur-md md:border md:border-white/20 px-8 py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <Link to="/" className="hover:text-yellow-300 transition-colors drop-shadow-sm">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors drop-shadow-sm">About</Link>
          <Link to="/menu" className="hover:text-yellow-300 transition-colors drop-shadow-sm">Our Menu</Link>
          <Link to="/subscription" className="hover:text-yellow-300 transition-colors drop-shadow-sm">Subscription</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors drop-shadow-sm">Contact</Link>
        </div>
        
        {/* Desktop Order Button */}
        <div className="hidden sm:flex items-center">
          <button className="bg-yellow-400 text-[#2d4d1d] px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-yellow-500 transition-colors flex items-center gap-2 border-none">
            <ShoppingBag size={16} /> Order Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON (Hamburger Icon) */}
        <button 
          className="md:hidden flex items-center justify-center p-2.5 text-[#467b2d] bg-white rounded-xl shadow-md hover:bg-gray-50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* PREMIUM MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] right-4 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col overflow-hidden md:hidden z-[100] animate-in zoom-in-95 duration-200 origin-top-right">
          
          <div className="flex flex-col py-2">
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><Home size={18} className="text-[#467b2d]/80" /> Home</Link>
            <Link to="/about" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><Info size={18} className="text-[#467b2d]/80" /> About</Link>
            <Link to="/menu" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><Utensils size={18} className="text-[#467b2d]/80" /> Our Menu</Link>
            <Link to="/subscription" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><CalendarDays size={18} className="text-[#467b2d]/80" /> Subscription</Link>
            <Link to="/contact" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><Phone size={18} className="text-[#467b2d]/80" /> Contact</Link>
          </div>
          
          <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 sm:hidden">
            <button 
              onClick={handleLinkClick}
              className="w-full bg-[#467b2d] text-white px-4 py-3 rounded-xl font-bold text-[15px] shadow-md hover:shadow-lg hover:bg-[#3a6625] transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <ShoppingBag size={18} /> Order Now
            </button>
          </div>
          
        </div>
      )}

    </nav>
  );
};

export default NavBar;