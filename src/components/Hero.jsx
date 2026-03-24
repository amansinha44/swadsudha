import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 🔴 NAYA CHANGE: Link import kiya
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    id: 1,
    title: 'Ghar Ka Swad',
    desc: 'Authentic routine thali with pure Desi Ghee.',
    img: '/bowl_5.png',
  },
  {
    id: 2,
    title: 'Fit-Life Diet',
    desc: 'Zero-oil, high protein macro counted meals.',
    img: '/bowl_6.png',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // WhatsApp configuration
  const phoneNumber = "917007948170";
  const message = "Hello Swad Sudha! I want to reach out to you.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const nextItemIndex = (currentIndex + 1) % carouselItems.length;

  return (
    <div className="w-full lg:w-[50%] px-4 sm:px-6 lg:pl-8 lg:pr-10 flex flex-col justify-center py-6 relative z-10">
      <p className="text-[#c9742b] font-bold tracking-wide text-[14px] mb-3">Food that your mind needs</p>
      <h1 className="font-heading text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.05] text-[#1a1a1a] mb-5 drop-shadow-sm">
        Choosing The <br />Best <span className="text-[#568a35] italic drop-shadow-none">Quality Food</span>
      </h1>
      <p className="text-[#4b5563] text-[15px] md:text-[16px] leading-relaxed max-w-[480px] mb-8 font-medium">
        We bring you fresh, daily-changing menus cooked exactly how it’s done at home using pure ghee and fresh seasonal vegetables.
      </p>
      
      <div className="flex flex-wrap items-center gap-3 mb-10 relative z-20">
        
        {/* Reach Us - WhatsApp Link */}
        <a 
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#568a35] text-white px-7 py-3 rounded-lg font-bold text-[15px] hover:bg-[#4a7a2b] shadow-lg transition-all inline-block text-center"
        >
          Reach Us
        </a>

        {/* 🔴 NAYA CHANGE: View More ko Link se replace kiya */}
        <Link 
          to="/menu" 
          className="bg-transparent border-2 border-[#568a35] text-[#568a35] px-7 py-3 rounded-lg font-bold text-[15px] hover:bg-[#eef5e5] transition-colors inline-block text-center"
        >
          View More
        </Link>
      </div>

      {/* ----- WIDER CAROUSEL CARD DESIGN ----- */}
      <div className="flex items-center gap-2 lg:gap-4 mt-4 w-full">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="lg:hidden h-16 w-8 bg-[#e5e7eb] hover:bg-[#d1d5db] transition-colors flex items-center justify-center rounded-md shrink-0"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>

        {/* Carousel Item 1 (Currently active item) */}
        <div className="flex items-center gap-3 bg-white rounded-xl p-2.5 shadow-md border border-gray-100 flex-1 min-w-[180px] transition-all duration-300">
          <div className="w-[65px] h-[65px] rounded-sm overflow-hidden shrink-0 border border-gray-100">
            <img src={carouselItems[currentIndex].img} alt={carouselItems[currentIndex].title} className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col justify-center pr-2">
            <h4 className="text-[15px] font-bold text-[#2b2b2b] mb-1">{carouselItems[currentIndex].title}</h4>
            <p className="text-[10px] text-gray-500 leading-snug">{carouselItems[currentIndex].desc}</p>
          </div>
        </div>

        {/* Carousel Item 2 (Next item, visible on sm+ screens) */}
        <div className="hidden sm:flex items-center gap-3 bg-white rounded-xl p-2.5 shadow-md border border-gray-100 flex-1 min-w-[180px] transition-all duration-300">
          <div className="w-[65px] h-[65px] rounded-sm overflow-hidden shrink-0 border border-gray-100">
            <img src={carouselItems[nextItemIndex].img} alt={carouselItems[nextItemIndex].title} className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col justify-center pr-2">
            <h4 className="text-[15px] font-bold text-[#2b2b2b] mb-1">{carouselItems[nextItemIndex].title}</h4>
            <p className="text-[10px] text-gray-500 leading-snug">{carouselItems[nextItemIndex].desc}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="lg:hidden h-16 w-8 bg-[#e5e7eb] hover:bg-[#d1d5db] transition-colors flex items-center justify-center rounded-md shrink-0"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

    </div>
  );
};

export default Hero;