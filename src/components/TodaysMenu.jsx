import React, { useState, useEffect } from 'react';
import { Sunrise, Sun, Moon, CalendarDays } from 'lucide-react';

const TodaysMenu = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  // Master Data: Wahi pura original descriptions
  const weeklyMenu = {
    Monday: {
      theme: 'The Energizer',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={12}/>, desc: 'Indori Poha (Light & Fresh)', img: '/mon_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={12}/>, desc: 'Mushroom Matar + Steamed Rice + Roti + Salad + Achaar', img: '/mon_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={12}/>, desc: 'One Dry Veg + One Gravy Veg + Paratha + Salad + Achaar', img: '/mon_dinner.png' }
      ]
    },
    Tuesday: {
      theme: 'Hearty Comfort',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={12}/>, desc: 'Veg Aloo Fry Bread Sandwich (4 Pcs) with Tomato Sauce', img: '/tue_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={12}/>, desc: 'Arhar Dal Fry + Dry Sabzi + Steamed Rice + Roti + Salad + Achaar', img: '/tue_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={12}/>, desc: 'Lauki Kofta + Steamed Rice + Roti + Salad + Achaar', img: '/tue_dinner.png' }
      ]
    },
    Wednesday: {
      theme: 'Mid-Week Zest',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={12}/>, desc: '2 Full-size Suji/Besan Chilla with Chatni & Sauce', img: '/wed_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={12}/>, desc: 'Special Rajma + Steamed Rice + Roti + Salad + Achaar', img: '/wed_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={12}/>, desc: 'Dum Aloo + Steamed Rice + Roti + Salad + Achaar', img: '/wed_dinner.png' }
      ]
    },
    Thursday: {
      theme: 'Traditional Tastes',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={12}/>, desc: '2 Full-size Aloo Paratha + Boondi Raita + Achaar', img: '/thu_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={12}/>, desc: 'Kadhi Tadka + Dry Veg + Steamed Rice + Roti + Salad + Achaar', img: '/thu_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={12}/>, desc: 'Chana Dal Tadka + Steamed Rice + Roti + Salad + Achaar', img: '/thu_dinner.png' }
      ]
    },
    Friday: {
      theme: 'The Feast',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={12}/>, desc: 'Bread Pakora (4 Pcs) with Dhaniya-Tamatar Chatni', img: '/fri_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={12}/>, desc: 'Chole Bhature + Shahi Pulao + Salad + Achaar', img: '/fri_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={12}/>, desc: 'Mix Paratha (Aloo/Gobhi/Pyaj) + Boondi Raita + Chatni + Achaar', img: '/fri_dinner.png' }
      ]
    },
    Saturday: {
      theme: 'Weekend Vibes',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={12}/>, desc: 'Puri + Special Sabzi + Raita + Achaar', img: '/sat_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={12}/>, desc: 'Dal Makhni + Dry Veg + Steamed Rice + Roti + Salad + Achaar', img: '/sat_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={12}/>, desc: 'Soyabean Gravy Veg + Steamed Rice + Roti + Salad + Achaar', img: '/sat_dinner.png' }
      ]
    },
    Sunday: {
      theme: 'The Royal Celebration',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={12}/>, desc: '2 Full-size Paneer Paratha + Fresh Dahi + Chatni + Achaar', img: '/sun_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={12}/>, desc: 'Khoya/Matar Paneer + Veg Pulao + Roti + Salad + Achaar + Sweet Dish', img: '/sun_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={12}/>, desc: 'Aloo Matar / Dal Kachauri + Gravy Veg + Dahi Wada + Achaar + Salad', img: '/sun_dinner.png' }
      ]
    }
  };

  const daysOfWeek = Object.keys(weeklyMenu);

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    setActiveDay(days[today.getDay()]);
  }, []);

  return (
    <section className="relative py-16 px-2 md:px-4 w-full bg-white font-body overflow-hidden">
      <div className="w-full max-w-[1150px] mx-auto">
        
        {/* Responsive Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-[3.5rem] font-heading text-gray-900 leading-tight">
            Our <span className="text-[#7CB342]">Weekly Menu</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          
          {/* Days List: Mobile par horizontal, Desktop par vertical */}
          <div className="w-full md:w-1/4 lg:w-[20%] shrink-0">
            <div className="flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 no-scrollbar">
              {daysOfWeek.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`shrink-0 flex items-center justify-between px-3 py-2.5 rounded-sm font-bold transition-all border text-[13px] md:text-base ${
                    activeDay === day 
                      ? 'bg-[#7CB342] text-white border-[#7CB342] shadow-sm' 
                      : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'
                  }`}
                >
                  <span>{day}</span>
                  <CalendarDays size={14} className={`hidden md:block ${activeDay === day ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE Content Area */}
          <div className="w-full md:w-3/4 lg:w-[80%] flex flex-col">
            
            <div className="mb-4 p-3 border-l-4 border-[#7CB342] bg-gray-50 flex items-center justify-between">
              <h3 className="text-[15px] md:text-2xl font-extrabold text-gray-800">
                {activeDay} <span className="text-[#7CB342] ml-2 font-heading font-normal">{weeklyMenu[activeDay].theme}</span>
              </h3>
            </div>

            {/* 🔴 FIXED: 3 Columns on ALL screens, No cropping */}
            <div className="grid grid-cols-3 gap-1.5 md:gap-5">
              {weeklyMenu[activeDay].meals.map((meal) => (
                <div 
                  key={meal.id} 
                  className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full group"
                >
                  {/* Aspect ratio set to 4/3 to match your 380x320 images perfectly */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 shrink-0">
                    <img 
                      src={meal.img} 
                      alt={meal.type} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Tiny Badge for Mobile */}
                    <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 text-white font-bold text-[8px] md:text-xs">
                      {meal.icon} <span className="uppercase tracking-tighter md:tracking-normal">{meal.type}</span>
                    </div>
                  </div>

                  {/* Descriptions: line-clamp ensures cards stay same height */}
                  <div className="p-1.5 md:p-4 flex-grow bg-white">
                    <p className="text-gray-700 text-[10px] md:text-[14px] font-semibold leading-tight md:leading-snug line-clamp-3 md:line-clamp-none">
                      {meal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default TodaysMenu;