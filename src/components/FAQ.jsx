import React, { useState } from 'react';
import { MessageCircle, Plus, Minus, Sparkles, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openId, setOpenId] = useState(1); // Pehla sawal default open rahega

  const faqs = [
    {
      id: 1,
      question: "What is the monthly cost of the Swad Sudha tiffin service?",
      answer: "We believe in premium quality at honest prices. Our daily Super Combo Lunch starts at just ₹60. For a complete monthly subscription (Lunch + Dinner), it beautifully fits within an estimated ₹1,800 to ₹3,000, depending on your customized meal plan. No hidden charges, pure transparency."
    },
    {
      id: 2,
      question: "Is tiffin delivery available on Sundays in Gomti Nagar?",
      answer: "Absolutely. Sunday is our 'Royal Celebration' day. We serve exclusive premium meals like Khoya Matar Paneer, Veg Pulao, and special sweet dishes to make your weekend feel like home."
    },
    {
      id: 3,
      question: "Do you offer a trial tiffin service before subscribing?",
      answer: "We don't just offer a trial; we offer a revelation. You can order a single meal for as low as ₹50 to experience our 'Maa ke haath ka swaad'. We let our food do the convincing before you commit to a subscription."
    },
    {
      id: 4,
      question: "Is the food truly hygienic and home-cooked?",
      answer: "100%. We operate a strict FSSAI-certified kitchen. Unlike commercial cloud kitchens, we maintain an 'Open Kitchen Policy'. Our subscribers are welcome to visit our Gomti Nagar facility anytime to witness our impeccable hygiene and premium ingredient standards firsthand."
    },
    {
      id: 5,
      question: "Do you offer separate Veg and Non-Veg tiffins?",
      answer: "No. Swad Sudha is an uncompromisingly 100% Pure Vegetarian kitchen. We do not cook or entertain non-vegetarian food in our premises. Your food is prepared with complete Sattvic purity, making it 100% safe for strict vegetarians."
    },
    {
      id: 6,
      question: "Can I pause or cancel my tiffin subscription if I go out of town?",
      answer: "Life is unpredictable; your meal plan shouldn't be a trap. You can pause your subscription with a simple WhatsApp message before the meal preparation time. Your balance remains completely safe and carries forward when you return."
    },
    {
      id: 7,
      question: "What kind of cooking oil and ingredients do you use?",
      answer: "Quality is our signature. We strictly use Pure Desi Ghee for specific dishes. We source fresh, daily-market vegetables and grind our own spices to ensure zero adulteration and maximum health benefits."
    },
    {
      id: 8,
      question: "How do I subscribe and start getting my meals?",
      answer: "It takes less than 2 minutes. Just click the WhatsApp button or Website Form or Call below number, send us your name and Gomti Nagar location, pick your plan (Daily/Weekly/Monthly), and your piping hot tiffin will be at your door."
    }
  ];

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    // 🔴 FIXED: bg-[#F8FBEF] hata kar bg-transparent kar diya. Ab koi line nahi dikhegi!
    <section className="relative py-20 md:py-32 w-full bg-transparent font-body overflow-hidden">
      
      {/* Background Subtle Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7CB342]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* ==========================================
              LEFT COLUMN: Sticky Header & CTA (2030 Vibe)
              ========================================== */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-[120px] shrink-0">
            
            <div className="inline-flex items-center gap-2 bg-white text-[#7CB342] text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-sm border border-gray-100">
              <HelpCircle size={14} /> Frequently Asked Questions
            </div>
            
            <h2 className="text-4xl md:text-[3rem] font-extrabold text-[#2d2a26] leading-tight mb-4 tracking-tight">
              Your Questions, <br/>
              <span className="text-[#7CB342]" style={{ fontFamily: "'Lobster', cursive", letterSpacing: '1px' }}>Answered.</span>
            </h2>
            
            <p className="text-gray-500 text-[16px] leading-relaxed mb-10 font-medium">
              Everything you need to know about Gomti Nagar's most trusted, pure vegetarian tiffin service. 
            </p>

            {/* High-Conversion CTA Box */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#7CB342]/10 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CB342] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7CB342]"></span>
                </span>
                <span className="text-sm font-extrabold text-gray-800 uppercase tracking-wide">We are Online</span>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">Still have doubts?</h4>
              <p className="text-sm text-gray-500 mb-6">Drop us a message. We usually reply in under 2 minutes.</p>
              
              <a 
                href="https://wa.me/917007948170" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 px-4 rounded-xl font-bold text-[15px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-2 group/btn"
              >
                <MessageCircle size={20} className="group-hover/btn:animate-bounce" /> 
                Ask on WhatsApp
              </a>
            </div>

          </div>

          {/* ==========================================
              RIGHT COLUMN: Accordion FAQs
              ========================================== */}
          <div className="w-full lg:w-[65%] flex flex-col gap-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                  openId === faq.id 
                    ? 'border-[#7CB342]/30 shadow-[0_10px_30px_rgba(124,179,66,0.1)]' 
                    : 'border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:border-gray-200'
                }`}
              >
                {/* Question Header (Clickable) */}
                <button 
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left flex items-center justify-between p-5 md:p-6 bg-white cursor-pointer focus:outline-none"
                >
                  <h3 className={`text-[16px] md:text-[17px] font-bold pr-4 transition-colors duration-300 ${
                    openId === faq.id ? 'text-[#568a35]' : 'text-gray-800 hover:text-[#7CB342]'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openId === faq.id ? 'bg-[#7CB342] text-white rotate-180' : 'bg-gray-50 text-gray-400'
                  }`}>
                    {openId === faq.id ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>

                {/* Answer Content (Animated Height) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-5 md:p-6 pt-0 text-gray-600 text-[14px] md:text-[15px] leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;