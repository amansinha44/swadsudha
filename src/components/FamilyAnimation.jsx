// src/components/FamilyAnimation.jsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Placeholder Lottie URL (Abhi ke liye - for structure)
const placeholderLottie = '/animation.json';
const FamilyAnimation = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-gray-100">
      
      {/* 1. Lottie Player Section */}
      <div className="w-full max-w-sm h-[300px]">
        <Player
          autoplay
          loop
          src={placeholderLottie} // YAHAN AAPKI REAL JSON FILE KA PATH/URL AAYEGA
          style={{ height: '300px', width: '300px' }}
        >
        </Player>
      </div>

      {/* 2. Story Text (Optional but feels good) */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-[#0F3832] mb-2">Muskaan, Sehat aur Swad</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Jab tiffin khule, toh khushbu poore ghar mein phail jaye. Papa ko comfort, bete ko protein, aur Ma ko hygiene ka bharosa mile. Bas yahi hai Swad Sudha.
        </p>
      </div>
      
    </div>
  );
};

export default FamilyAnimation;