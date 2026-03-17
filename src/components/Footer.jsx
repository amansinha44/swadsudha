import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* =========================================
          TOP: FULL WIDTH MAP SECTION
          ========================================= */}
      <div className="footer-map-section">
        <iframe 
          title="Swad Sudha Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914118!2d80.9461592150434!3d26.8467088831552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* =========================================
          BOTTOM: DARK FOOTER SECTION
          ========================================= */}
      <footer className="site-footer style-1 bg-dark" id="footer">
        
        {/* Background Decorative Images */}
       {/* <img className="cc-tamatar-bg-left dz-move" src="/tamatar.png" alt="Tomato Decor" />*/}

        <div className="footer-top">
          <div className="container relative-z">
            <div className="footer-row">
              
              {/* --- Column 1: Contact Form Card (OVERLAPPING THE MAP) --- */}
              <div className="footer-col col-form-card">
                <div className="dz-form-card bg-primary">
                  <div className="section-head">
                    <h4 className="title m-0">Contact us</h4>
                    <p className="m-t10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <form className="dzForm dezPlaceAni" onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group input-line">
                          <input name="dzName" required type="text" className="form-control" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group input-line">
                          <input name="dzEmail" required type="email" className="form-control" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group input-line">
                          <input name="dzOther[Subject]" required type="text" className="form-control" placeholder="Subject" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group input-line">
                          <textarea name="dzMessage" required className="form-control" placeholder="Message" rows="3"></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" name="submit" value="submit" className="btn btn-md btn-white btn-hover-1">
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* --- Column 2: Contact Info --- */}
              <div className="footer-col col-contact-info">
                <div className="widget widget_getintuch">
                  <h5 className="footer-title">Contact</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <p>1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</p>
                    </li>
                    <li>
                      <i className="fas fa-phone-alt"></i>
                      <p>+91 987-654-3210<br />+91 123-456-7890</p>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <p>info@example.com<br />info@example.com</p>
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

        {/* --- BOTTOM COPYRIGHT BAR --- */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-row">
              <div className="footer-bottom-left text-md-start">
                <p>Copyright 2024 All rights reserved.</p>
              </div>
              <div className="footer-bottom-right text-md-end">
                <span className="copyright-text">
                  Crafted With <span className="heart text-danger">❤️</span> by <a href="https://dexignzone.com/" target="_blank" rel="noreferrer">DexignZone</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;