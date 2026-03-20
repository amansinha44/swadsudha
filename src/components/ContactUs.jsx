import React from 'react';
import { MapPin, PhoneCall, Mail, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-12 px-4 sm:px-6 font-body w-full max-w-[1074px] mx-auto relative z-10">
      
      {/* --- Main Contact Card --- */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          
          {/* Left Side: Contact Information (Dark Green) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#467b2d] to-[#1b360f] p-8 md:p-10 lg:p-12 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#a4e363] opacity-10 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-heading mb-2">Get in Touch</h3>
              <p className="text-green-100 text-sm mb-10 leading-relaxed">
                Aapke order ya kisi bhi inquiry ke liye hum hamesha hazir hain. Niche di gayi details par humse sampark karein.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                    <PhoneCall size={20} className="text-[#a4e363]" />
                  </div>
                  <div>
                    <p className="text-xs text-green-200 uppercase tracking-wider font-semibold mb-1">Call Us</p>
                    <a href="tel:+917007948170" className="text-lg font-bold hover:text-[#a4e363] transition-colors">
                      +91 7007-948-170
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                    <Mail size={20} className="text-[#a4e363]" />
                  </div>
                  <div>
                    <p className="text-xs text-green-200 uppercase tracking-wider font-semibold mb-1">Email Us</p>
                    <a href="mailto:info@swadsudha.com" className="text-lg font-bold hover:text-[#a4e363] transition-colors">
                      info@swadsudha.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                    <MapPin size={20} className="text-[#a4e363]" />
                  </div>
                  <div>
                    <p className="text-xs text-green-200 uppercase tracking-wider font-semibold mb-1">Location</p>
                    <p className="text-lg font-bold leading-tight">
                      Gomti Nagar,<br /> Lucknow, UP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={18} className="text-[#a4e363]" />
                <h4 className="font-bold text-lg">Operating Hours</h4>
              </div>
              <p className="text-sm text-green-100">Breakfast: Before 8:00 AM</p>
              <p className="text-sm text-green-100">Lunch: Before 12:00 PM</p>
              <p className="text-sm text-green-100">Dinner: Before 7:00 PM</p>
            </div>
          </div>

          {/* Right Side: Contact Form (White) */}
          <div className="lg:col-span-3 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-heading tracking-wide">Send us a Message</h3>
            <p className="text-gray-500 text-sm mb-8">Apna sawal ya feedback niche likhein, humari team jald hi aapse baat karegi.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Rahul Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#467b2d] focus:ring-4 focus:ring-[#467b2d]/10 outline-none transition-all bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#467b2d] focus:ring-4 focus:ring-[#467b2d]/10 outline-none transition-all bg-gray-50/50"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="rahul@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#467b2d] focus:ring-4 focus:ring-[#467b2d]/10 outline-none transition-all bg-gray-50/50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="I want to start a monthly subscription for lunch..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#467b2d] focus:ring-4 focus:ring-[#467b2d]/10 outline-none transition-all bg-gray-50/50 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full md:w-auto px-8 py-3.5 bg-[#467b2d] hover:bg-[#386324] text-white font-bold rounded-xl shadow-lg shadow-[#467b2d]/30 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;