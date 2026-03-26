import React, { useState } from 'react';
import { CheckCircle2, Gift, Clock, CreditCard, CalendarDays, MapPin, Info } from 'lucide-react';

const SubscriptionPlans = () => {
  const [activeTab, setActiveTab] = useState('full');

  const fullDayPlans = [
    { name: 'Light', ratio: '60/60/60', oldPrice: '5,400', newPrice: '5,280', free: 'B + L (₹120)', color: 'blue' },
    { name: 'Standard', ratio: '60/80/80', oldPrice: '6,600', newPrice: '6,460', free: 'B + L (₹140)', color: 'orange' },
    { name: 'Balanced', ratio: '60/80/100', oldPrice: '7,200', newPrice: '7,060', free: 'B + L (₹140)', popular: true, color: 'green' },
    { name: 'Mega', ratio: '60/100/100', oldPrice: '7,800', newPrice: '7,640', free: 'B + L (₹160)', color: 'purple' },
  ];

  const duoPlans = [
    { name: 'Duo 60/60', oldPrice: '3,600', newPrice: '3,540', free: '1 Meal (₹60)', color: 'blue' },
    { name: 'Duo 80/80', oldPrice: '4,800', newPrice: '4,720', free: '1 Meal (₹80)', color: 'orange' },
    { name: 'Duo 100/100', oldPrice: '6,000', newPrice: '5,900', free: '1 Meal (₹100)', color: 'teal' },
    { name: 'Duo 60/80', oldPrice: '4,200', newPrice: '4,120', free: '1 L/D (₹80)', popular: true, color: 'green' },
    { name: 'Duo 60/100', oldPrice: '4,800', newPrice: '4,700', free: '1 L/D (₹100)', color: 'purple' },
    { name: 'Duo 80/100', oldPrice: '5,400', newPrice: '5,300', free: '1 Dinner (₹100)', color: 'rose' },
  ];

  const themeStyles = {
    blue: { bg: 'bg-blue-50/90', border: 'border-blue-300', text: 'text-blue-700', btn: 'bg-blue-500 hover:bg-blue-600', box: 'bg-blue-100/60 border-blue-200', icon: 'text-blue-500' },
    orange: { bg: 'bg-orange-50/90', border: 'border-orange-300', text: 'text-orange-700', btn: 'bg-orange-500 hover:bg-orange-600', box: 'bg-orange-100/60 border-orange-200', icon: 'text-orange-500' },
    green: { bg: 'bg-green-50/90', border: 'border-[#7cb342]', text: 'text-[#467b2d]', btn: 'bg-[#7cb342] hover:bg-[#669936]', box: 'bg-[#7cb342]/15 border-[#7cb342]/30', icon: 'text-[#7cb342]' },
    purple: { bg: 'bg-purple-50/90', border: 'border-purple-300', text: 'text-purple-700', btn: 'bg-purple-500 hover:bg-purple-600', box: 'bg-purple-100/60 border-purple-200', icon: 'text-purple-500' },
    teal: { bg: 'bg-teal-50/90', border: 'border-teal-300', text: 'text-teal-700', btn: 'bg-teal-500 hover:bg-teal-600', box: 'bg-teal-100/60 border-teal-200', icon: 'text-teal-500' },
    rose: { bg: 'bg-rose-50/90', border: 'border-rose-300', text: 'text-rose-700', btn: 'bg-rose-500 hover:bg-rose-600', box: 'bg-rose-100/60 border-rose-200', icon: 'text-rose-500' }
  };

  const activePlans = activeTab === 'full' ? fullDayPlans : duoPlans;

  return (
    <section className="pt-6 pb-20 px-4 sm:px-6 lg:px-12 font-body relative max-w-[1150px] mx-auto" id="subscription" >
    
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.1)] mb-6 animate-in slide-in-from-bottom-4">
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

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 flex inline-flex relative z-10">
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
          {activePlans.map((plan, index) => {
            const theme = themeStyles[plan.color];
            return (
              <div 
                key={index} 
                className={`relative ${theme.bg} rounded-xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm ${plan.popular ? `${theme.border} shadow-[0_8px_30px_rgba(0,0,0,0.12)] scale-105 z-10` : 'border-white/50 shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#7cb342] to-[#568a35] text-white px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6 mt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  {plan.ratio && <p className="text-sm font-medium text-gray-500">Ratio: {plan.ratio}</p>}
                </div>

                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-gray-900">₹{plan.newPrice}</span>
                  <span className="text-sm font-medium text-gray-400 line-through">₹{plan.oldPrice}</span>
                  <span className="text-xs font-bold text-gray-500 ml-1">/mo</span>
                </div>

                <div className={`${theme.box} rounded-xl p-4 mb-8 border`}>
                  <div className="flex items-start gap-3">
                    <Gift size={18} className={`${theme.icon} mt-0.5`} />
                    <div>
                      <p className={`text-xs font-bold ${theme.text} uppercase tracking-wider mb-1`}>Bonus Reward</p>
                      <p className="text-sm font-semibold text-gray-800">Free {plan.free}</p>
                    </div>
                  </div>
                </div>

                <button className={`w-full py-3.5 rounded-xl font-bold transition-all text-white shadow-md hover:shadow-lg ${theme.btn}`}>
                  Subscribe Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Minimalist Notes Section (Now with Colorful Blocks) */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-8 lg:p-10 border border-gray-100 shadow-lg">
          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Info size={24} className="text-[#7cb342]" /> Important Guidelines
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 🟢 Guideline 1: Blue Theme */}
            <div className="flex flex-col gap-3 bg-blue-50/80 border border-blue-200 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                <Clock className="text-blue-500" size={24} />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1.5">Order Timings</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Breakfast before 8 AM, Lunch by 12 PM, Dinner by 7 PM.</p>
              </div>
            </div>

            {/* 🟢 Guideline 2: Orange Theme */}
            <div className="flex flex-col gap-3 bg-orange-50/80 border border-orange-200 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center">
                <CreditCard className="text-orange-500" size={24} />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1.5">Advance Payment</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Subscriptions are activated instantly upon advance payment.</p>
              </div>
            </div>

            {/* 🟢 Guideline 3: Purple Theme */}
            <div className="flex flex-col gap-3 bg-purple-50/80 border border-purple-200 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center">
                <CalendarDays className="text-purple-500" size={24} />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1.5">Billing Cycle</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Calculated for 30 days. Base cost adjusts pro-rata for 31-day months.</p>
              </div>
            </div>

            {/* 🟢 Guideline 4: Green Theme (Matches Swad Sudha Primary) */}
            <div className="flex flex-col gap-3 bg-[#7cb342]/10 border border-[#7cb342]/30 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-[#7cb342]/20 w-12 h-12 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="text-[#568a35]" size={24} />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1.5">The Reward</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Your free bonus meal(s) are provided proudly at month-end!</p>
              </div>
            </div>

          </div>
        </div>

      
    </section>
  );
};

export default SubscriptionPlans;