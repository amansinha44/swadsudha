import React from 'react';
import MealCard from './MealCard';

const SpecialMenu = () => {
  // Your SwadSudha Content
  const meals = [
    { 
      title: 'Ghar Ka Swad', 
      desc: 'Authentic routine thali with pure Desi Ghee.', 
      price: '249.00', 
      img: '/bowl_1.png' 
    },
    { 
      title: 'Bowl of Paneer', 
      desc: 'Rich and creamy paneer bowl with secret spices.', 
      price: '199.00', 
      img: '/bowl_2.png' 
    },
    { 
      title: 'Diet Meal Bowl', 
      desc: 'Zero-oil, high protein macro counted meals.', 
      price: '299.00', 
      img: '/bowl_3.png' 
    },
    { 
      title: 'Bowl of Dal Rice', 
      desc: 'Comforting home-style dal with steamed rice.', 
      price: '149.00', 
      img: '/bowl_4.png' 
    }
  ];

  return (
    <section className="w-full bg-[#fafafa] py-20 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
           <h2 className="font-heading text-4xl md:text-[50px] text-[#1a1a1a]">Special Menu</h2>
        </div>

        {/* Meal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center">
           {meals.map((meal, idx) => (
             <MealCard 
               key={idx} 
               title={meal.title} 
               description={meal.desc} 
               price={meal.price} 
               image={meal.img} 
             />
           ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialMenu;