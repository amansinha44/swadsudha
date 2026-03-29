import React, { useState } from 'react';
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
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import CheckoutPage from './components/CheckoutPage'; 
import AtAGlance from './components/AtAGlance'; 
import OrderSteps from './components/OrderSteps'; 
import WhyTrustUs from './components/WhyTrustUs'; 
import FAQ from './components/FAQ'; 
import PrivacyPolicy from './components/PrivacyPolicy';

// ==========================================
// 🔴 NEW MAGIC: Universal Header Background
// Ye har page par ek jaisa aur ekdum smooth fade dega!
// ==========================================
const PageHeaderBackground = ({ heightClass = "h-[450px] md:h-[550px]" }) => (
  <div className={`absolute top-0 left-0 w-full ${heightClass} z-0 pointer-events-none select-none`}>
    {/* Green Leaf Pattern */}
    <div 
      className="absolute inset-0 bg-[url('/greenpattern.jpg')] bg-repeat-x bg-top"
      style={{ backgroundSize: '35% auto' }} 
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-[#0f2405]/70 mix-blend-multiply"></div>
    {/* Kitchen Pattern Overlay */}
    <div 
      className="absolute inset-0 opacity-10" 
      style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}
    ></div>
    
    {/* 🔴 THE FIX: bottom-[-2px] ensures NO SHARP LINES ever! Smoothest fade possible */}
    <div className="absolute bottom-[-2px] left-0 w-full h-32 md:h-56 bg-gradient-to-t from-[#f8fbef] via-[#f8fbef]/90 to-transparent"></div>
  </div>
);

// ==========================================
// INDIVIDUAL PAGES
// ==========================================

const HomePage = ({ cart, setCart }) => (
  <>
    <title>Swad Sudha | Best Pure Veg Tiffin & Home Style Food in Lucknow</title>
    <meta name="description" content="Order fresh, hygienic, and pure veg home-style meals from Swad Sudha in Gomti Nagar, Lucknow. Delicious daily menu starting at just ₹50." />
    
    <div className="w-full max-w-[1440px] mx-auto relative flex flex-col flex-grow">
      {/* Home Page uses a special split background, so it doesn't use PageHeaderBackground */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] bg-[#467b2d] z-0">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}
        ></div>
      </div>
      <NavBar cart={cart} setCart={setCart} />
      <div className="flex flex-col-reverse lg:flex-row w-full relative z-10 items-stretch flex-grow mt-2 lg:mt-6">
        <Hero />
        <HeroRightSection />
      </div>
    </div>
    <SpecialMenu />
    <TodaysMenu />    
    <QualityServices />
    <Reservation />
    <FromOurMenu />    
    <CustomersComment />
    <AtAGlance />
  </>
);

const AboutPage = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    <title>About Us | Swad Sudha - Our Journey & Values</title>
    <meta name="description" content="Learn about Swad Sudha's mission to provide the best home-cooked, pure vegetarian food in Lucknow. Discover our hygiene standards and quality ingredients." />

    {/* 🔴 Used the new smooth background */}
    <PageHeaderBackground />

    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col pt-1">
      <NavBar cart={cart} setCart={setCart} />
    </div>

    <div className="relative z-10 w-full flex-grow">
      <AboutUs />
    </div>
    <OrderSteps />
    <QualityServices />
    <WhyTrustUs />
    <CustomersComment />
    <AtAGlance />
  </div>
);

const MenuPage = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    <title>Weekly Menu | Order Breakfast, Lunch & Dinner - Swad Sudha</title>
    <meta name="description" content="Explore Swad Sudha's 7-day weekly menu. Grab our ₹50 Super Combo Lunch, special Desi Ghee meals, and healthy dinner options in Lucknow." />

    {/* 🔴 Used the new smooth background */}
    <PageHeaderBackground />

    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col">
      <NavBar cart={cart} setCart={setCart} />
    </div>

    <div className="relative z-10 w-full flex-grow">
      <WeeklyMenu cart={cart} setCart={setCart} />
    </div>
    <OrderSteps />
    <WhyTrustUs />
    <SpecialMenu />
    <TodaysMenu />
    <AtAGlance />
  </div>
);

const ContactPage = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    <title>Contact Us | Reach Out to Swad Sudha Lucknow</title>
    <meta name="description" content="Have a question or want to place a bulk order? Contact Swad Sudha in Gomti Nagar, Lucknow. Call us at +91 7007-948-170 or send a message." />

    {/* 🔴 Used the new smooth background */}
    <PageHeaderBackground />

    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col">
     <NavBar cart={cart} setCart={setCart} />
    </div>

    <div className="relative z-10 w-full flex-grow">
      <ContactUs />
    </div>
    <WhyTrustUs />
    <CustomersComment />
    <AtAGlance />
  </div>
);

const SubscriptionPage = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    <title>Monthly Meal Subscriptions | Best Tiffin Service - Swad Sudha</title>
    <meta name="description" content="Subscribe to Swad Sudha's monthly meal plans. Get hassle-free, pure veg, and hygienic home-style food delivered daily at the best prices in Lucknow." />

    {/* 🔴 Used the new smooth background */}
    <PageHeaderBackground />

    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col">
     <NavBar cart={cart} setCart={setCart} />
    </div>

    <div className="relative z-10 w-full flex-grow">
      <SubscriptionPlans cart={cart} setCart={setCart} />
    </div>
    <OrderSteps />
    <TodaysMenu />
    <WhyTrustUs /> 
    <AtAGlance />
  </div>
);

const FAQPage = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    <title>FAQ | Frequently Asked Questions - Swad Sudha</title>
    <meta name="description" content="Got questions about our tiffin service in Gomti Nagar, Lucknow? Find answers about pricing, delivery, hygiene, and vegetarian meals at Swad Sudha." />

    {/* 🔴 Used the new smooth background */}
    <PageHeaderBackground />

    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col pt-1">
      <NavBar cart={cart} setCart={setCart} />
    </div>

    <div className="relative z-10 w-full flex-grow mt-4 md:mt-10">
      <FAQ />
    </div>
    
    <WhyTrustUs />
    <AtAGlance />
  </div>
);

const PrivacyPolicyPage = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    <title>Privacy Policy | Swad Sudha Tiffin Service</title>
    <meta name="description" content="Read Swad Sudha's Privacy Policy to know how we protect your personal information, address, and data in Lucknow." />

    {/* Using your smooth universal background */}
    <PageHeaderBackground />

    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col pt-1">
      <NavBar cart={cart} setCart={setCart} />
    </div>

    <div className="relative z-10 w-full flex-grow mt-4 md:mt-10">
      <PrivacyPolicy />
    </div>
    
    
  </div>
);

const CheckoutPageRoute = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    <title>Checkout | Complete Your Order - Swad Sudha</title>
    <meta name="robots" content="noindex, nofollow" />

    {/* 🔴 Checkout page needs a shorter background, so passed a custom height! */}
    <PageHeaderBackground heightClass="h-[250px]" />

    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col">
      <NavBar cart={cart} setCart={setCart} />
    </div>

    <div className="relative z-10 w-full flex-grow mt-10">
      <CheckoutPage cart={cart} setCart={setCart} />
    </div>
  </div>
);

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  
  const [cart, setCart] = useState([]);

  return (
    <Router>
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
          
          @keyframes magic-dust { 
            0% { transform: translateY(0) scale(0.5); opacity: 1; } 
            100% { transform: translateY(120px) scale(1.5); opacity: 0; } 
          }
          .dust-particle { position: absolute; background: #fcd34d; border-radius: 50%; box-shadow: 0 0 8px 2px rgba(252, 211, 77, 0.8); animation: magic-dust 2.5s linear infinite; }
          
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <Routes>
          <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<AboutPage cart={cart} setCart={setCart} />} />
          <Route path="/menu" element={<MenuPage cart={cart} setCart={setCart} />} />
          <Route path="/contact" element={<ContactPage cart={cart} setCart={setCart} />} />
          <Route path="/subscription" element={<SubscriptionPage cart={cart} setCart={setCart} />} />
          <Route path="/faq" element={<FAQPage cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<CheckoutPageRoute cart={cart} setCart={setCart} />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage cart={cart} setCart={setCart} />} />
        </Routes>

        <Footer />
        <ScrollToTop />
        <WhatsAppButton/>
      </div>
    </Router>
  );
}