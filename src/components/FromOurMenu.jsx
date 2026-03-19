import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './FromOurMenu.css';

const FromOurMenu = () => {
  const menuData = [
    { id: 1, name: 'Bread Pakauda', price: '₹50.00', img: './117.jpg' },
    { id: 2, name: 'Dal Fry', price: '₹50.00', img: './pic_11.jpg' },
    { id: 3, name: 'Matar Mashrom', price: '₹50.00', img: './102.jpg' },
    { id: 4, name: 'Besan Chilla', price: '₹50.00', img: './109.jpg' },
    { id: 5, name: 'Aalu Paratha', price: '₹50.00', img: './113.jpg' },
    { id: 6, name: 'Dal Makhani', price: '₹50.00', img: './122.jpg' },
  ];

  return (
    <section className="from-our-menu-section bg-white">
      <div className="container">
        
        <div className="section-head text-center">
          <h2 className="section-title">From Our Menu</h2>
        </div>

        {/* Relative wrapper jisme slider aur buttons dono hain */}
        <div className="fom-slider-wrapper">
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={'auto'} // CSS width control handle karega
            loop={true}
            navigation={{
              nextEl: '.btn-next-long',
              prevEl: '.btn-prev-long',
            }}
            className="portfolio-swiper"
          >
            {menuData.map((item) => (
              <SwiperSlide key={item.id} className="fom-slide">
                <div className="fom-card">
                  <img src={item.img} alt={item.name} className="fom-bg-img" />
                  <div className="fom-overlay"></div>
                  <span className="fom-tag">TOP SELLER</span>
                  
                  <div className="fom-hover-content">
                    <div className="fom-info">
                      <h5 className="fom-title">{item.name}</h5>
                      <span className="fom-price">{item.price}</span>
                    </div>
                    <button className="fom-cart-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left / Right floating Navigation Buttons (Fancier) */}
          <div className="img-button-prev btn-prev-long">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </div>
          <div className="img-button-next btn-next-long">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FromOurMenu;