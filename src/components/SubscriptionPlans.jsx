import React, { useState } from 'react';
import { CheckCircle2, Gift, Clock, CreditCard, CalendarDays, MapPin, Info } from 'lucide-react';

const SubscriptionPlans = () => {
  const [activeTab, setActiveTab] = useState('full');

  const fullDayPlans = [
    { name: 'Light', ratio: '60/60/60', oldPrice: '5,400', newPrice: '5,280', free: 'B + L (₹120)' },
    { name: 'Standard', ratio: '60/80/80', oldPrice: '6,600', newPrice: '6,460', free: 'B + L (₹140)' },
    { name: 'Balanced', ratio: '60/80/100', oldPrice: '7,200', newPrice: '7,060', free: 'B + L (₹140)', popular: true },
    { name: 'Mega', ratio: '60/100/100', oldPrice: '7,800', newPrice: '7,640', free: 'B + L (₹160)' },
  ];

  const duoPlans = [
    { name: 'Duo 60/60', oldPrice: '3,600', newPrice: '3,540', free: '1 Meal (₹60)' },
    { name: 'Duo 80/80', oldPrice: '4,800', newPrice: '4,720', free: '1 Meal (₹80)' },
    { name: 'Duo 100/100', oldPrice: '6,000', newPrice: '5,900', free: '1 Meal (₹100)' },
    { name: 'Duo 60/80', oldPrice: '4,200', newPrice: '4,120', free: '1 L/D (₹80)', popular: true },
    { name: 'Duo 60/100', oldPrice: '4,800', newPrice: '4,700', free: '1 L/D (₹100)' },
    { name: 'Duo 80/100', oldPrice: '5,400', newPrice: '5,300', free: '1 Dinner (₹100)' },
  ];

  const activePlans = activeTab === 'full' ? fullDayPlans : duoPlans;

  return (
    // 🔴 Transparent background kar diya hai
    <section className="pt-6 pb-20 px-4 sm:px-6 lg:px-12 font-body relative" id="subscription">
      <div className="max-w-7xl mx-auto">
        
        {/* 🔴 Header Section: Text ko White aur Glowing banaya hai */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.1)] mb-6 animate-in slide-in-from-bottom-4">
            <MapPin size={16} className="text-[#a4e363]" />
            <span className="text-sm font-bold text-white tracking-wide">Special VIP access for Gomti Nagar</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            The <span className="text-[#a4e363] font-['Lobster'] font-normal drop-shadow-md">Swad Sudha</span> Pass
          </h2>
          <p className="text-lg text-white/90 drop-shadow">
            {activeTab === 'full' 
              ? "Maximum savings for the full-time foodie or busy professional." 
              : "Perfect for managing your work-life balance with any 2 meals."}
          </p>
        </div>

        {/* 2030 Style Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 flex inline-flex relative z-10">
            <button 
              onClick={() => setActiveTab('full')}
              className={`relative px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === 'full' ? 'text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
            >
              {activeTab === 'full' && <div className="absolute inset-0 bg-[#7cb342] rounded-xl -z-10 transition-all"></div>}
            Full Day Pass
            </button>
            <button 
              onClick={() => setActiveTab('duo')}
              className={`relative px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === 'duo' ? 'text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
            >
              {activeTab === 'duo' && <div className="absolute inset-0 bg-[#7cb342] rounded-xl -z-10 transition-all"></div>}
            Daily Duo Pass
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {activePlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.popular ? 'border-[#7cb342] shadow-[0_8px_30px_rgba(124,179,66,0.15)]' : 'border-gray-100 shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#7cb342] to-[#568a35] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                {plan.ratio && <p className="text-sm font-medium text-gray-400">Ratio: {plan.ratio}</p>}
              </div>

              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-gray-900">₹{plan.newPrice}</span>
                <span className="text-sm font-medium text-gray-400 line-through">₹{plan.oldPrice}</span>
                <span className="text-xs font-bold text-gray-500 ml-1">/mo</span>
              </div>

              <div className="bg-[#7cb342]/10 rounded-2xl p-4 mb-8 border border-[#7cb342]/20">
                <div className="flex items-start gap-3">
                  <Gift size={18} className="text-[#7cb342] mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#467b2d] uppercase tracking-wider mb-1">Bonus Reward</p>
                    <p className="text-sm font-semibold text-gray-800">Free {plan.free}</p>
                  </div>
                </div>
              </div>

              <button className={`w-full py-3.5 rounded-xl font-bold transition-all ${plan.popular ? 'bg-[#7cb342] text-white hover:bg-[#669936] shadow-lg shadow-[#7cb342]/30' : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200'}`}>
                Subscribe Now
              </button>
            </div>
          ))}
        </div>

        {/* 2030 Minimalist Notes Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm">
          <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Info size={20} className="text-[#7cb342]" /> Important Guidelines
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex gap-4">
              <Clock className="text-gray-400 shrink-0" size={24} />
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Order Timings</h5>
                <p className="text-sm text-gray-500">Breakfast before 8 AM, Lunch by 12 PM, Dinner by 7 PM.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CreditCard className="text-gray-400 shrink-0" size={24} />
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Advance Payment</h5>
                <p className="text-sm text-gray-500">Subscriptions are activated instantly upon advance payment.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CalendarDays className="text-gray-400 shrink-0" size={24} />
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Billing Cycle</h5>
                <p className="text-sm text-gray-500">Calculated for 30 days. Base cost adjusts pro-rata for 31-day months.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-[#7cb342] shrink-0" size={24} />
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">The Reward</h5>
                <p className="text-sm text-gray-500">Your free bonus meal(s) are provided proudly at month-end!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SubscriptionPlans;