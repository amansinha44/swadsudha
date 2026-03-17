import React from 'react';

// NEW: White opacity SVG for Green Background (Cooker, Carrot, Radish, Leaves)
export const kitchenPatternURL = "data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3C!-- Cooker --%3E%3Cpath d='M20 30 h15 v20 a5 5 0 0 1 -5 5 h-5 a5 5 0 0 1 -5 -5 v-20 z m 3 -6 h9 v6 h-9 z m 2 -5 h5 v5 h-5 z' /%3E%3C!-- Carrot --%3E%3Cpath d='M80 30 L 88 20 L 100 32 L 88 45 Z' /%3E%3Cpath d='M80 30 Q 70 20 85 10' fill='none' stroke='%23ffffff' stroke-width='2' stroke-opacity='0.08' /%3E%3C!-- Leaves --%3E%3Cpath d='M20 90 Q 35 75 50 90 Q 35 105 20 90 Z' /%3E%3Cpath d='M20 90 L 35 95' fill='none' stroke='%23ffffff' stroke-width='2' stroke-opacity='0.08' /%3E%3C!-- Radish --%3E%3Ccircle cx='90' cy='90' r='10' /%3E%3Cpath d='M90 100 L 90 110 M 85 82 Q 75 70 82 62 M 95 82 Q 105 70 98 62' fill='none' stroke='%23ffffff' stroke-width='2' stroke-opacity='0.08' /%3E%3C/g%3E%3C/svg%3E";

const HeroRightSection = () => {
  return (
    <div className="w-full lg:w-[50%] relative flex flex-col justify-end mt-8 lg:mt-0 min-h-[500px] lg:min-h-[600px] z-0 bg-[#467b2d] lg:bg-transparent rounded-t-[40px] lg:rounded-none pt-12 lg:pt-0">
      
      {/* Mobile Pattern (Only for small screens) */}
      <div className="absolute inset-0 lg:hidden" style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}></div>

      {/* Black Doodle Arrow */}
      <div className="absolute top-[5%] left-[5%] opacity-60 z-10 hidden lg:block pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 150 150" fill="none" stroke="#234215" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,120 C10,40 60,140 80,60 C90,20 120,30 140,10" />
          <path d="M115,10 L140,10 L135,35" />
        </svg>
      </div>

      {/* CHEF LADY */}
      <div className="absolute bottom-[30%] lg:bottom-[35%] right-[0%] lg:right-[-7%] w-[70%] max-w-[400px] z-10 pointer-events-none">
        <img src="/bavarci.png" alt="Chef Lady" className="w-full h-auto object-contain drop-shadow-2xl" />
      </div>

      {/* SPRINKLE ANIMATION */}
      <div className="absolute bottom-[60%] lg:bottom-[66%] right-[38%] lg:right-[42%] w-[50px] h-[150px] z-20 pointer-events-none">
        <div className="dust-particle w-2.5 h-2.5 left-[10%] top-[0%]" style={{animationDelay: '0s'}}></div>
        <div className="dust-particle w-2 h-2 left-[40%] top-[20%]" style={{animationDelay: '0.3s'}}></div>
        <div className="dust-particle w-3 h-3 left-[20%] top-[40%]" style={{animationDelay: '0.6s'}}></div>
        <div className="dust-particle w-1.5 h-1.5 left-[60%] top-[60%]" style={{animationDelay: '0.9s'}}></div>
        <div className="dust-particle w-2.5 h-2.5 left-[30%] top-[80%]" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-[50%] left-[10%] text-xl drop-shadow-md z-40 animate-[magic-dust_4s_linear_infinite]">🌿</div>
      </div>

      {/* ================================================================ */}
      {/* 3. TABLE BACKGROUND (FIXED Z-INDEX & NO GAPS) */}
      <div className="absolute bottom-0 left-[-8px] w-full lg:w-[50vw] h-[220px] lg:h-[260px] z-20 pointer-events-none">
         <img src="/table.png" alt="Wooden Table" className="w-full h-full object-cover object-center lg:object-left-top drop-shadow-2xl" />
      </div>

      {/* 4. CONTENT WRAPPER FOR TIFFIN & PLATES */}
      <div className="relative w-full h-[220px] lg:h-[260px] z-30 mt-auto">
         
         {/* TIFFIN */}
         <div className="absolute bottom-[35%] lg:bottom-[35%] left-1/2 -translate-x-1/2 w-[25%] lg:w-[33%] flex flex-col items-center">
            <img src="/tiffin.png" alt="Tiffin Box" className="w-full h-auto object-contain drop-shadow-2xl" />
         </div>

         {/* FOOD PLATES ARRANGEMENT */}
         <div className="absolute bottom-[5%] lg:bottom-[8%] left-[20px] w-[calc(100%-40px)] lg:w-full lg:px-[2%] lg:pr-[5%] flex justify-between items-end">
           
           {/* Plate 1 */}
           <div className="relative w-[23%] flex flex-col items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
             <div className="absolute bottom-[90%] left-1/2 -translate-x-1/2 mb-1 pointer-events-none w-full">
               <div className="steam-text-badge font-hindi text-[16px] sm:text-[22px] lg:text-[28px]" style={{animationDelay: '0s'}}>'माँ का<br/>स्वाद</div>
             </div>
             <img src="/bowl_1.png" alt="Indian Thali" className="w-full h-auto object-contain drop-shadow-xl" />
             <span className="text-white text-[8px] sm:text-[10px] lg:text-[12px] font-bold mt-1 lg:mt-2 drop-shadow-md whitespace-nowrap text-center bg-black/20 px-2 py-0.5 rounded-full">Indian Thali</span>
           </div>

           {/* Plate 2 */}
           <div className="relative w-[23%] flex flex-col items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
             <div className="absolute bottom-[90%] left-1/2 -translate-x-1/2 mb-1 pointer-events-none w-full">
               <div className="steam-text-badge font-hindi text-[14px] sm:text-[18px] lg:text-[22px] leading-tight" style={{animationDelay: '1.5s'}}>स्वादिष्ट और<br/>पौष्टिक</div>
             </div>
             <img src="/bowl_2.png" alt="Bowl of Paneer" className="w-full h-auto object-contain drop-shadow-xl" />
             <span className="text-white text-[8px] sm:text-[10px] lg:text-[12px] font-bold mt-1 lg:mt-2 drop-shadow-md whitespace-nowrap text-center bg-black/20 px-2 py-0.5 rounded-full">Bowl of Paneer</span>
           </div>

           {/* Plate 3 */}
           <div className="relative w-[23%] flex flex-col items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
             <div className="absolute bottom-[90%] left-1/2 -translate-x-1/2 mb-1 pointer-events-none w-full">
               <div className="steam-text-badge font-hindi text-[16px] sm:text-[22px] lg:text-[28px]" style={{animationDelay: '0.8s'}}>हेल्दी</div>
             </div>
             <img src="/bowl_3.png" alt="Diet Meal Bowl" className="w-full h-auto object-contain drop-shadow-xl" />
             <span className="text-white text-[8px] sm:text-[10px] lg:text-[12px] font-bold mt-1 lg:mt-2 drop-shadow-md whitespace-nowrap text-center bg-black/20 px-2 py-0.5 rounded-full">Diet Meal Bowl</span>
           </div>

           {/* Plate 4 */}
           <div className="relative w-[23%] flex flex-col items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300">
             <div className="absolute bottom-[90%] left-1/2 -translate-x-1/2 mb-1 pointer-events-none w-full">
               <div className="steam-text-badge font-hindi text-[16px] sm:text-[22px] lg:text-[28px]" style={{animationDelay: '2.2s'}}>प्योर वेज</div>
             </div>
             <img src="/bowl_4.png" alt="Bowl of Dal Rice" className="w-full h-auto object-contain drop-shadow-xl" />
             <span className="text-white text-[8px] sm:text-[10px] lg:text-[12px] font-bold mt-1 lg:mt-2 drop-shadow-md whitespace-nowrap text-center bg-black/20 px-2 py-0.5 rounded-full">Bowl of Dal Rice</span>
           </div>

         </div>
      </div>
    </div>
  );
};

export default HeroRightSection;