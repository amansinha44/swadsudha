import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Eye, FileText, Mail, Server, Cookie, BellRing } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-120px 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('div[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const policySections = [
    { id: 'introduction', icon: <FileText size={18} />, title: "1. Introduction" },
    { id: 'collection', icon: <Server size={18} />, title: "2. Information We Collect" },
    { id: 'usage', icon: <BellRing size={18} />, title: "3. How We Use It" },
    { id: 'security', icon: <Lock size={18} />, title: "4. Data Security" },
    { id: 'sharing', icon: <Eye size={18} />, title: "5. Information Sharing" },
    { id: 'cookies', icon: <Cookie size={18} />, title: "6. Cookies Policy" },
    { id: 'contact', icon: <Mail size={18} />, title: "7. Contact Us" }
  ];

  return (
    <section className="relative py-16 md:py-24 w-full bg-transparent font-body overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#7CB342]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#0f2405]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full max-w-[1150px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ==========================================
            🔴 FIXED: HEADER TEXT COLORS FOR DARK BACKGROUND
            ========================================== */}
        <div className="mb-12 md:mb-16 pt-2 md:pt-6">
          <div className="inline-flex items-center gap-2 bg-white text-[#7CB342] text-[12px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-md">
            <ShieldCheck size={16} /> 100% Transparent
          </div>
          
          {/* Changed text-[#2d2a26] to text-white and text-[#7CB342] to text-[#a4e363] for better pop */}
          <h2 className="text-4xl md:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight mb-4 drop-shadow-md">
            Privacy <span className="text-[#a4e363]" style={{ fontFamily: "'Lobster', cursive", letterSpacing: '1px' }}>Policy</span>
          </h2>
          
          {/* Changed text-gray-500 to text-white/90 */}
          <p className="text-white/90 text-[16px] md:text-[18px] max-w-2xl font-medium drop-shadow-sm">
            Your trust is our most secret ingredient. Here is exactly how we protect and use your data to deliver you the best tiffin service in Lucknow.
          </p>
          
          {/* Changed text-gray-400 to text-white/70 */}
          <div className="mt-6 flex items-center gap-2 text-[13px] font-bold text-white/70 uppercase tracking-widest">
            <span>Last Updated: March 28, 2026</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Sidebar Navigation */}
          <div className="hidden lg:block w-[30%] sticky top-[100px] shrink-0">
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-3 overflow-hidden">
              {policySections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold transition-all duration-300 text-left text-[14px] ${
                    activeSection === item.id
                      ? 'bg-[#7CB342]/10 text-[#568a35]'
                      : 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <span className={`${activeSection === item.id ? 'text-[#7CB342]' : 'text-gray-400'}`}>
                    {item.icon}
                  </span>
                  {item.title}
                </button>
              ))}
            </div>

            {/* Quick Contact Card */}
            <div className="mt-6 bg-[#0f2405] rounded-2xl p-6 text-left relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <ShieldCheck size={28} className="text-[#7CB342] mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">Safe & Secure</h4>
              <p className="text-white/60 text-sm leading-relaxed mb-0">
                We never sell your data to third parties. Your personal information is solely used to deliver your Swad Sudha meals safely.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Policy Content */}
          <div className="w-full lg:w-[70%] flex flex-col gap-10 md:gap-14 text-gray-600 leading-relaxed text-[15px] md:text-[16px] relative z-10">
            
            {/* 1. Introduction */}
            <div id="introduction" className="scroll-mt-32">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#7CB342]/10 text-[#7CB342] flex items-center justify-center"><FileText size={16} /></span>
                1. Introduction
              </h3>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="mb-4">
                  Welcome to <strong>Swad Sudha</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (swadsudha.in) or use our tiffin delivery services in Lucknow.
                </p>
                <p className="mb-0">
                  By accessing our website and using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </div>

            {/* 2. Information We Collect */}
            <div id="collection" className="scroll-mt-32">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#7CB342]/10 text-[#7CB342] flex items-center justify-center"><Server size={16} /></span>
                2. Information We Collect
              </h3>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="mb-4">To provide you with uninterrupted and timely tiffin deliveries, we collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-3 ml-2 marker:text-[#7CB342]">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and delivery address (specifically in Gomti Nagar/Lucknow areas).</li>
                  <li><strong>Order Details:</strong> Meal preferences (e.g., standard tiffin, special requests), subscription plans (daily/weekly/monthly), and delivery timings.</li>
                  <li><strong>Communication Data:</strong> Messages sent via our Contact Form or WhatsApp for inquiries, pausing subscriptions, or feedback.</li>
                </ul>
              </div>
            </div>

            {/* 3. How We Use It */}
            <div id="usage" className="scroll-mt-32">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#7CB342]/10 text-[#7CB342] flex items-center justify-center"><BellRing size={16} /></span>
                3. How We Use Your Information
              </h3>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="mb-4">We strictly use your information for operational purposes only:</p>
                <ul className="list-none space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7CB342] mt-1">✔</span>
                    <span>To accurately deliver your hot meals to your specified location.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7CB342] mt-1">✔</span>
                    <span>To manage your subscription, including pausing or modifying your meal plan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7CB342] mt-1">✔</span>
                    <span>To send you important updates via WhatsApp regarding menu changes, special holiday dishes, or delivery delays.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Data Security */}
            <div id="security" className="scroll-mt-32">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#7CB342]/10 text-[#7CB342] flex items-center justify-center"><Lock size={16} /></span>
                4. Data Security
              </h3>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="mb-0">
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception.
                </p>
              </div>
            </div>

            {/* 5. Sharing */}
            <div id="sharing" className="scroll-mt-32">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center"><Eye size={16} /></span>
                5. Information Sharing
              </h3>
              <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-l-4 border-l-red-500">
                <p className="mb-0 text-gray-800 font-medium">
                  <strong>We do not sell, trade, or rent your personal information to third parties.</strong> We may share your delivery address and phone number exclusively with our trusted delivery personnel solely for the purpose of delivering your tiffin.
                </p>
              </div>
            </div>

            {/* 6. Cookies */}
            <div id="cookies" className="scroll-mt-32">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#7CB342]/10 text-[#7CB342] flex items-center justify-center"><Cookie size={16} /></span>
                6. Cookies Policy
              </h3>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="mb-0">
                  We may use cookies and similar tracking technologies to track the activity on our website and store certain information. This helps us analyze website traffic and improve your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>
            </div>

            {/* 7. Contact Us */}
            <div id="contact" className="scroll-mt-32">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#7CB342]/10 text-[#7CB342] flex items-center justify-center"><Mail size={16} /></span>
                7. Contact Us
              </h3>
              <div className="bg-[#f4f9f0] p-6 md:p-8 rounded-2xl border border-[#7CB342]/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="mb-6 text-gray-700">If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 font-bold text-gray-900">
                    <span className="text-[#7CB342]">Email:</span> query@swadsudha.in
                  </div>
                  <div className="flex items-center gap-3 font-bold text-gray-900">
                    <span className="text-[#7CB342]">Phone:</span> +91 7007-948-170
                  </div>
                  <div className="flex items-start gap-3 font-bold text-gray-900">
                    <span className="text-[#7CB342] mt-1">Address:</span> 
                    <span>1/881, Vinay Khand, Gomti Nagar,<br/>Lucknow, Uttar Pradesh</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;