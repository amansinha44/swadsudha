import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="w-full lg:w-[50%] px-4 sm:px-6 lg:pl-8 lg:pr-10 flex flex-col justify-center py-6 relative z-10">
      <p className="text-[#c9742b] font-bold tracking-wide text-[14px] mb-3">High Quality Test Station</p>
      <h1 className="font-heading text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.05] text-[#1a1a1a] mb-5 drop-shadow-sm">
        Choosing The <br />Best <span className="text-[#568a35] italic drop-shadow-none">Quality Food</span>
      </h1>
      <p className="text-[#4b5563] text-[15px] md:text-[16px] leading-relaxed max-w-[480px] mb-8 font-medium">
        Every day the scmonic plate with hogo and SwadSudha, and pesexscited comon and best melium even, arpast canti to have in quality temperature.
      </p>
      
      <div className="flex flex-wrap items-center gap-3 mb-10 relative z-20">
        <button className="bg-[#568a35] text-white px-7 py-3 rounded-lg font-bold text-[15px] hover:bg-[#4a7a2b] shadow-lg transition-all">
          Book a Table
        </button>
        <button className="bg-transparent border-2 border-[#568a35] text-[#568a35] px-7 py-3 rounded-lg font-bold text-[15px] hover:bg-[#eef5e5] transition-colors">
          View More
        </button>
      </div>

      {/* ----- WIDER CAROUSEL CARD DESIGN ----- */}
      <div className="flex items-center gap-2 lg:gap-4 mt-4 w-full">
        {/* Arrows visible ONLY on mobile (lg:hidden) */}
        <button className="lg:hidden h-16 w-8 bg-[#e5e7eb] hover:bg-[#d1d5db] transition-colors flex items-center justify-center rounded-md shrink-0">
          <ChevronLeft size={20} className="text-gray-600" />
        </button>

        {/* Carousel Item 1 */}
        <div className="flex items-center gap-3 bg-white rounded-xl p-2.5 shadow-md border border-gray-100 flex-1 min-w-[180px]">
          <div className="w-[65px] h-[65px] rounded-xl overflow-hidden shrink-0 shadow-sm border border-gray-200">
            <img src="/bowl_1.png" alt="Thali" className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col justify-center pr-2">
            <h4 className="text-[15px] font-bold text-[#2b2b2b] mb-1">GharKaSwad</h4>
            <p className="text-[10px] text-gray-500 leading-snug">Authentic routine thali with pure Desi Ghee.</p>
          </div>
        </div>

        {/* Carousel Item 2 */}
        <div className="hidden sm:flex items-center gap-3 bg-white rounded-xl p-2.5 shadow-md border border-gray-100 flex-1 min-w-[180px]">
          <div className="w-[65px] h-[65px] rounded-xl overflow-hidden shrink-0 shadow-sm border border-gray-200">
            <img src="/bowl_3.png" alt="Diet Food" className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col justify-center pr-2">
            <h4 className="text-[15px] font-bold text-[#2b2b2b] mb-1">Fit-Life Diet</h4>
            <p className="text-[10px] text-gray-500 leading-snug">Zero-oil, high protein macro counted meals.</p>
          </div>
        </div>

        <button className="lg:hidden h-16 w-8 bg-[#e5e7eb] hover:bg-[#d1d5db] transition-colors flex items-center justify-center rounded-md shrink-0">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

    </div>
  );
};

export default Hero;