import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, X, Loader2, ShieldCheck, RefreshCcw } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔴 Captcha States & Logic
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [captchaInput, setCaptchaInput] = useState('');

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    });
    setCaptchaInput('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 Captcha Validation
    if (parseInt(captchaInput) !== captcha.num1 + captcha.num2) {
      alert("Kripya sahi Captcha (Math Answer) enter karein!");
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Footer Form' })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        alert("Aapka message bhej diya gaya hai!");
        setFormData({ name: '', email: '', phone: '', message: '' }); 
        setIsFormVisible(false); // Success par form band kar do
        generateCaptcha();
      } else {
        alert("Error! Kripya baad me try karein.");
      }
    } catch (error) {
      alert("Internet connection check karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="footer-map-section">
        <iframe 
          title="Swad Sudha Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.483081137701!2d81.0015083752223!3d26.856388876680843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3472576e827%3A0x1a105384a8fc8b9e!2sSwad%20Sudha!5e0!3m2!1sen!2sin!4v1774193225456!5m2!1sen!2sin" 
          width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer className="site-footer style-1 bg-dark" id="footer">
        <div className="footer-top">
          <div className="container relative-z">
            <div className="footer-row">
              
              {/* --- Column 1: Contact Form Card --- */}
              {isFormVisible && (
                <div className="footer-col col-form-card">
                  <div className="dz-form-card bg-primary" style={{ position: 'relative' }}>
                    
                    <button 
                      onClick={() => setIsFormVisible(false)} className="close-form-btn"
                      style={{
                        position: 'absolute', top: '-15px', right: '-15px', backgroundColor: '#fff', color: '#7cb342', borderRadius: '50%',
                        width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '2px solid #7cb342', cursor: 'pointer', zIndex: 999, boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                      }}
                    >
                      <X size={20} strokeWidth={3} />
                    </button>

                    <div className="section-head">
                      <h4 className="title m-0">Contact us</h4>
                      <p className="m-t10">Aapka feedback hamare liye anmol hai. Kisi bhi sawal ya sujhaav ke liye humein likhein.</p>
                    </div>
                    
                    <form className="dzForm dezPlaceAni" onSubmit={handleSubmit}>
  <div className="row">
    
    {/* 1. NAME VALIDATION: Only letters & spaces, Min 3 chars */}
    <div className="col-12">
      <div className="input-group input-line">
        <input 
          required 
          type="text" 
          className="form-control" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          pattern="^[A-Za-z\s]{3,50}$"
          title="Name me sirf alphabets allow hain aur kam se kam 3 akshar hone chahiye."
        />
      </div>
    </div>
    
    {/* 2. EMAIL VALIDATION */}
    <div className="col-12">
      <div className="input-group input-line">
        <input 
          required 
          type="email" 
          className="form-control" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
      </div>
    </div>
    
    {/* 3. PHONE VALIDATION: Exactly 10 digits, starts with 6-9 */}
    <div className="col-12">
      <div className="input-group input-line">
        <input 
          required 
          type="tel" 
          className="form-control" 
          placeholder="Mobile No (10 digits)" 
          value={formData.phone} 
          onChange={(e) => {
            // Sirf numbers allow karega type karte waqt
            const val = e.target.value.replace(/\D/g, ''); 
            setFormData({...formData, phone: val})
          }} 
          pattern="^[6-9]\d{9}$"
          maxLength="10"
          title="Kripya sahi 10-digit mobile number enter karein."
        />
      </div>
    </div>
    
    {/* 4. MESSAGE VALIDATION: Min 10, Max 500 chars */}
    <div className="col-12">
      <div className="input-group input-line">
        <textarea 
          required 
          className="form-control" 
          placeholder="Message (Min 10 characters)" 
          rows="3" 
          value={formData.message} 
          onChange={(e) => setFormData({...formData, message: e.target.value})} 
          minLength="10"
          maxLength="500"
          title="Message kam se kam 10 characters lamba hona chahiye."
        ></textarea>
      </div>
    </div>

    {/* MATH CAPTCHA (Same as before) */}
    <div className="col-12 mb-3">
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexWrap: 'nowrap',
          backgroundColor: 'rgba(255,255,255,0.1)', 
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '8px 10px',
          borderRadius: '6px',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
          <ShieldCheck size={18} className="text-white" style={{ flexShrink: 0 }} />
          <span className="text-white fw-bold" style={{ fontSize: '14px' }}>
            {captcha.num1} + {captcha.num2} = ?
          </span>
          <button 
            type="button" 
            onClick={generateCaptcha} 
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }} 
            title="Change Captcha"
          >
            <RefreshCcw size={15} />
          </button>
        </div>
        <input
          type="number" 
          required 
          value={captchaInput} 
          onChange={(e) => setCaptchaInput(e.target.value)}
          style={{ width: '65px', flexShrink: 0, color: 'black', padding: '4px', textAlign: 'center', borderRadius: '4px', border: 'none', outline: 'none', fontWeight: 'bold' }} 
          placeholder="Ans"
        />
      </div>
    </div>

    {/* SUBMIT BUTTON */}
    <div className="col-12">
      <button type="submit" disabled={isSubmitting} className="btn btn-md btn-white btn-hover-1 w-100 flex justify-center items-center gap-2">
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        {isSubmitting && <Loader2 size={16} className="animate-spin text-[#7cb342]" />}
      </button>
    </div>
    
  </div>
</form>
                  </div>
                </div>
              )}

              {/* --- Column 2: Contact Info --- */}
              <div className="footer-col col-contact-info">
                <div className="widget widget_getintuch">
                  <h5 className="footer-title">Contact</h5>
                  <ul>
                    <li className="flex items-start gap-4 mb-6">
                      <MapPin size={28} strokeWidth={1.5} className="text-[#7cb342] shrink-0 mt-1" />
                      <p className="m-0 leading-relaxed text-[#cccccc]">1/881, Vinay Khand, Gomti Nagar, Lucknow, Uttar Pradesh</p>
                    </li>
                    <li className="flex items-start gap-4 mb-6">
                      <Phone size={28} strokeWidth={1.5} className="text-[#7cb342] shrink-0 mt-1" />
                      <p className="m-0 leading-relaxed text-[#cccccc]">+91 7007-948-170</p>
                    </li>
                    <li className="flex items-start gap-4 mb-6">
                      <Mail size={28} strokeWidth={1.5} className="text-[#7cb342] shrink-0 mt-1" />
                      <p className="m-0 leading-relaxed text-[#cccccc]">query@swadsudha.in<br />info@swadsudha.in</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* --- Column 3: Our Links --- */}
              <div className="footer-col col-links">
                <div className="widget widget_services">
                  <h5 className="footer-title">Our Links</h5>
                  <ul>
                    <li><a href="/"><span>Home</span></a></li>
                    <li><a href="/about-us"><span>About Us</span></a></li>
                    <li><a href="/services"><span>Services</span></a></li>
                    <li><a href="/team"><span>Team</span></a></li>
                    <li><a href="/blog-standard"><span>Blog</span></a></li>
                  </ul>
                </div>
              </div>

              {/* --- Column 4: Help Center --- */}
              <div className="footer-col col-links">
                <div className="widget widget_services">
                  <h5 className="footer-title">Help Center</h5>
                  <ul>
                    <li><a href="/faq"><span>FAQ</span></a></li>
                    <li><a href="/shop-style-1"><span>Shop</span></a></li>
                    <li><a href="/shop-style-2"><span>Category Filter</span></a></li>
                    <li><a href="/testimonial"><span>Testimonials</span></a></li>
                    <li><a href="/contact-us"><span>Contact Us</span></a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-row">
              <div className="footer-bottom-left text-md-start">
                <p>Copyright 2026 All rights reserved.</p>
              </div>
              <div className="footer-bottom-right text-md-end">
                <span className="copyright-text">Made with ❤️ In Lucknow</span>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;