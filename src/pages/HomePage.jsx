import React from 'react';
import NavBar from '../components/NavBar';
import QualityServices from '../components/QualityServices';
import Hero from '../components/Hero';
import HeroRightSection from '../components/HeroRightSection';
import CustomersComment from '../components/CustomersComment';
import SpecialMenu from '../components/SpecialMenu';
import TodaysMenu from '../components/TodaysMenu';
import FromOurMenu from '../components/FromOurMenu';
import Reservation from '../components/Reservation';
import { kitchenPatternURL } from '../components/assets';



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

export default HomePage;