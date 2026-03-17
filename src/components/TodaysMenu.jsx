import React, { useState } from 'react';
import './TodaysMenu.css';

const TodaysMenu = () => {
  // Pehla card default active rahega
  const [activeCard, setActiveCard] = useState(1);

  const menuData = [
    {
      id: 1,
      name: 'Pasta',
      price: '$55.00',
      img: './pic_10.jpg',
    },
    {
      id: 2,
      name: 'Shake',
      price: '$50.00',
      img: './pic_11.jpg',
    },
    {
      id: 3,
      name: 'Dal Fry',
      price: '$45.00',
      img: './pic_12.jpg',
    },
    {
      id: 4,
      name: 'Pizza',
      price: '$35.00',
      img: './pic_13.jpg',
    }
  ];

  return (
    <section className="todays-menu-section">
        {/* 🔴 NAYI IMAGE YAHAN ADD HUI HAI */}
      <img src="/pic4.png" alt="Decoration" className="tm-bg2" />
      <h2 className="menu-heading">Today's Menu</h2>

      <div 
        className="tm-grid"
        onMouseLeave={() => setActiveCard(1)} // Container chhodne par wapas Card 1 active
      >
        {menuData.map((item) => (
          <div 
            key={item.id} 
            className={`tm-card ${activeCard === item.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(item.id)}
          >
            {/* Full Height Background Image */}
            <img src={item.img} alt={item.name} className="tm-bg-img" />

            {/* Dark Gradient Overlay (Hover par aayega) */}
            <div className="tm-overlay"></div>

            {/* Top Seller Tag (Hover par top se aayega) */}
            <span className="tm-tag">TOP SELLER</span>

            {/* Hover Content (Bottom se slide up hoga) */}
            <div className="tm-hover-content">
              
              {/* Left Side: Name & Price */}
              <div className="tm-info-left">
                <h5 className="tm-title">{item.name}</h5>
                <span className="tm-price">{item.price}</span>
              </div>

              {/* Right Side: Cart Button */}
              <button className="tm-cart-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </button>

            </div>
          </div>
        ))}
      </div>

      <button className="see-all-btn">See All Dishes</button>
    </section>
  );
};

export default TodaysMenu;