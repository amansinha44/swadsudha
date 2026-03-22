import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { ShoppingBag, Menu, X, Home, Info, Utensils, CalendarDays, Phone } from 'lucide-react'; 

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // 🔴 CHANGE: z-[999999] (Sabse maximum possible z-index)
    <nav className={`relative z-[999999] pt-6 pb-2 px-4 sm:px-6 lg:px-12 font-body flex justify-between items-center ${isHomePage ? 'w-full' : 'w-full max-w-[1150px] mx-auto'}`}>
      
      {/* 1. LOGO SECTION */}
      <div className="flex items-center cursor-pointer relative z-[999999]">
        <Link to="/">
          <img 
            src="/swad-sudha-logo.png" 
            alt="SwadSudha Logo" 
            className="h-20 sm:h-30 lg:h-[90px] w-auto object-contain transition-transform origin-left drop-shadow-md hover:scale-105" 
          />
        </Link>
      </div>

      {/* 2. MENU & BUTTON SECTION */}
      <div className="flex items-center gap-4 lg:gap-6 relative z-[999999]">
        
        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-[14px] text-gray-700 lg:text-white lg:bg-white/10 lg:backdrop-blur-md lg:border lg:border-white/20 px-8 py-2.5 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all">
          <Link to="/" className="hover:text-[#7cb342] lg:hover:text-[#a4e363] transition-colors drop-shadow-sm">Home</Link>
          <Link to="/about" className="hover:text-[#7cb342] lg:hover:text-[#a4e363] transition-colors drop-shadow-sm">About</Link>
          <Link to="/menu" className="hover:text-[#7cb342] lg:hover:text-[#a4e363] transition-colors drop-shadow-sm">Our Menu</Link>
          <Link to="/subscription" className="hover:text-[#7cb342] lg:hover:text-[#a4e363] transition-colors drop-shadow-sm">Subscription</Link>
          <Link to="/contact" className="hover:text-[#7cb342] lg:hover:text-[#a4e363] transition-colors drop-shadow-sm">Contact</Link>
        </div>
        
        {/* Desktop Order Button */}
        <div className="hidden sm:flex items-center">
          <button className="bg-gradient-to-r from-[#7cb342] to-[#568a35] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-[0_5px_15px_rgba(124,179,66,0.3)] hover:shadow-[0_8px_20px_rgba(124,179,66,0.4)] transition-all flex items-center gap-2 hover:-translate-y-0.5 border border-[#7cb342]/50">
            <ShoppingBag size={16} /> Order Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON (Hamburger) */}
        <button 
          className="md:hidden flex items-center justify-center p-2.5 text-white bg-[#7cb342]/90 backdrop-blur-sm rounded-xl shadow-[0_4px_15px_rgba(124,179,66,0.3)] border border-[#7cb342]/50 hover:bg-[#669936] transition-all active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
        </button>

      </div>

      {/* 🔴 MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[999998] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {isMobileMenuOpen && (
        // 🔴 CHANGE: absolute ki jagah fixed kar diya aur z-index ko extreme high rakha hai
        <div className="fixed top-[100px] right-4 w-[280px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/80 flex flex-col overflow-hidden md:hidden z-[999999] animate-in slide-in-from-top-4 fade-in duration-300">
          
          <div className="flex flex-col py-3 px-2 gap-1">
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-800 hover:bg-[#7cb342]/15 hover:text-[#467b2d] transition-all group">
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                <Home size={16} className="text-gray-500 group-hover:text-[#7cb342] transition-colors" /> 
              </div>
              Home
            </Link>

            <Link to="/about" onClick={handleLinkClick} className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-800 hover:bg-[#7cb342]/15 hover:text-[#467b2d] transition-all group">
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                <Info size={16} className="text-gray-500 group-hover:text-[#7cb342] transition-colors" /> 
              </div>
              About
            </Link>

            <Link to="/menu" onClick={handleLinkClick} className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-800 hover:bg-[#7cb342]/15 hover:text-[#467b2d] transition-all group">
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                <Utensils size={16} className="text-gray-500 group-hover:text-[#7cb342] transition-colors" /> 
              </div>
              Our Menu
            </Link>

            <Link to="/subscription" onClick={handleLinkClick} className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-800 hover:bg-[#7cb342]/15 hover:text-[#467b2d] transition-all group">
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                <CalendarDays size={16} className="text-gray-500 group-hover:text-[#7cb342] transition-colors" /> 
              </div>
              Subscription
            </Link>

            <Link to="/contact" onClick={handleLinkClick} className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-800 hover:bg-[#7cb342]/15 hover:text-[#467b2d] transition-all group">
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                <Phone size={16} className="text-gray-500 group-hover:text-[#7cb342] transition-colors" /> 
              </div>
              Contact
            </Link>
          </div>
          
          <div className="px-4 py-4 bg-gradient-to-br from-gray-50/50 to-gray-100/50 border-t border-gray-100 sm:hidden backdrop-blur-md">
            <button 
              onClick={handleLinkClick}
              className="w-full bg-gradient-to-r from-[#7cb342] to-[#568a35] text-white px-4 py-3.5 rounded-xl font-bold text-[15px] shadow-[0_5px_15px_rgba(124,179,66,0.3)] hover:shadow-[0_8px_20px_rgba(124,179,66,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95"
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