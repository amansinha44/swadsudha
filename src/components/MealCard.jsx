import React from 'react';

const MealCard = ({ image, title, description, price }) => {
  return (
    <div className="relative group bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 px-4 pb-8 pt-[160px] text-center w-full min-w-[250px] max-w-[280px] overflow-hidden border border-gray-100 mx-auto">
      
      {/* 1. Top Curved Background (Grey by default -> Green on hover) */}
      {/* w-[160%] and rounded-b-[50%] create that perfect deep curve */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-[140px] bg-[#f3f4f6] group-hover:bg-[#7cb342] transition-colors duration-500 rounded-b-[50%] z-0"></div>

      {/* 2. Orbiting Dashed Line & Yellow Dot (Reveals on Hover) */}
      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[150px] h-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
         <div className="w-full h-full animate-[spin_6s_linear_infinite] relative">
             {/* Dashed Circle */}
             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeDasharray="5 5" />
             </svg>
             {/* Yellow Dot */}
             <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#fbbf24] rounded-full border-2 border-white shadow-sm"></div>
         </div>
      </div>

      {/* 3. Floating Food Plate Image (With White Background Cutout & 360 Rotation) */}
      <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[130px] h-[130px] z-20">
         {/* White background behind the plate to create the cutout effect */}
         <div className="w-full h-full bg-white rounded-full p-1.5 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            <img 
              src={image} 
              alt={title} 
              /* Here is the 360 degree smooth rotation on hover */
              className="w-full h-full rounded-full object-cover transition-transform duration-[1000ms] ease-in-out group-hover:rotate-[360deg]" 
            />
         </div>
      </div>

      {/* 4. Text Content & Button */}
      <div className="relative z-30 flex flex-col h-full font-body items-center mt-2">
        <h3 className="font-extrabold text-[22px] text-[#1a1a1a] mb-2">{title}</h3>
        <p className="text-[#6b7280] text-[14px] mb-4 leading-snug px-2 max-w-[220px]">{description}</p>
        {/* Price color matches the screenshot */}
        <div className="text-[#7cb342] font-bold text-[22px] mb-6">₹{price}</div>
        
        {/* Button color changes slightly on hover to look interactive */}
        <button className="bg-[#7cb342] text-white px-8 py-2.5 rounded-lg font-bold hover:bg-[#689935] transition-colors text-[15px] shadow-md w-[85%]">
          Add To Cart
        </button>
      </div>

    </div>
  );
}

export default MealCard;