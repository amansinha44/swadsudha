import React from 'react';
import NavBar from './components/NavBar'; 
import Hero from './components/Hero';
import HeroRightSection, { kitchenPatternURL } from './components/HeroRightSection';
import SpecialMenu from './components/SpecialMenu';
import TodaysMenu from './components/TodaysMenu';
import QualityServices from './components/QualityServices'; // Typo Fixed
import FromOurMenu from './components/FromOurMenu';
import Reservation from './components/Reservation';
import CustomersComment from './components/CustomersComment';
import Footer from './components/Footer';

export default function App() {
  return (
    // Body is completely light cream
    <div className="min-h-screen bg-[#f8fbef] font-sans text-gray-800 overflow-x-hidden selection:bg-[#6e9b34] selection:text-white flex flex-col relative z-0">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@600;700;800&family=Lobster&family=Poppins:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Yatra+One&display=swap');
        .font-heading { font-family: 'Lobster', cursive; letter-spacing: 1px; }
        .font-body { font-family: 'Poppins', sans-serif; }
        .font-hindi { font-family: 'Yatra One', cursive; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
        @keyframes smoke-text-magic {
          0% { transform: translate(-50%, 10px) scale(0.6); color: transparent; text-shadow: 0 0 20px rgba(255,255,255,0.9); opacity: 0; filter: blur(8px); }
          20% { transform: translate(-50%, -20px) scale(1); color: #fff; text-shadow: 0px 4px 10px rgba(0,0,0,0.6), 0 0 8px rgba(255,255,255,0.8); opacity: 1; filter: blur(0px); }
          60% { transform: translate(-50%, -50px) scale(1.1); color: rgba(255,255,255,0.9); opacity: 0.9; filter: blur(0px); }
          100% { transform: translate(-50%, -80px) scale(1.2); color: transparent; text-shadow: 0 0 30px rgba(255,255,255,0); opacity: 0; filter: blur(10px); }
        }
        .steam-text-badge { position: absolute; left: 50%; white-space: nowrap; pointer-events: none; z-index: 60; animation: smoke-text-magic 4s ease-in-out infinite; text-align: center; line-height: 1.1; }
        @keyframes magic-dust { 0% { transform: translateY(0) scale(0.5); opacity: 1; } 100% { transform: translateY(120px) scale(1.5); opacity: 0; } }
        .dust-particle { position: absolute; background: #fcd34d; border-radius: 50%; box-shadow: 0 0 8px 2px rgba(252, 211, 77, 0.8); animation: magic-dust 2.5s linear infinite; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ======================================================= */}
      {/* 1440PX MASTER CONTAINER: Nothing bleeds out of this box */}
      {/* ======================================================= */}
      <div className="w-full max-w-[1440px] mx-auto relative flex flex-col flex-grow">

        {/* GREEN DESKTOP BACKGROUND: Strictly locked to the right 50% of the 1440px box */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] bg-[#467b2d] z-0">
           <div className="absolute inset-0" style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}></div>
        </div>

        <NavBar />
        
        {/* flex-col-reverse makes Chef appear FIRST on mobile */}
        <div className="flex flex-col-reverse lg:flex-row w-full relative z-10 items-stretch flex-grow mt-2 lg:mt-6">
          <Hero />
          <HeroRightSection />
        </div>

      </div>

      <SpecialMenu />
      <TodaysMenu/>
      <QualityServices/> 
      <FromOurMenu/>
      <Reservation/>
      <CustomersComment/>
      <Footer/>

    </div>
  );
}