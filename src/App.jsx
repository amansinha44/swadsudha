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

// ==========================================
// INDIVIDUAL PAGES
// ==========================================

const HomePage = () => (
  <>
    {/* 🔴 SEO META TAGS FOR HOME */}
    <title>Swad Sudha | Best Pure Veg Tiffin & Home Style Food in Lucknow</title>
    <meta name="description" content="Order fresh, hygienic, and pure veg home-style meals from Swad Sudha in Gomti Nagar, Lucknow. Delicious daily menu starting at just ₹50." />
    
    <div className="w-full max-w-[1440px] mx-auto relative flex flex-col flex-grow">
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] bg-[#467b2d] z-0">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}
        ></div>
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
    <Reservation />
    <FromOurMenu />    
    <CustomersComment />
  </>
);

const AboutPage = () => (
  <div className="relative w-full flex flex-col min-h-screen">
    {/* 🔴 SEO META TAGS FOR ABOUT US */}
    <title>About Us | Swad Sudha - Our Journey & Values</title>
    <meta name="description" content="Learn about Swad Sudha's mission to provide the best home-cooked, pure vegetarian food in Lucknow. Discover our hygiene standards and quality ingredients." />

    {/* Dark Green -> Mid Green -> Fades into Cream */}
    <div className="absolute top-0 left-0 w-full h-[480px] md:h-[550px] z-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/greenpattern.jpg')] bg-repeat-x bg-top"
        style={{ backgroundSize: '35% auto' }} 
      />

      {/* 🔴 Dark Green Overlay */}
      <div className="absolute inset-0 bg-[#0f2405]/70 mix-blend-multiply"></div>

      {/* Kitchen Pattern Texture */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url("${kitchenPatternURL}")`, 
          backgroundSize: '150px'
        }}
      ></div>

      {/* 🟢 FIXED: Bottom Smooth Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#f8fbef] to-[#f8fbef]/0"></div>
    </div>

    {/* Navbar on top */}
    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col pt-1">
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

// 🔴 MENU PAGE: Yahan cart aur setCart props receive kiye hain
const MenuPage = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    {/* 🔴 SEO META TAGS FOR MENU */}
    <title>Weekly Menu | Order Breakfast, Lunch & Dinner - Swad Sudha</title>
    <meta name="description" content="Explore Swad Sudha's 7-day weekly menu. Grab our ₹50 Super Combo Lunch, special Desi Ghee meals, and healthy dinner options in Lucknow." />

    <div className="absolute top-0 left-0 w-full h-[480px] md:h-[550px] z-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/greenpattern.jpg')] bg-repeat-x bg-top"
        style={{ backgroundSize: '35% auto' }} // Ye width ko full rakhega aur height ko repeat karega
      />

      {/* 🔴 Dark Green Overlay: Pattern ko blend karne ke liye */}
      <div className="absolute inset-0 bg-[#0f2405]/70 mix-blend-multiply"></div>

      {/* Kitchen Pattern Texture */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url("${kitchenPatternURL}")`, 
          backgroundSize: '150px' 
        }}
      ></div>

      {/* Bottom Smooth Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f8fbef] via-transparent to-transparent"></div>
    </div>

    {/* Navbar on top */}
    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col">
      <NavBar />
    </div>

    {/* Content sitting ON TOP of the background */}
    <div className="relative z-10 w-full flex-grow">
      {/* 🔴 WeeklyMenu ko cart state pass ki hai taaki add to order kaam kare */}
      <WeeklyMenu cart={cart} setCart={setCart} />
    </div>
    
    <SpecialMenu />
    <TodaysMenu />
  </div>
);

const ContactPage = () => (
  <div className="relative w-full flex flex-col min-h-screen">
    {/* 🔴 SEO META TAGS FOR CONTACT */}
    <title>Contact Us | Reach Out to Swad Sudha Lucknow</title>
    <meta name="description" content="Have a question or want to place a bulk order? Contact Swad Sudha in Gomti Nagar, Lucknow. Call us at +91 7007-948-170 or send a message." />

    {/* Dark Green -> Mid Green -> Fades into Cream */}
    <div className="absolute top-0 left-0 w-full h-[480px] md:h-[550px] z-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/greenpattern.jpg')] bg-repeat-x bg-top"
        style={{ backgroundSize: '35% auto' }} 
      />

      {/* 🔴 Dark Green Overlay */}
      <div className="absolute inset-0 bg-[#0f2405]/70 mix-blend-multiply"></div>

      {/* Kitchen Pattern Texture */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url("${kitchenPatternURL}")`, 
          backgroundSize: '150px' 
        }}
      ></div>

      {/* Bottom Smooth Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f8fbef] via-transparent to-transparent"></div>
    </div>

    {/* Navbar on top */}
    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col">
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
// 🔴 MAGIC SUBSCRIPTION PAGE
// ==========================================
// 🟢 UPDATE 1: Yahan cart aur setCart props add kiye gaye hain
const SubscriptionPage = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    {/* 🔴 SEO META TAGS FOR SUBSCRIPTION */}
    <title>Monthly Meal Subscriptions | Best Tiffin Service - Swad Sudha</title>
    <meta name="description" content="Subscribe to Swad Sudha's monthly meal plans. Get hassle-free, pure veg, and hygienic home-style food delivered daily at the best prices in Lucknow." />

    <div className="absolute top-0 left-0 w-full h-[480px] md:h-[550px] z-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/greenpattern.jpg')] bg-repeat-x bg-top"
        style={{ backgroundSize: '35% auto' }} 
      />

      <div className="absolute inset-0 bg-[#0f2405]/70 mix-blend-multiply"></div>

      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url("${kitchenPatternURL}")`, 
          backgroundSize: '150px' 
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#f8fbef] via-transparent to-transparent"></div>
    </div>

    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col">
      <NavBar />
    </div>

    <div className="relative z-10 w-full flex-grow">
      {/* 🟢 UPDATE 2: Yahan SubscriptionPlans me cart data bheja gaya hai */}
      <SubscriptionPlans cart={cart} setCart={setCart} />
    </div>
    <TodaysMenu />
  </div>
);


// ==========================================
// 🔴 NEW CHECKOUT PAGE ROUTE
// ==========================================
const CheckoutPageRoute = ({ cart, setCart }) => (
  <div className="relative w-full flex flex-col min-h-screen">
    {/* 🔴 SEO META TAGS FOR CHECKOUT */}
    <title>Checkout | Complete Your Order - Swad Sudha</title>
    <meta name="robots" content="noindex, nofollow" />

    {/* Header Background */}
    <div className="absolute top-0 left-0 w-full h-[250px] z-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/greenpattern.jpg')] bg-repeat-x bg-top"
        style={{ backgroundSize: '35% auto' }} 
      />
      <div className="absolute inset-0 bg-[#0f2405]/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#f8fbef] via-transparent to-transparent"></div>
    </div>

    <div className="w-full max-w-[1440px] mx-auto relative z-50 flex flex-col">
      <NavBar />
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
  
  // 🔴 MAGIC: Ye state poore app me cart items ko hold karegi
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-[#f8fbef] font-sans text-gray-800 overflow-x-hidden selection:bg-[#6e9b34] selection:text-white flex flex-col relative z-0">
        
        {/* 🔴 Global Styles */}
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
          <Route path="/menu" element={<MenuPage cart={cart} setCart={setCart} />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 🟢 UPDATE 3: Route level par bhi cart data pass kiya gaya hai */}
          <Route path="/subscription" element={<SubscriptionPage cart={cart} setCart={setCart} />} />
          
          <Route path="/checkout" element={<CheckoutPageRoute cart={cart} setCart={setCart} />} />
        </Routes>

        <Footer />
        <ScrollToTop />
        <WhatsAppButton/>
      </div>
    </Router>
  );
}