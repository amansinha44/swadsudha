import React from 'react';
// 🔴 Sirf wahi safe icons jo aapke project me already 100% chal rahe hain!
import { Leaf, Droplets, ShieldCheck, Heart, CheckCircle2, X, ShoppingBag, Phone, Home, Gift, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-12 px-4 md:px-6 font-body w-full max-w-[1100px] mx-auto relative z-10" id="about">
      
      {/* =========================================
          1. HERO STORY SECTION 
          ========================================= */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row items-stretch overflow-hidden mb-16">
        
        <div className="w-full md:w-1/2 bg-[#7CB342] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 mb-6 w-fit text-white">
              <Gift size={18} className="text-yellow-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-white">100% Pure Veg| Hygiene</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading text-white mb-6 leading-tight drop-shadow-sm">
              Ghar ka Swad,<br/>
              <span className="text-yellow-300">Lucknow ke Dil se</span>
            </h1>
            
            <p className="text-white/95 leading-relaxed text-lg font-medium mb-6">
              Started as an idea to share authentic, healthy, homemade food with love. We don't just cook; we craft memories.
            </p>
            <p className="text-white/90 leading-relaxed text-md mb-8">
              From Indori Poha to royal Matar Paneer, every dish uses fresh ingredients, pure <strong className="text-yellow-300">Desi Ghee</strong>, and strict hygiene to ensure you enjoy 'maa ke haath ka swad' every day.
            </p>

            <a href="/menu" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#2d4d1d] font-bold px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95">
              Explore Menu <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative">
          <img 
            src="./vegthaali.jpg" 
            alt="Healthy Fresh Food" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>

      {/* =========================================
          2. THE CORE PROMISES (Dynamic Colors)
          ========================================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
        
        {/* Promise 1: Pure Veg - GREEN Theme */}
        {/* 🟢 CHANGE: bg-green-50, border-green-200 */}
        <div className="bg-green-50 rounded-xl p-4 sm:p-8 border border-green-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 group text-center flex flex-col items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-3 sm:mb-5 group-hover:-translate-y-1 transition-transform">
            <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 tracking-wide">Pure Veg</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">100% vegetarian kitchen, guaranteed purity.</p>
        </div>

        {/* Promise 2: Desi Ghee - AMBER/Peela Theme */}
        {/* 🟢 CHANGE: bg-amber-50, border-amber-200 */}
        <div className="bg-amber-50 rounded-xl p-4 sm:p-8 border border-amber-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 group text-center flex flex-col items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-3 sm:mb-5 group-hover:-translate-y-1 transition-transform">
            <Droplets className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 tracking-wide">Desi Ghee</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">Authentic taste with premium Desi Ghee.</p>
        </div>

        {/* Promise 3: Hi-Tech Hygiene - BLUE Theme */}
        {/* 🟢 CHANGE: bg-blue-50, border-blue-200 */}
        <div className="bg-blue-50 rounded-xl p-4 sm:p-8 border border-blue-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group text-center flex flex-col items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-3 sm:mb-5 group-hover:-translate-y-1 transition-transform">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 tracking-wide">Hi-Tech Hygiene</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">Spotless, FSSAI certified cloud kitchen.</p>
        </div>

        {/* Promise 4: Happiness - ROSE/Gulaabi Theme */}
        {/* 🟢 CHANGE: bg-rose-50, border-rose-200 */}
        <div className="bg-rose-50 rounded-xl p-4 sm:p-8 border border-rose-200 shadow-sm hover:shadow-md hover:border-rose-300 transition-all duration-300 group text-center flex flex-col items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-rose-100 text-rose-700 rounded-xl flex items-center justify-center mb-3 sm:mb-5 group-hover:-translate-y-1 transition-transform">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 tracking-wide">Happiness</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">Maa ke haath ka swad in every single bite.</p>
        </div>

      </div>

      {/* =========================================
          3. COMPARISON GRID (Dynamic Colors)
          ========================================= */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-[#2d4d1d] mb-3">Why Swad Sudha Beats All</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">See how we offer the perfect balance of affordability and premium quality.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          
          {/* THE WINNER: SWAD SUDHA - Keeps Brand Green */}
          <div className="bg-[#7CB342] rounded-xl p-8 text-white shadow-xl lg:scale-105 z-20 border-2 border-yellow-300/50 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#7CB342]/40">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="flex flex-col items-center text-center mb-8 pb-6 border-b border-white/20 relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <Gift size={32} className="text-yellow-300" />
              </div>
              <p className="text-yellow-300 font-bold uppercase tracking-widest text-xs mb-1">Top Choice</p>
              <h3 className="text-3xl font-heading text-white tracking-wide">Swad Sudha</h3>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-white/70 mb-1">Price per Meal</p>
                <p className="text-xl font-extrabold text-white">₹60 - ₹100</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-white/70 mb-1">Delivery</p>
                <p className="font-bold flex items-center gap-2 text-yellow-300">
                  <CheckCircle2 size={18} /> Free Delivery
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-white/70 mb-1">Quality & Taste</p>
                <p className="font-bold">100% Home-Cooked</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-white/70 mb-1">Savings</p>
                <p className="text-xl font-extrabold text-yellow-300">Save ₹20k+/yr</p>
              </div>
            </div>
          </div>

          {/* ALTERNATIVE 1: Restaurants - SKY/Halka Neela Theme */}
          {/* 🟢 CHANGE: bg-sky-50, border-sky-200 */}
          <div className="bg-sky-50 rounded-xl p-6 border border-sky-200 shadow-sm opacity-95 hover:opacity-100 hover:border-sky-300 transition-all z-10">
            <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-sky-100">
              <div className="w-14 h-14 bg-sky-100 text-sky-700 rounded-xl flex items-center justify-center mb-4">
                <ShoppingBag size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Restaurants</h3>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-sky-600 mb-1">Price per Meal</p>
                <p className="text-md font-semibold text-gray-800">₹120 - ₹200</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-sky-600 mb-1">Delivery</p>
                <p className="font-medium flex items-center gap-2 text-gray-600">
                  <X size={16} className="text-red-400" /> Extra Charges
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-sky-600 mb-1">Quality & Taste</p>
                <p className="font-medium text-gray-600">Commercial/Oily</p>
              </div>
            </div>
          </div>

          {/* ALTERNATIVE 2: Food Apps - ORANGE/Halka Narangi Theme */}
          {/* 🟢 CHANGE: bg-orange-50, border-orange-200 */}
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 shadow-sm opacity-95 hover:opacity-100 hover:border-orange-300 transition-all z-10">
            <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-orange-100">
              <div className="w-14 h-14 bg-orange-100 text-orange-700 rounded-xl flex items-center justify-center mb-4">
                <Phone size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Food Apps</h3>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-orange-600 mb-1">Price per Meal</p>
                <p className="text-md font-semibold text-gray-800">₹150+ & Taxes</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-orange-600 mb-1">Delivery</p>
                <p className="font-medium flex items-center gap-2 text-gray-600">
                  <X size={16} className="text-red-400" /> Surge Fees
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-orange-600 mb-1">Quality & Taste</p>
                <p className="font-medium text-gray-600">Inconsistent</p>
              </div>
            </div>
          </div>

          {/* ALTERNATIVE 3: Self Cooking - SLATE/Halka Grey Theme */}
          {/* 🟢 CHANGE: bg-slate-50, border-slate-200 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm opacity-95 hover:opacity-100 hover:border-slate-300 transition-all z-10">
            <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-slate-100">
              <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4">
                <Home size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Self Cooking</h3>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-600 mb-1">Price per Meal</p>
                <p className="text-md font-semibold text-gray-800">₹70+ (Groceries)</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-600 mb-1">Delivery</p>
                <p className="font-medium flex items-center gap-2 text-gray-600">
                  <X size={16} className="text-red-400" /> Your Time & Gas
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-600 mb-1">Quality & Taste</p>
                <p className="font-medium text-gray-600">Fresh Daily</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutUs;