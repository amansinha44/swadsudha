import React, { useState, useEffect } from 'react';
import { Sunrise, Sun, Moon, Sparkles } from 'lucide-react';

const TodaysMenu = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  const weeklyMenu = {
    Monday: {
      theme: 'The Energizer',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={16}/>, desc: 'Indori Poha (Light & Fresh)', img: '/mon_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={16}/>, desc: 'Mushroom Matar + Steamed Rice + Roti + Salad + Achaar', img: '/mon_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={16}/>, desc: 'One Dry Veg + One Gravy Veg + Paratha + Salad + Achaar', img: '/mon_dinner.png' }
      ]
    },
    Tuesday: {
      theme: 'Hearty Comfort',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={16}/>, desc: 'Veg Aloo Fry Bread Sandwich (4 Pcs) with Tomato Sauce', img: '/tue_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={16}/>, desc: 'Arhar Dal Fry + Dry Sabzi + Steamed Rice + Roti + Salad + Achaar', img: '/tue_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={16}/>, desc: 'Lauki Kofta + Steamed Rice + Roti + Salad + Achaar', img: '/tue_dinner.png' }
      ]
    },
    Wednesday: {
      theme: 'Mid-Week Zest',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={16}/>, desc: '2 Full-size Suji/Besan Chilla with Chatni & Sauce', img: '/wed_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={16}/>, desc: 'Special Rajma + Steamed Rice + Roti + Salad + Achaar', img: '/wed_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={16}/>, desc: 'Dum Aloo + Steamed Rice + Roti + Salad + Achaar', img: '/wed_dinner.png' }
      ]
    },
    Thursday: {
      theme: 'Traditional Tastes',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={16}/>, desc: '2 Full-size Aloo Paratha + Boondi Raita + Achaar', img: '/thu_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={16}/>, desc: 'Kadhi Tadka + Dry Veg + Steamed Rice + Roti + Salad + Achaar', img: '/thu_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={16}/>, desc: 'Chana Dal Tadka + Steamed Rice + Roti + Salad + Achaar', img: '/thu_dinner.png' }
      ]
    },
    Friday: {
      theme: 'The Feast',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={16}/>, desc: 'Bread Pakora (4 Pcs) with Dhaniya-Tamatar Chatni', img: '/fri_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={16}/>, desc: 'Chole Bhature + Shahi Pulao + Salad + Achaar', img: '/fri_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={16}/>, desc: 'Mix Paratha (Aloo/Gobhi/Pyaj) + Boondi Raita + Chatni + Achaar', img: '/fri_dinner.png' }
      ]
    },
    Saturday: {
      theme: 'Weekend Vibes',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={16}/>, desc: 'Puri + Special Sabzi + Raita + Achaar', img: '/sat_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={16}/>, desc: 'Dal Makhni + Dry Veg + Steamed Rice + Roti + Salad + Achaar', img: '/sat_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={16}/>, desc: 'Soyabean Gravy Veg + Steamed Rice + Roti + Salad + Achaar', img: '/sat_dinner.png' }
      ]
    },
    Sunday: {
      theme: 'The Royal Celebration',
      meals: [
        { id: 1, type: 'Breakfast', icon: <Sunrise size={16}/>, desc: '2 Full-size Paneer Paratha + Fresh Dahi + Chatni + Achaar', img: '/sun_breakfast.png' },
        { id: 2, type: 'Lunch', icon: <Sun size={16}/>, desc: 'Khoya/Matar Paneer + Veg Pulao + Roti + Salad + Achaar + Sweet Dish', img: '/sun_lunch.png' },
        { id: 3, type: 'Dinner', icon: <Moon size={16}/>, desc: 'Aloo Matar / Dal Kachauri + Gravy Veg + Dahi Wada + Achaar + Salad', img: '/sun_dinner.png' }
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
    <section className="relative py-16 md:py-24 w-full bg-[#f8fbef]/60 font-body overflow-hidden">
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Sleek Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 bg-[#7CB342]/10 text-[#558228] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={14} /> Fresh Everyday
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-extrabold text-[#2d2a26] tracking-tight">
            Our <span className="text-[#7CB342]" style={{ fontFamily: "'Lobster', cursive" }}>Weekly Menu</span>
          </h2>
        </div>

        {/* items-stretch is the magic here: it forces left and right sides to be equal height */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* 🔴 LEFT SIDE: Days List (Screenshot matched design) */}
          <div className="w-full lg:w-[22%] shrink-0 flex flex-col h-auto">
            {/* Single Container for all days, border-gray-200 for darker lines */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-row lg:flex-col overflow-x-auto lg:overflow-hidden custom-scrollbar-hide snap-x h-full">
              {daysOfWeek.map((day, index) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  // lg:flex-1 makes buttons stretch evenly vertically to fill the container!
                  className={`
                    shrink-0 flex items-center px-6 py-3.5 lg:py-0 lg:flex-1 font-bold transition-all duration-300 text-[15px] md:text-[16px] snap-start
                    border-r lg:border-r-0 lg:border-b border-gray-200 last:border-0
                    ${activeDay === day 
                      ? 'bg-[#7CB342] text-white shadow-sm' 
                      : 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    }
                    ${index === 0 ? 'lg:rounded-t-lg' : ''}
                    ${index === daysOfWeek.length - 1 ? 'lg:rounded-b-lg' : ''}
                  `}
                >
                  <span className="relative z-10">{day}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Cards Area */}
          <div className="w-full lg:w-[78%] flex flex-col h-full">
            
            {/* Dynamic Theme Banner */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-1 w-12 bg-[#7CB342] rounded-full"></div>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 flex items-center gap-3">
                {activeDay} 
                <span className="text-gray-300">|</span>
                <span className="text-[#7CB342] text-2xl font-normal" style={{ fontFamily: "'Lobster', cursive" }}>
                  {weeklyMenu[activeDay].theme}
                </span>
              </h3>
            </div>

            {/* BENTO GRID */}
            <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-5 lg:gap-6 pb-4 items-stretch custom-scrollbar-hide snap-x flex-grow">
              {weeklyMenu[activeDay].meals.map((meal) => (
                <div 
                  key={meal.id} 
                  className="bg-white rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex flex-col shrink-0 w-[270px] md:w-[290px] lg:w-auto snap-center relative group hover:-translate-y-1 transition-transform duration-300 border border-gray-100/50">
                  {/* Image Half */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-t-[1.5rem] shrink-0">
                    <img 
                      src={meal.img} 
                      alt={meal.type} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>

                  {/* Floating 3D Badge */}
                  <div className="absolute top-[calc(58%-1.25rem)] left-2 bg-white shadow-lg rounded-full px-4 py-1.5 flex items-center gap-2 border border-gray-100 z-10 transform -translate-y-6 lg:-translate-y-8">
                    <div className="text-[#f59e0b]">{meal.icon}</div>
                    <span className="font-extrabold text-[11px] text-gray-900 uppercase tracking-widest">{meal.type}</span>
                  </div>

                  {/* Text Half */}
                  <div className="p-6 pt-8 flex flex-col flex-1 bg-white rounded-b-[1.5rem]">
                    <p className="text-gray-700 text-[15px] md:text-[16px] font-bold leading-relaxed m-0">
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
        .custom-scrollbar-hide::-webkit-scrollbar { display: none; }
        .custom-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default TodaysMenu;