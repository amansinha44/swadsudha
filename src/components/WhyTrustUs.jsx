import React from 'react';
import { ShieldCheck, Utensils, Users, Leaf, Clock, Heart } from 'lucide-react';

const WhyTrustUs = () => {
  const trustFeatures = [
    {
      id: 1,
      title: "FSSAI Certified",
      highlight: "100% Safe & Hygienic",
      desc: "Strict government-certified food safety standards followed daily.",
      icon: <ShieldCheck size={24} strokeWidth={2} />,
      isHighlighted: false
    },
    {
      id: 2,
      title: "Kitchen Open for Visit",
      highlight: "100% Transparent",
      desc: "Subscribers can inspect our kitchen and hygiene standards anytime.",
      icon: <Utensils size={24} strokeWidth={2} />,
      isHighlighted: true // Screenshot ki tarah beech wala card highlight
    },
    {
      id: 3,
      title: "Happy Customers",
      highlight: "98% Retention",
      desc: "Growing rapidly across Gomti Nagar with consistent positive reviews.",
      icon: <Users size={24} strokeWidth={2} />,
      isHighlighted: false
    },
    {
      id: 4,
      title: "Pure Vegetarian",
      highlight: "Zero Compromises",
      desc: "Fresh ingredients, no preservatives ever. Cooked in pure desi ghee.",
      icon: <Leaf size={24} strokeWidth={2} />,
      isHighlighted: false
    },
    {
      id: 5,
      title: "On-Time Delivery",
      highlight: "Garma-Garam Guarantee",
      desc: "Your meal arrives hot in heat-retaining tiffins exactly when you expect it.",
      icon: <Clock size={24} strokeWidth={2} />,
      isHighlighted: false
    },
    {
      id: 6,
      title: "Maa Ke Haath Ka Swaad",
      highlight: "Premium Quality",
      desc: "Home-like taste that makes you miss your home a little less.",
      icon: <Heart size={24} strokeWidth={2} />,
      isHighlighted: false
    }
  ];

  return (
   
    <section className="py-20 px-4 sm:px-6 font-body w-full bg-[#F8FBEF]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#eaf4e0] text-[#558228] text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Trust & Safety
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2a26] tracking-tight mb-3">
            Why Lucknow Trusts Us
          </h2>
          
          <p className="text-gray-500 font-medium text-lg">
            FSSAI certified, transparent kitchen, and guaranteed piping hot delivery.
          </p>
        </div>

        {/* Horizontal Grid Section (Exactly like Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFeatures.map((feature) => (
            <div 
              key={feature.id} 
              className={`bg-white rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md ${
                feature.isHighlighted 
                  ? 'border border-[#7CB342] shadow-[0_8px_30px_rgba(124,179,66,0.12)]' 
                  : 'border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
              }`}
            >
              
              {/* Icon (Left Side) */}
              <div className="w-12 h-12 rounded-xl bg-[#f4f9f0] text-[#7CB342] flex items-center justify-center shrink-0">
                {feature.icon}
              </div>

              {/* Text Content (Right Side) */}
              <div className="flex flex-col pt-0.5">
                <h3 className="text-[17px] font-extrabold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[13px] font-bold text-[#10b981] mt-1 mb-1.5 tracking-wide">
                  {feature.highlight}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed pr-2">
                  {feature.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyTrustUs;