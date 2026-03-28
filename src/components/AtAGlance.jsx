import React from 'react';
import { MapPin, IndianRupee, Utensils, CheckCircle2, Phone, MessageCircle } from 'lucide-react';


const AtAGlance = () => {
  return (
   
    <section className="py-12 px-4 sm:px-6 font-body w-full max-w-[1100px] mx-auto relative z-10">
      
      {/* Title */}
      <div className="text-center mb-8">
<h2   className="text-[2.25rem] md:text-[3.5rem] leading-tight text-gray-900 tracking-tight"
  style={{ fontFamily: "'Lobster', cursive" }}
>
  Swad Sudha <span className="text-[#7CB342]">— At a Glance</span>
</h2>
      </div>

      {/* 🔴 UPDATED: Main Card with Light Green Border & rounded-xl */}
      <div className="bg-[#fcfefa] border-2 border-[#a4e363]/60 rounded-xl p-6 md:p-10 shadow-[0_10px_40px_rgba(124,179,66,0.12)] transform transition-transform">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
          
          {/* Area Served */}
          <div className="flex items-start gap-4">
            <MapPin className="text-[#f59e0b] shrink-0 mt-1" size={24} strokeWidth={2} />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Area Served</p>
              <p className="text-gray-800 font-semibold text-[15px] leading-snug">
                Gomti Nagar, Lucknow<br/>
                <span className="text-sm font-medium text-gray-500">Free Delivery</span>
              </p>
            </div>
          </div>

          {/* Starting Price */}
          <div className="flex items-start gap-4">
            <IndianRupee className="text-[#f59e0b] shrink-0 mt-1" size={24} strokeWidth={2} />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Starting Price</p>
              <p className="text-gray-800 font-semibold text-[15px] leading-snug">
                ₹50/meal (Super Combo Lunch)<br/>
                <span className="text-sm font-medium text-gray-500">₹1,500/month (Estimated)</span>
              </p>
            </div>
          </div>

          {/* Meals Offered */}
          <div className="flex items-start gap-4">
            <Utensils className="text-[#f59e0b] shrink-0 mt-1" size={24} strokeWidth={2} />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Meals Offered</p>
              <p className="text-gray-800 font-semibold text-[15px] leading-snug">
                Breakfast (Before 8 AM)<br/>
                <span className="text-sm font-medium text-gray-500">Lunch (Before 12 PM) + Dinner (Before 7 PM)</span>
              </p>
            </div>
          </div>

          {/* Premium Highlight Box */}
          <div className="bg-[#f0f7e6] border border-[#7CB342]/40 rounded-xl p-4 flex items-start gap-3 shadow-[0_0_15px_rgba(124,179,66,0.1)] relative">
            <CheckCircle2 className="text-[#7CB342] shrink-0 mt-0.5" size={24} strokeWidth={2.5} />
            <div>
              <p className="text-xs font-bold text-[#558228] uppercase tracking-widest mb-1">Pure Desi Ghee</p>
              <p className="text-gray-800 font-bold text-[14px] leading-snug">
                100% Pure Veg — Prepared with Hi-Tech Hygiene & Traditional Taste
              </p>
            </div>
            <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(164,227,99,0.25)] opacity-50 pointer-events-none"></div>
          </div>

          {/* Order Now */}
          <div className="flex items-start gap-4 md:mt-4 group cursor-pointer">
            <Phone className="text-[#f59e0b] group-hover:text-green-700 shrink-0 mt-0.5" size={24} strokeWidth={2} />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Order Now</p>
              <a href="tel:+917007948170" className="text-gray-800 font-bold text-[15px] group-hover:text-[#7CB342] transition-colors">
                Call: +91 7007-948-170
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4 md:mt-4 group cursor-pointer">
            <MessageCircle className="text-[#10b981] group-hover:text-green-900 shrink-0 mt-0.5" size={24} strokeWidth={2} />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
              <a href="https://wa.me/917007948170" target="_blank" rel="noreferrer" className="text-gray-800 font-bold text-[15px] group-hover:text-[#10b981] transition-colors">
                Chat: +91 7007-948-170
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AtAGlance;
