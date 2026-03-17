import React, { useState } from 'react';
import './QualityServices.css';

const QualityServices = () => {
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      id: 1,
      title: 'Restaurant',
      desc: 'Lorem ipsum dolor sit amet, dipiscing elit, sed',
      bgImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60',
      icon: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
          <path d="M7 2v20"></path>
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Bar',
      desc: 'Lorem ipsum dolor sit amet, dipiscing elit, sed',
      bgImg: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60',
      icon: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 22h8"></path>
          <path d="M12 11v11"></path>
          <path d="m19 3-7 8-7-8Z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Cafe',
      desc: 'Lorem ipsum dolor sit amet, dipiscing elit, sed',
      bgImg: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&auto=format&fit=crop&q=60',
      icon: (
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
      desc: 'Lorem ipsum dolor sit amet, dipiscing elit, sed',
      bgImg: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60',
      icon: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4-2 2 1 2 1"></path>
          <path d="M2 21h20"></path>
          <path d="M7 8v3"></path>
          <path d="M12 8v3"></path>
          <path d="M17 8v3"></path>
          <path d="M7 4h.01"></path>
          <path d="M12 4h.01"></path>
          <path d="M17 4h.01"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="quality-services-section">
      
      {/* 🔴 Background Split (Half tak aayega) */}
      <div className="qs-half-bg"></div>

      {/* 🔴 Left Side Decorative Image */}
      <img 
        src="./seed.png" 
        alt="Left Decor" 
        className="qs-left-decor" 
      />

      <div className="container relative-z">
        <div className="section-head text-center">
          <h2 className="section-title">Quality Services</h2>
        </div>

        {/* Naya Grid Structure for exactly 250px cards */}
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