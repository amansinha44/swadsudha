import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import Hero from './components/Hero';
import HeroRightSection, { kitchenPatternURL } from './components/HeroRightSection';
import SpecialMenu from './components/SpecialMenu';
import TodaysMenu from './components/TodaysMenu';
import QualityServices from './components/QualityServices'; 
import FromOurMenu from './components/FromOurMenu';
import Reservation from './components/Reservation';
import CustomersComment from './components/CustomersComment';
import Footer from './components/Footer';
import SubscriptionPlans from './components/SubscriptionPlans'; 
import WeeklyMenu from './components/WeeklyMenu';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

// ==========================================
// INNER PAGE HEADER (About, Menu, Contact ke liye)
// ==========================================
const InnerPageHeader = ({ title }) => (
  <div className="w-full max-w-[1440px] mx-auto relative flex flex-col bg-gradient-to-b from-[#0f2405] via-[#244710] to-[#467b2d] pb-6 shadow-xl lg:rounded-b-[2rem] rounded-b-3xl mb-10 overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}></div>
    <div className="relative z-10">
      <NavBar />
      {title && (
        <h1 className="text-white text-center text-4xl md:text-5xl font-heading mt-6 mb-2 drop-shadow-lg tracking-wide">
          {title}
        </h1>
      )}
    </div>
  </div>
);

// ==========================================
// INDIVIDUAL PAGES
// ==========================================
const HomePage = () => (
  <>
    <div className="w-full max-w-[1440px] mx-auto relative flex flex-col flex-grow">
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] bg-[#467b2d] z-0">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}></div>
      </div>
      <NavBar />
      <div className="flex flex-col-reverse lg:flex-row w-full relative z-10 items-stretch flex-grow mt-2 lg:mt-6">
        <Hero />
        <HeroRightSection />
      </div>
    </div>
    <SpecialMenu />
    <TodaysMenu />
    <QualityServices />
    <FromOurMenu />
    <Reservation />
    <CustomersComment />
  </>
);

const AboutPage = () => (

<div className="relative w-full flex flex-col min-h-screen">
    {/* Dark Green -> Mid Green -> Fades into Cream */}
    
    

<div className="absolute top-0 left-0 w-full h-[480px] md:h-[550px] bg-[url('./green-gold-bg.jpg')] bg-cover bg-center bg-no-repeat z-0 pointer-events-none">
 
  {/* Optional: Text ko clear dikhane ke liye ek bohot halka white overlay */}
  <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}></div>
    </div>

    {/* Navbar on top */}
    <div className="w-full max-w-[1440px] mx-auto relative z-10 flex flex-col">
      <NavBar />
    </div>

    {/* Content sitting ON TOP of the background */}
    <div className="relative z-10 w-full flex-grow">
    <AboutUs />
    </div>
   
  <QualityServices />
    <CustomersComment />
  </div>
   
);

const MenuPage = () => (
 <div className="relative w-full flex flex-col min-h-screen">
    {/* Dark Green -> Mid Green -> Fades into Cream */}
    <div className="absolute top-0 left-0 w-full h-[480px] md:h-[550px] bg-gradient-to-b from-[#0a1703] via-[#467b2d] via-60% to-[#f8fbef] z-0 pointer-events-none">
       {/* Halka sa background texture */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}></div>
    </div>

    {/* Navbar on top */}
    <div className="w-full max-w-[1440px] mx-auto relative z-10 flex flex-col">
      <NavBar />
    </div>

    {/* Content sitting ON TOP of the background */}
    <div className="relative z-10 w-full flex-grow">
     <WeeklyMenu />
    </div>
   
    { <SpecialMenu /> }
      { <TodaysMenu /> }
  </div>

);

const ContactPage = () => (
  <div className="relative w-full flex flex-col min-h-screen">
    {/* Dark Green -> Mid Green -> Fades into Cream */}
    <div className="absolute top-0 left-0 w-full h-[480px] md:h-[550px] bg-gradient-to-b from-[#0a1703] via-[#467b2d] via-60% to-[#f8fbef] z-0 pointer-events-none">
       {/* Halka sa background texture */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}></div>
    </div>

    {/* Navbar on top */}
    <div className="w-full max-w-[1440px] mx-auto relative z-10 flex flex-col">
      <NavBar />
    </div>

    {/* Content sitting ON TOP of the background */}
    <div className="relative z-10 w-full flex-grow">
   <ContactUs />
    </div>
   
  
    <CustomersComment />
  </div>
);

// ==========================================
// 🔴 MAGIC SUBSCRIPTION PAGE (WITH YOUR subbg.jpg)
// ==========================================
const SubscriptionPage = () => (
  <div className="relative w-full flex flex-col min-h-screen">
    {/* Dark Green -> Mid Green -> Fades into Cream */}
    <div className="absolute top-0 left-0 w-full h-[480px] md:h-[550px] bg-gradient-to-b from-[#0a1703] via-[#467b2d] via-60% to-[#f8fbef] z-0 pointer-events-none">
       {/* Halka sa background texture */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}></div>
    </div>

    {/* Navbar on top */}
    <div className="w-full max-w-[1440px] mx-auto relative z-10 flex flex-col">
      <NavBar />
    </div>

    {/* Content sitting ON TOP of the background */}
    <div className="relative z-10 w-full flex-grow">
      <SubscriptionPlans />
    </div>
     { <TodaysMenu /> }
  </div>
);

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8fbef] font-sans text-gray-800 overflow-x-hidden selection:bg-[#6e9b34] selection:text-white flex flex-col relative z-0">
        
        {/* 🔴 Global Styles (Saare animations wapas aa gaye!) */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@600;700;800&family=Lobster&family=Poppins:wght@400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Yatra+One&display=swap');
          
          .font-heading { font-family: 'Lobster', cursive; letter-spacing: 1px; }
          .font-body { font-family: 'Poppins', sans-serif; }
          .font-hindi { font-family: 'Yatra One', cursive; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
          
          /* Smoke Animation */
          @keyframes smoke-text-magic {
            0% { transform: translate(-50%, 10px) scale(0.6); color: transparent; text-shadow: 0 0 20px rgba(255,255,255,0.9); opacity: 0; filter: blur(8px); }
            20% { transform: translate(-50%, -20px) scale(1); color: #fff; text-shadow: 0px 4px 10px rgba(0,0,0,0.6), 0 0 8px rgba(255,255,255,0.8); opacity: 1; filter: blur(0px); }
            60% { transform: translate(-50%, -50px) scale(1.1); color: rgba(255,255,255,0.9); opacity: 0.9; filter: blur(0px); }
            100% { transform: translate(-50%, -80px) scale(1.2); color: transparent; text-shadow: 0 0 30px rgba(255,255,255,0); opacity: 0; filter: blur(10px); }
          }
          .steam-text-badge { position: absolute; left: 50%; white-space: nowrap; pointer-events: none; z-index: 60; animation: smoke-text-magic 4s ease-in-out infinite; text-align: center; line-height: 1.1; }
          
          /* Magic Dust Animation */
          @keyframes magic-dust { 
            0% { transform: translateY(0) scale(0.5); opacity: 1; } 
            100% { transform: translateY(120px) scale(1.5); opacity: 0; } 
          }
          .dust-particle { position: absolute; background: #fcd34d; border-radius: 50%; box-shadow: 0 0 8px 2px rgba(252, 211, 77, 0.8); animation: magic-dust 2.5s linear infinite; }
          
          /* Scrollbar Hide */
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}