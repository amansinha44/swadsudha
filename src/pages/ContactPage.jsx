import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar'; 
import CustomersComment from '../components/CustomersComment';
import ContactUs from '../components/ContactUs';
import { kitchenPatternURL } from '../components/assets';

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


export default ContactPage;