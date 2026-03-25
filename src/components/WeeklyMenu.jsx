import React, { useState } from 'react';
import { Leaf, Droplets, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';

const WeeklyMenu = () => {
  const [activeDay, setActiveDay] = useState(0);

  const pricingPlans = [
    { name: 'Breakfast Special', price: '60', desc: 'Daily Special Item', includes: 'Freshly Prepared' },
    { name: 'Classic Tier (L/D)', price: '60', desc: 'Standard Meal', includes: '2 Roti / Paratha / Bhature' },
    { name: 'Value Tier (L/D)', price: '80', desc: 'Balanced Meal', includes: '3 Roti / Paratha / Bhature', highlight: true },
    { name: 'Premium Tier (L/D)', price: '100', desc: 'Heavy Feast', includes: '4 Roti / Paratha / Bhature' },
  ];

  const menuData = [
    {
      day: 'Monday', theme: 'The Energizer',
      breakfast: 'Indori Poha (Light & Fresh)',
      lunch: 'Mushroom Matar + Steamed Rice + Roti + Salad + Achaar',
      dinner: 'One Dry Veg + One Gravy Veg + Paratha + Salad + Achaar'
    },
    {
      day: 'Tuesday', theme: 'Hearty Comfort',
      breakfast: 'Veg Aloo Fry Bread Sandwich (4 Pcs) with Tomato Sauce',
      lunch: 'Arhar Dal Fry + Dry Sabzi + Steamed Rice + Roti + Salad + Achaar',
      dinner: 'Lauki Kofta + Steamed Rice + Roti + Salad + Achaar'
    },
    {
      day: 'Wednesday', theme: 'Mid-Week Zest',
      breakfast: '2 Full-size Suji/Besan Chilla with Chatni & Sauce',
      lunch: 'Special Rajma + Steamed Rice + Roti + Salad + Achaar',
      dinner: 'Dum Aloo + Steamed Rice + Roti + Salad + Achaar'
    },
    {
      day: 'Thursday', theme: 'Traditional Tastes',
      breakfast: '2 Full-size Aloo Paratha + Boondi Raita + Achaar',
      lunch: 'Kadhi Tadka + Dry Veg + Steamed Rice + Roti + Salad + Achaar',
      dinner: 'Chana Dal Tadka + Steamed Rice + Roti + Salad + Achaar'
    },
    {
      day: 'Friday', theme: 'The Feast',
      breakfast: 'Bread Pakora (4 Pcs) with Dhaniya-Tamatar Chatni',
      lunch: 'Chole Bhature + Shahi Pulao + Salad + Achaar',
      dinner: 'Mix Paratha (Aloo/Gobhi/Pyaj) + Boondi Raita + Chatni + Achaar'
    },
    {
      day: 'Saturday', theme: 'Weekend Vibes',
      breakfast: 'Puri + Special Sabzi + Raita + Achaar',
      lunch: 'Dal Makhni + Dry Veg + Steamed Rice + Roti + Salad + Achaar',
      dinner: 'Soyabean Gravy Veg + Steamed Rice + Roti + Salad + Achaar'
    },
    {
      day: 'Sunday', theme: 'The Royal Celebration',
      breakfast: '2 Full-size Paneer Paratha + Fresh Dahi + Chatni + Achaar',
      lunch: 'Khoya/Matar Paneer + Veg Pulao + Roti + Salad + Achaar + Sweet Dish',
      dinner: 'Aloo Matar / Dal Kachauri + Gravy Veg + Dahi Wada + Achaar + Salad'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 font-body w-full max-w-[1100px] mx-auto relative z-10">
      
      {/* --- Paper Card Container with Background Image --- */}
      {/* 🟢 CHANGE: relative, overflow-hidden aur style me backgroundImage add kiya */}
      <div 
        className="relative rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/menubk.jpg')" }}
      >
        
        {/* 🟢 CHANGE: White overlay taaki text clearly visible rahe (90% opacity white) */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-[2px] z-0"></div>

        {/* 🟢 CHANGE: Original content ko is relative z-10 wrapper me daal diya taaki wo image ke upar rahe */}
        <div className="relative z-10 p-6 md:p-12 lg:p-16">
          
          {/* --- Top Header & USPs --- */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading text-green-800 mb-6 drop-shadow-sm">Our Menu</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              <span className="flex items-center gap-1.5 text-sm font-semibold text-[#7CB342] bg-[#7CB342]/10 px-4 py-1.5 rounded-xl bg-white/50 backdrop-blur-sm border border-[#7CB342]/20">
                <Leaf size={16} /> Pure Veg
              </span>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-yellow-600 bg-yellow-50 px-4 py-1.5 rounded-xl bg-white/50 backdrop-blur-sm border border-yellow-200">
                <Droplets size={16} /> Desi Ghee
              </span>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-xl bg-white/50 backdrop-blur-sm border border-blue-200">
                <ShieldCheck size={16} /> Hi-Tech Hygiene
              </span>
            </div>
          </div>

          {/* --- PRICING SECTION (Classic Dotted Layout) --- */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading text-[#7CB342] mb-8 border-b border-gray-200/80 pb-2">Pricing Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className="relative group">
                  <div className="flex items-baseline w-full">
                    <h4 className={`text-lg font-bold transition-colors ${plan.highlight ? 'text-[#7CB342]' : 'text-gray-800 group-hover:text-[#7CB342]'}`}>
                      {plan.name}
                    </h4>
                    {/* The magical dotted line */}
                    <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-3 relative top-[-6px] opacity-70"></div>
                    <span className={`text-xl font-bold ${plan.highlight ? 'text-[#7CB342]' : 'text-gray-900'}`}>
                      ₹{plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                    {plan.desc} • <span className="text-gray-700 font-medium">{plan.includes}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- WEEKLY MENU SECTION (Classic Dotted Layout) --- */}
          <div className="mb-12">
            
            {/* Day Selector (Pills style) */}
            <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-3 mb-10 pb-4 border-b border-gray-200/80">
              {menuData.map((data, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border ${activeDay === index ? 'bg-[#7CB342] text-white border-[#7CB342] shadow-md scale-105' : 'bg-white/60 text-gray-600 hover:text-gray-900 border-gray-200 hover:border-gray-300 backdrop-blur-sm'}`}
                >
                  {data.day}
                </button>
              ))}
            </div>

            {/* Selected Day Content */}
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-extrabold text-gray-900">{menuData[activeDay].day}</h3>
                <p className="text-[#7CB342] font-heading text-xl mt-1 tracking-wider">{menuData[activeDay].theme}</p>
              </div>

              {/* Menu Items for the Day */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                
                {/* Breakfast Item */}
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="flex items-baseline w-full mb-3">
                    <h4 className="text-2xl font-heading text-[#7CB342]">Breakfast</h4>
                    <div className="flex-grow border-b-2 border-dotted border-[#7CB342]/40 mx-4 relative top-[-6px]"></div>
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed pr-4">
                    {menuData[activeDay].breakfast}
                  </p>
                </div>

                {/* Lunch Item */}
                <div>
                  <div className="flex items-baseline w-full mb-3">
                    <h4 className="text-2xl font-heading text-[#7CB342]">Lunch</h4>
                    <div className="flex-grow border-b-2 border-dotted border-[#7CB342]/40 mx-4 relative top-[-6px]"></div>
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed pr-4">
                    {menuData[activeDay].lunch}
                  </p>
                </div>

                {/* Dinner Item */}
                <div className="md:col-span-2">
                  <div className="flex items-baseline w-full mb-3">
                    <h4 className="text-2xl font-heading text-[#7CB342]">Dinner</h4>
                    <div className="flex-grow border-b-2 border-dotted border-[#7CB342]/40 mx-4 relative top-[-6px]"></div>
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed pr-4 md:w-3/4">
                    {menuData[activeDay].dinner}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Floating Bottom CTA --- */}
      <div className="mt-8 bg-gradient-to-r from-green-800 to-[#7CB342] rounded-xl p-5 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-2xl relative overflow-hidden border border-[#7CB342]/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-green-200 font-semibold text-sm tracking-wide">
            <MapPin size={16} /> Gomti Nagar, Lucknow
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-1 font-heading tracking-wide">Special Monthly Subscriptions!</h3>
          <p className="text-green-50 text-sm">Aaj hi apna order book karein with Yummy Offers.</p>
        </div>
        
        <div className="relative z-10 shrink-0 w-full md:w-auto mt-2 md:mt-0">
          <a href="tel:+917007948170" className="flex items-center justify-center gap-2 bg-white text-[#7CB342] px-8 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-md active:scale-95">
            <PhoneCall size={18} /> Call Now
          </a>
        </div>
      </div>

    </section>
  );
};

export default WeeklyMenu;