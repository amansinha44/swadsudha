import React from 'react';
import NavBar from '../components/NavBar';
import AboutUs from '../components/AboutUs';
import QualityServices from '../components/QualityServices';
import CustomersComment from '../components/CustomersComment';
import { kitchenPatternURL } from '../components/assets';


const AboutPage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white">
      <div className="absolute inset-x-0 top-0 h-[480px] md:h-[550px] z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('./green-gold-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#0f2405]/75" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url("${kitchenPatternURL}")`, backgroundSize: '150px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <NavBar />
        </div>
        <main className="flex-grow w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pt-10">
          <AboutUs />
        </main>
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 space-y-20 pb-20">
          <QualityServices />
          <CustomersComment />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;