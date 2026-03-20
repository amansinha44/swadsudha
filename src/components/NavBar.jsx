import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 🔴 Naya Import React Router ke liye
import { ShoppingBag, Menu, X, Home, Info, Utensils, CalendarDays, Phone } from 'lucide-react'; 

const NavBar = () => {
  // Menu ko open/close karne ke liye state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Link pe click karne par menu close karne ka function
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative z-50 w-full pt-6 pb-2 px-4 sm:px-6 lg:px-12 font-body flex justify-between items-center">
      
      {/* 1. LOGO SECTION */}
      <div className="flex items-center cursor-pointer">
        {/* Logo pe click karne par bhi Home pe bhejne ke liye Link laga diya */}
        <Link to="/">
          <img 
            src="/swad-sudha-logo.png" 
            alt="SwadSudha Logo" 
            className="h-20 sm:h-30 lg:h-[90px] w-auto object-contain transition-transform origin-left" 
          />
        </Link>
      </div>

      {/* 2. MENU & BUTTON SECTION */}
      <div className="flex items-center gap-4 lg:gap-6">
        
        {/* Desktop Menu Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 font-bold text-[14px] text-[#4b5563] lg:text-white lg:bg-white/10 lg:backdrop-blur-md lg:border lg:border-white/20 px-8 py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          {/* 🔴 Yahan humne Link aur /# wale paths update kiye hain */}
          <Link to="/" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Home</Link>
<Link to="/about" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">About</Link>
<Link to="/menu" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Our Menu</Link>
<Link to="/subscription" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Subscription</Link>
<Link to="/contact" className="hover:text-[#568a35] lg:hover:text-gray-200 transition-colors drop-shadow-sm">Contact</Link>
        </div>
        
        {/* Desktop Order Button (Hidden on Small Mobile) */}
        <div className="hidden sm:flex items-center">
          <button className="bg-white text-[#467b2d] px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-gray-100 transition-colors flex items-center gap-2 border border-gray-100 lg:border-none">
            <ShoppingBag size={16} /> Order Now
          </button>
        </div>

        {/* 🔴 MOBILE MENU BUTTON (Hamburger Icon) - Visible only on mobile */}
        <button 
          className="md:hidden flex items-center justify-center p-2 text-[#467b2d] bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Agar menu open hai toh 'X' dikhega, warna '3 lines' */}
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* 🔴 PREMIUM MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-[90px] right-4 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100/80 flex flex-col overflow-hidden md:hidden z-100 animate-in zoom-in-95 duration-200 origin-top-right">
          
          <div className="flex flex-col py-2">
            {/* 🔴 Mobile me bhi humne Link aur /# wale paths update kiye hain */}
           <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><Home size={18} className="text-[#467b2d]/80" /> Home</Link>
<Link to="/about" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><Info size={18} className="text-[#467b2d]/80" /> About</Link>
<Link to="/menu" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><Utensils size={18} className="text-[#467b2d]/80" /> Our Menu</Link>
<Link to="/subscription" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><CalendarDays size={18} className="text-[#467b2d]/80" /> Subscription</Link>
<Link to="/contact" onClick={handleLinkClick} className="flex items-center gap-3 px-6 py-3.5 font-semibold text-gray-700 hover:bg-[#467b2d]/10 hover:text-[#467b2d] transition-all"><Phone size={18} className="text-[#467b2d]/80" /> Contact</Link>
          </div>
          
          {/* Mobile version of Order Button inside menu */}
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