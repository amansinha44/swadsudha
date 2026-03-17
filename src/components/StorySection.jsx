import React from 'react';

export default function StorySection() {
  return (
    <div className="py-16 bg-white overflow-hidden border-y-2 border-green-100">
      
      {/* Custom CSS for Aroma/Steam Animation & Heartbeat */}
      <style>{`
        @keyframes steam {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          15% { opacity: 1; }
          50% { transform: translateY(-20px) scaleX(1.2); opacity: 0.8; }
          100% { transform: translateY(-40px) scaleX(1); opacity: 0; }
        }
        .aroma-line {
          animation: steam 2s infinite ease-out;
        }
        .aroma-line:nth-child(2) { animation-delay: 0.4s; }
        .aroma-line:nth-child(3) { animation-delay: 0.8s; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0F3832] mb-12">
          Ek Tiffin, <span className="text-[#4CAF50]">Poore Parivaar Ki Muskaan</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Scene 1: The Tiffin & Aroma */}
          <div className="bg-green-50/50 rounded-2xl p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl border border-green-100">
            <div className="h-32 flex flex-col items-center justify-end relative mb-4">
              {/* Animated Steam lines */}
              <div className="absolute top-4 flex gap-2 text-[#4CAF50] font-bold">
                <span className="aroma-line text-2xl">〰</span>
                <span className="aroma-line text-3xl">〰</span>
                <span className="aroma-line text-2xl">〰</span>
              </div>
              {/* Box Image / Emoji */}
              <div className="w-20 h-20 bg-[#0F3832] rounded-xl flex items-center justify-center text-4xl shadow-lg z-10">
                🍱
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F3832] mb-2">Ghar Jaisi Khushbu</h3>
            <p className="text-gray-600 text-sm">
              Jaise hi Swad Sudha ka premium tiffin khulta hai, pure ghee aur taaze masalon ki mehak poore kamre mein phail jaati hai.
            </p>
          </div>

          {/* Scene 2: The Gym Boy Smile */}
          <div className="bg-green-50/50 rounded-2xl p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl border border-green-100 mt-0 md:mt-8">
            <div className="h-32 flex items-center justify-center mb-4">
               {/* Bouncing Emoji / Icon */}
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg border-4 border-[#4CAF50] animate-bounce">
                💪😎
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F3832] mb-2">High-Protein Power</h3>
            <p className="text-gray-600 text-sm">
              Gym se thak kar aaye bete ko jab 28g protein wala Soya aur Sprout bowl milta hai, toh chehre par ek solid muskaan aa jati hai.
            </p>
          </div>

          {/* Scene 3: The Complete Family */}
          <div className="bg-green-50/50 rounded-2xl p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl border border-green-100 mt-0 md:mt-16">
            <div className="h-32 flex items-center justify-center mb-4 relative">
               {/* Ping animation for love */}
               <div className="absolute top-2 right-12 animate-ping text-red-500 text-xl">❤️</div>
               <div className="w-24 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-lg border-4 border-[#0F3832]">
                👨‍👩‍👦✨
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F3832] mb-2">Sabki Sehat, Ek Saath</h3>
            <p className="text-gray-600 text-sm">
              Papa ko comfort food mile, aur ghar mein khelte 2.5 saal ke bacche ko safe, hygienic khana. Sudha ki rasoi sabka khayal rakhti hai.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}