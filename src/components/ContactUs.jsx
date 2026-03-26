import React, { useState } from 'react';
import { MapPin, PhoneCall, Mail, Clock, Send, Loader2 } from 'lucide-react'; // Loader2 add kiya

const ContactUs = () => {
  // 🔴 Form Data & Loading State
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔴 Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Contact Us Page' }) // Source bata rahe hain
      });

      const data = await response.json();
      if (response.ok && data.success) {
        alert("Aapka message bhej diya gaya hai! Hum jald hi aapse sampark karenge.");
        setFormData({ name: '', phone: '', email: '', message: '' }); // Form clear
      } else {
        alert("Message bhejne me error aayi. Kripya baad me try karein.");
      }
    } catch (error) {
      alert("Internet connection check karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 font-body w-full max-w-[1100px] mx-auto relative z-10">
      
      <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-white/50 animate-in fade-in zoom-in-95 duration-500 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 relative z-10">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#7CB342] via-[#2d5619] to-[#467b2d] p-8 md:p-10 lg:p-12 text-white relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a4e363]/10 rounded-xl blur-3xl transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7cb342]/20 rounded-xl blur-2xl transform -translate-x-1/3 translate-y-1/3 rotate-12"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading mb-4 text-[#a4e363] drop-shadow-md">Get in Touch</h3>
              <p className="text-green-50/90 text-sm mb-12 leading-relaxed font-light tracking-wide">
                Aapke order ya kisi bhi inquiry ke liye hum hamesha hazir hain. Niche di gayi details par humse sampark karein.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 group-hover:border-[#a4e363]/50 transition-all duration-300">
                    <PhoneCall size={22} className="text-[#a4e363] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs text-green-200/70 uppercase tracking-widest font-semibold mb-1">Call Us</p>
                    <a href="tel:+917007948170" className="text-lg font-bold text-white group-hover:text-[#a4e363] transition-colors">
                      +91 7007-948-170
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 group-hover:border-[#a4e363]/50 transition-all duration-300">
                    <Mail size={22} className="text-[#a4e363] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs text-green-200/70 uppercase tracking-widest font-semibold mb-1">Email Us</p>
                    <a href="mailto:query@swadsudha.in" className="text-lg font-bold text-white group-hover:text-[#a4e363] transition-colors">
                      query@swadsudha.in
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 group-hover:border-[#a4e363]/50 transition-all duration-300 mt-1">
                    <MapPin size={22} className="text-[#a4e363] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs text-green-200/70 uppercase tracking-widest font-semibold mb-1">Location</p>
                    <p className="text-lg font-bold text-white leading-tight">
                      Gomti Nagar,<br />
                      <span className="text-sm font-medium text-green-50/80">Lucknow, Uttar Pradesh</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={18} className="text-[#a4e363]" />
                <h4 className="font-bold text-lg tracking-wide">Operating Hours</h4>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                <div className="bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                  <p className="text-[10px] text-green-200 uppercase font-bold tracking-wider mb-0.5">Breakfast</p>
                  <p className="text-sm font-semibold text-white">Before 8 AM</p>
                </div>
                <div className="bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                  <p className="text-[10px] text-green-200 uppercase font-bold tracking-wider mb-0.5">Lunch</p>
                  <p className="text-sm font-semibold text-white">Before 12 PM</p>
                </div>
                <div className="bg-white/5 px-3 py-2 rounded-xl border border-white/10 col-span-2">
                  <p className="text-[10px] text-green-200 uppercase font-bold tracking-wider mb-0.5">Dinner</p>
                  <p className="text-sm font-semibold text-white">Before 7 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-3 p-8 md:p-10 lg:p-14 flex flex-col justify-center bg-white/80">
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Send us a Message</h3>
              <p className="text-gray-500 font-medium">Apna sawal ya feedback niche likhein, humari team jald hi aapse baat karegi.</p>
            </div>

            {/* 🔴 Added onSubmit */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder=" "
                    className="block w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7cb342]/50 focus:border-[#7cb342] focus:bg-white transition-all peer"
                    required
                  />
                  <label htmlFor="name" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white/0 px-2 peer-focus:px-2 peer-focus:text-[#7cb342] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:bg-white font-medium">
                    Your Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder=" "
                    className="block w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7cb342]/50 focus:border-[#7cb342] focus:bg-white transition-all peer"
                    required
                  />
                  <label htmlFor="phone" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white/0 px-2 peer-focus:px-2 peer-focus:text-[#7cb342] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:bg-white font-medium">
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder=" "
                  className="block w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7cb342]/50 focus:border-[#7cb342] focus:bg-white transition-all peer"
                  required
                />
                <label htmlFor="email" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white/0 px-2 peer-focus:px-2 peer-focus:text-[#7cb342] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:bg-white font-medium">
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  placeholder=" "
                  className="block w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7cb342]/50 focus:border-[#7cb342] focus:bg-white transition-all peer resize-none"
                  required
                ></textarea>
                <label htmlFor="message" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white/0 px-2 peer-focus:px-2 peer-focus:text-[#7cb342] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 peer-focus:bg-white font-medium">
                  Your Message
                </label>
              </div>

              {/* 🔴 Button with Loading State */}
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-10 py-4 font-bold rounded-xl shadow-[0_10px_20px_rgba(124,179,66,0.3)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7cb342] hover:bg-[#669936] text-white active:scale-95'}`}
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span> 
                  {isSubmitting ? (
                    <Loader2 size={18} className="relative z-10 animate-spin" />
                  ) : (
                    <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;