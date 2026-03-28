import React from 'react';
import { MessageCircle, Utensils, Clock, Truck } from 'lucide-react';

const OrderSteps = () => {
  const steps = [
    {
      id: 1,
      title: "WhatsApp/Website/Call",
      desc: "Message +91 7007-948-170 with your name & location.",
      icon: <MessageCircle size={30} className="text-white relative z-10" />,
      color: "#7CB342", // Swad Sudha Green
      shadowColor: "rgba(124,179,66,0.5)"
    },
    {
      id: 2,
      title: "Pick Your Plan",
      desc: "Super Combo at ₹50 or flexible Monthly Plans.",
      icon: <Utensils size={30} className="text-white relative z-10" />,
      color: "#f59e0b", // Premium Gold
      shadowColor: "rgba(245,158,11,0.5)"
    },
    {
      id: 3,
      title: "Choose Timing",
      desc: "Breakfast (<8 AM), Lunch (<12 PM) or Dinner (<7 PM).",
      icon: <Clock size={30} className="text-white relative z-10" />,
      color: "#f59e0b", // Premium Gold
      shadowColor: "rgba(245,158,11,0.5)"
    },
    {
      id: 4,
      title: "Get Fresh Tiffin",
      desc: "Hot, 100% Pure Veg meal at your door in Gomti Nagar.",
      icon: <Truck size={30} className="text-white relative z-10" />,
      color: "#7CB342", // Swad Sudha Green
      shadowColor: "rgba(124,179,66,0.5)"
    }
  ];

  return (
   
    <section className="w-full bg-[#fcfefa] py-20 relative overflow-hidden border-y border-gray-100">
      
      {/* 2030 Style Background Ambient Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-96 h-96 bg-[#7cb342]/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-15%] right-[-5%] w-96 h-96 bg-[#f59e0b]/10 blur-[100px] rounded-full"></div>
      </div>

      {/* 🔴 CONTENT CONTAINER (MAX 1100px) */}
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 font-body">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-[#f59e0b] text-xs font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-4 shadow-[0_4px_15px_rgba(245,158,11,0.15)] border border-[#f59e0b]/20">
            Super Easy
          </span>
          <h2 
            className="text-[2.25rem] md:text-[3.5rem] leading-tight text-gray-900 tracking-tight mb-3"
            style={{ fontFamily: "'Lobster', cursive" }}
          >
            Order in <span className="text-[#7CB342]">4 Simple Steps</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            It takes less than 2 minutes to get started with Swad Sudha.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative mt-12">
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[12%] w-[76%] h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center group cursor-pointer">
                
                {/* 🚀 THE 2030 ANIMATION CONTAINER */}
                <div className="relative mb-8 flex items-center justify-center w-28 h-28">
                  
                  {/* Outer Rotating Dashed Ring (Spins on Hover) */}
                  <div 
                    className="absolute inset-0 rounded-full border-[3px] border-dashed opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out z-0"
                    style={{ borderColor: step.color, animation: 'spin 6s linear infinite' }}
                  ></div>

                  {/* Pulsing Glow Ring */}
                  <div 
                    className="absolute inset-3 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity duration-500 z-0"
                    style={{ backgroundColor: step.color }}
                  ></div>

                  {/* Main Solid Icon Circle (Scales up on Hover) */}
                  <div 
                    className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 z-10 border-4 border-white"
                    style={{ backgroundColor: step.color, boxShadow: `0 8px 25px ${step.shadowColor}` }}
                  >
                    {step.icon}
                  </div>

                  {/* Step Number Badge (Pops out and rotates slightly) */}
                  <div 
                    className="absolute top-1 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center font-extrabold text-sm border-[2.5px] z-20 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-lg"
                    style={{ borderColor: step.color, color: step.color }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight group-hover:text-[#7CB342] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OrderSteps;