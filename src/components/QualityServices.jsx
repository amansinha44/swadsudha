import React, { useState } from 'react';
import './QualityServices.css';

const QualityServices = () => {
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      id: 1,
      title: 'Free Delivery',
      desc: 'Taste comes free of cost to you',
      bgImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=100',
      icon: (
        // Delivery Truck Icon
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Hygiene',
      desc: 'We maintain 100% Hygiene. Purity is our gold standard.',
      bgImg: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=100',
      icon: (
        // Shield with Checkmark Icon (Represents Safety & Hygiene)
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Cafe',
      desc: 'Occasionally we provide you home made drinks',
      bgImg: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&auto=format&fit=crop&q=100',
      icon: (
        // Hot Coffee Cup Icon
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
          <line x1="6" y1="2" x2="6" y2="4"></line>
          <line x1="10" y1="2" x2="10" y2="4"></line>
          <line x1="14" y1="2" x2="14" y2="4"></line>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Dessert',
      desc: 'You will get Mouth Watering Sweet Dish',
      bgImg: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=100',
      icon: (
        // Cupcake Icon
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 12h15l-1.5 9h-12Z"></path>
          <path d="M4.5 12a7.5 7.5 0 0 1 15 0"></path>
          <circle cx="12" cy="3" r="1.5"></circle>
        </svg>
      )
    }
  ];

  return (
    <section className="quality-services-section">
      
      {/* Background Split (Half tak aayega) */}
      <div className="qs-half-bg"></div>

      {/* Left Side Decorative Image */}
      <img 
        src="./seed.png" 
        alt="Left Decor" 
        className="qs-left-decor" 
      />

      <div className="container relative-z">
        <div className="section-head text-center">
          <h2 className="section-title">Quality Services</h2>
        </div>

        {/* Grid Structure */}
        <div className="qs-grid">
          {services.map((item) => (
            <div 
              key={item.id} 
              className={`icon-bx-wraper style-1 box-hover center ${activeService === item.id ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.bgImg})` }}
              onMouseEnter={() => setActiveService(item.id)}
            >
              <div className="inner-content">
                <div className="icon-bx m-b25">
                  <span className="icon-cell icon-md">
                    {item.icon}
                  </span>
                </div>
                <div className="icon-content">
                  <h5 className="dz-title">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityServices;