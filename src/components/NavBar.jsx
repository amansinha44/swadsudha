import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { ShoppingBag, Menu, X, Facebook, Instagram, Youtube, Twitter, ChevronRight, Utensils } from 'lucide-react'; 

const NavBar = ({ cart = [], setCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const isHomePage = location?.pathname === '/';

  const safeCart = Array.isArray(cart) ? cart : [];
  const cartTotal = safeCart.reduce((total, item) => total + ((item?.price || 0) * (item?.qty || 1)), 0);

  const handleRemove = (id) => {
    if (typeof setCart === 'function') {
      setCart(safeCart.filter(item => item?.id !== id));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
  };

  return (
    <header className={`w-full z-[999999] transition-all duration-300 font-body ${
      isScrolled 
        ? 'fixed top-0 left-0 bg-white shadow-md animate-in slide-in-from-top-2' 
        : 'relative bg-transparent'
    }`}>
      
      <nav className={`mx-auto flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'py-2' : 'pt-6 pb-2'
      } ${
        isHomePage ? 'w-full px-4 sm:px-6 lg:px-12' : 'w-full max-w-[1100px] px-4 sm:px-6'
      }`}>
        
        {/* LOGO SECTION */}
        <div className="flex items-center cursor-pointer relative z-[999999]">
          <Link to="/">
            <img 
              src="/swad-sudha-logo.png" 
              alt="SwadSudha Logo" 
              className={`w-auto object-contain transition-all duration-300 origin-left drop-shadow-md hover:scale-105 ${
                isScrolled ? 'h-10 sm:h-12' : 'h-20 sm:h-30 lg:h-[90px]'
              }`} 
            />
          </Link>
        </div>

        {/* MENU & BUTTON SECTION */}
        <div className="flex items-center gap-4 lg:gap-6 relative z-[999999]">
          
          {/* =========================================================
              🔴 DESKTOP MENU LINKS (Added FAQ & Privacy Policy)
              ========================================================= */}
          <div className={`hidden md:flex items-center gap-6 xl:gap-8 font-bold text-[14px] px-8 py-2.5 transition-all rounded-full ${
            isScrolled 
              ? 'text-gray-800' 
              : 'text-gray-700 lg:text-white lg:bg-white/10 lg:backdrop-blur-md lg:border lg:border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          }`}>
            <Link to="/" className={`transition-colors drop-shadow-sm ${isScrolled ? 'hover:text-[#7cb342]' : 'hover:text-[#7cb342] lg:hover:text-[#a4e363]'}`}>Home</Link>
            <Link to="/about" className={`transition-colors drop-shadow-sm ${isScrolled ? 'hover:text-[#7cb342]' : 'hover:text-[#7cb342] lg:hover:text-[#a4e363]'}`}>About</Link>
            <Link to="/menu" className={`transition-colors drop-shadow-sm ${isScrolled ? 'hover:text-[#7cb342]' : 'hover:text-[#7cb342] lg:hover:text-[#a4e363]'}`}>Our Menu</Link>
            <Link to="/subscription" className={`transition-colors drop-shadow-sm ${isScrolled ? 'hover:text-[#7cb342]' : 'hover:text-[#7cb342] lg:hover:text-[#a4e363]'}`}>Subscription</Link>
            {/* New Links Added Here */}
            <Link to="/faq" className={`transition-colors drop-shadow-sm ${isScrolled ? 'hover:text-[#7cb342]' : 'hover:text-[#7cb342] lg:hover:text-[#a4e363]'}`}>FAQ</Link>
            <Link to="/privacy-policy" className={`transition-colors drop-shadow-sm ${isScrolled ? 'hover:text-[#7cb342]' : 'hover:text-[#7cb342] lg:hover:text-[#a4e363]'}`}>Privacy</Link>
            <Link to="/contact" className={`transition-colors drop-shadow-sm ${isScrolled ? 'hover:text-[#7cb342]' : 'hover:text-[#7cb342] lg:hover:text-[#a4e363]'}`}>Contact</Link>
          </div>
          
          {/* Desktop Order Button & Cart Dropdown */}
          <div className="hidden sm:flex items-center relative">
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className={`bg-gradient-to-r from-[#7cb342] to-[#568a35] text-white font-bold shadow-[0_5px_15px_rgba(124,179,66,0.3)] hover:shadow-[0_8px_20px_rgba(124,179,66,0.4)] transition-all flex items-center gap-2 hover:-translate-y-0.5 border border-[#7cb342]/50 rounded-md relative ${
                isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-2.5 text-sm'
              }`}
            >
              <ShoppingBag size={isScrolled ? 16 : 18} /> 
              {safeCart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shadow-md">
                  {safeCart.length}
                </span>
              )}
              <span className="hidden lg:inline">CheckOut</span>
            </button>

            {isCartOpen && (
              <div className="absolute top-[130%] right-0 w-[320px] bg-white rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden z-[999999] animate-in fade-in zoom-in-95 duration-200 text-left">
                <div className="absolute -top-2 right-12 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                <div className="max-h-[320px] overflow-y-auto bg-white relative z-10 custom-scrollbar">
                  {safeCart.length === 0 ? (
                    <div className="p-8 text-center text-gray-500 font-medium">Aapka cart khali hai.</div>
                  ) : (
                    safeCart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-200 border-dashed">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 bg-green-50 rounded flex items-center justify-center shrink-0">
                            <Utensils size={24} className="text-[#7cb342]" />
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-extrabold text-[15px] leading-tight m-0">{item.name}</h4>
                            <p className="text-[#7CB342] font-semibold text-[15px] m-0 mt-1">₹{item.price} <span className="text-gray-400 text-xs font-medium ml-1">x {item.qty}</span></p>
                          </div>
                        </div>
                        <button onClick={() => handleRemove(item.id)} className="w-7 h-7 bg-red-600 text-white rounded-[4px] flex items-center justify-center hover:bg-red-700 transition-colors shrink-0">
                          <X size={16} strokeWidth={3} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
                {safeCart.length > 0 && (
                  <div className="p-4 bg-white relative z-10">
                    <div className="flex justify-between items-center mb-4 px-1">
                      <span className="text-[#7CB342] font-extrabold text-xl tracking-wide">Total:</span>
                      <span className="text-[#7CB342] font-extrabold text-xl">₹{cartTotal}</span>
                    </div>
                    <div className="flex gap-3">
                      <Link to="/checkout" onClick={() => setIsCartOpen(false)} className="flex-1 bg-[#7cb342] hover:bg-[#669936] text-white text-center py-2.5 rounded-md font-bold text-[15px] transition-colors shadow-sm block">
                        View Cart
                      </Link>
                      <Link to="/menu" onClick={() => setIsCartOpen(false)} className="flex-1 bg-white border-2 border-[#7cb342] text-[#7cb342] hover:bg-green-50 text-center py-2 rounded-md font-bold text-[15px] transition-colors block">
                        Menu
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE CART ICON & HAMBURGER */}
          <div className="flex items-center gap-3 sm:hidden">
            <button 
              className={`relative p-2 rounded-md border transition-colors ${
                isScrolled ? 'text-[#7cb342] bg-[#7cb342]/10 border-[#7cb342]/20' : 'text-white bg-white/20 backdrop-blur-md border-white/40'
              }`}
              onClick={() => { setIsCartOpen(!isCartOpen); setIsMobileMenuOpen(false); }}
            >
              <ShoppingBag size={20} />
              {safeCart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white rounded-full w-[18px] h-[18px] flex items-center justify-center text-[9px] font-bold shadow-sm">
                  {safeCart.length}
                </span>
              )}
            </button>
            <button 
              className={`flex items-center justify-center p-2 rounded-md shadow-sm active:scale-95 transition-colors ${
                isScrolled ? 'bg-[#7cb342] text-white' : 'text-white bg-[#7cb342]/90 backdrop-blur-sm border border-[#7cb342]/50'
              }`}
              onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsCartOpen(false); }}
            >
              <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>

        </div>

        {/* MOBILE CART POPUP */}
        {isCartOpen && (
          <div className="fixed inset-0 z-[999998] bg-black/30 backdrop-blur-sm sm:hidden" onClick={() => setIsCartOpen(false)}>
            <div 
              className="absolute top-[70px] right-4 left-4 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-4 fade-in text-left"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="max-h-[50vh] overflow-y-auto bg-white p-2">
                {safeCart.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 font-medium">Aapka cart khali hai.</div>
                ) : (
                  safeCart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border-b border-gray-200 border-dashed">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-50 rounded flex items-center justify-center shrink-0">
                          <Utensils size={20} className="text-[#7cb342]" />
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-extrabold text-[14px] leading-tight m-0">{item.name}</h4>
                          <p className="text-[#7CB342] font-semibold text-[14px] m-0 mt-0.5">₹{item.price} <span className="text-gray-400 text-xs ml-1">x{item.qty}</span></p>
                        </div>
                      </div>
                      <button onClick={() => handleRemove(item.id)} className="w-7 h-7 bg-red-600 text-white rounded flex items-center justify-center hover:bg-red-700 shrink-0">
                        <X size={16} strokeWidth={3} />
                      </button>
                    </div>
                  ))
                )}
              </div>
              
              {safeCart.length > 0 && (
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#7CB342] font-extrabold text-lg">Total:</span>
                    <span className="text-[#7CB342] font-extrabold text-lg">₹{cartTotal}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link to="/checkout" onClick={() => setIsCartOpen(false)} className="flex-1 bg-[#7cb342] text-white text-center py-2.5 rounded-lg font-bold text-[14px] shadow-sm block">
                      View Cart
                    </Link>
                    <Link to="/menu" onClick={() => setIsCartOpen(false)} className="flex-1 bg-white border-2 border-[#7cb342] text-[#7cb342] text-center py-2 rounded-lg font-bold text-[14px] block">
                      Menu
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =========================================================
            🔴 MOBILE SIDEBAR MENU (Added FAQ & Privacy Policy)
            ========================================================= */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[999998] md:hidden flex justify-start">
            
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="absolute top-4 right-4 w-10 h-10 bg-[#568a35] hover:bg-[#467b2d] rounded-md flex items-center justify-center text-white z-[999999] shadow-lg border border-white/20 transition-colors"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            <div className="relative h-screen w-[280px] bg-white shadow-[20px_0_60px_rgba(0,0,0,0.3)] flex flex-col z-[999999] animate-in slide-in-from-left duration-300 text-left">
              
              <div className="flex items-center px-6 py-6 border-b border-gray-100">
                <img src="/swad-sudha-logo.png" alt="SwadSudha Logo" className="h-12 object-contain" />
              </div>

              <div className="flex flex-col overflow-y-auto flex-grow custom-scrollbar">
                
                <Link to="/" onClick={handleLinkClick} className="flex items-center justify-between py-4 px-6 border-b border-gray-100 font-bold text-[15px] text-gray-800 hover:text-[#7cb342] transition-colors group">
                  <span>Home</span>
                  <div className="w-8 h-8 rounded-md bg-[#7cb342] flex items-center justify-center shadow-sm group-hover:bg-[#568a35] transition-colors">
                    <ChevronRight size={18} className="text-white" />
                  </div>
                </Link>

                <Link to="/about" onClick={handleLinkClick} className="flex items-center justify-between py-4 px-6 border-b border-gray-100 font-bold text-[15px] text-gray-800 hover:text-[#7cb342] transition-colors group">
                  <span>About Us</span>
                  <div className="w-8 h-8 rounded-md bg-[#7cb342] flex items-center justify-center shadow-sm group-hover:bg-[#568a35] transition-colors">
                    <ChevronRight size={18} className="text-white" />
                  </div>
                </Link>

                <Link to="/menu" onClick={handleLinkClick} className="flex items-center justify-between py-4 px-6 border-b border-gray-100 font-bold text-[15px] text-gray-800 hover:text-[#7cb342] transition-colors group">
                  <span>Our Menu</span>
                  <div className="w-8 h-8 rounded-md bg-[#7cb342] flex items-center justify-center shadow-sm group-hover:bg-[#568a35] transition-colors">
                    <ChevronRight size={18} className="text-white" />
                  </div>
                </Link>

                <Link to="/subscription" onClick={handleLinkClick} className="flex items-center justify-between py-4 px-6 border-b border-gray-100 font-bold text-[15px] text-gray-800 hover:text-[#7cb342] transition-colors group">
                  <span>Subscription</span>
                  <div className="w-8 h-8 rounded-md bg-[#7cb342] flex items-center justify-center shadow-sm group-hover:bg-[#568a35] transition-colors">
                    <ChevronRight size={18} className="text-white" />
                  </div>
                </Link>

                {/* 🔴 NEW LINKS IN MOBILE SIDEBAR */}
                <Link to="/faq" onClick={handleLinkClick} className="flex items-center justify-between py-4 px-6 border-b border-gray-100 font-bold text-[15px] text-gray-800 hover:text-[#7cb342] transition-colors group">
                  <span>FAQ</span>
                  <div className="w-8 h-8 rounded-md bg-[#7cb342] flex items-center justify-center shadow-sm group-hover:bg-[#568a35] transition-colors">
                    <ChevronRight size={18} className="text-white" />
                  </div>
                </Link>

                <Link to="/privacy-policy" onClick={handleLinkClick} className="flex items-center justify-between py-4 px-6 border-b border-gray-100 font-bold text-[15px] text-gray-800 hover:text-[#7cb342] transition-colors group">
                  <span>Privacy Policy</span>
                  <div className="w-8 h-8 rounded-md bg-[#7cb342] flex items-center justify-center shadow-sm group-hover:bg-[#568a35] transition-colors">
                    <ChevronRight size={18} className="text-white" />
                  </div>
                </Link>

                <Link to="/contact" onClick={handleLinkClick} className="flex items-center justify-between py-4 px-6 border-b border-gray-100 font-bold text-[15px] text-gray-800 hover:text-[#7cb342] transition-colors group">
                  <span>Contact Us</span>
                  <div className="w-8 h-8 rounded-md bg-[#7cb342] flex items-center justify-center shadow-sm group-hover:bg-[#568a35] transition-colors">
                    <ChevronRight size={18} className="text-white" />
                  </div>
                </Link>

                {/* Social Icons */}
                <div className="mt-6 mb-8 flex items-center justify-center gap-3 px-6">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-[#7cb342] hover:text-white hover:bg-[#7cb342] hover:border-[#7cb342] transition-all">
                    <Facebook size={18} strokeWidth={2.5} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-[#7cb342] hover:text-white hover:bg-[#7cb342] hover:border-[#7cb342] transition-all">
                    <Twitter size={18} strokeWidth={2.5} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-[#7cb342] hover:text-white hover:bg-[#7cb342] hover:border-[#7cb342] transition-all">
                    <Youtube size={18} strokeWidth={2.5} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-[#7cb342] hover:text-white hover:bg-[#7cb342] hover:border-[#7cb342] transition-all">
                    <Instagram size={18} strokeWidth={2.5} />
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
};

export default NavBar;