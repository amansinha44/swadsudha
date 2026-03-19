import React, { useState, useEffect } from 'react';
import './TodaysMenu.css';

const TodaysMenu = () => {
  // Pehla card default active rahega
  const [activeCard, setActiveCard] = useState(1);
  const [menuData, setMenuData] = useState([]);

  // Master Data: Poore hafte ka menu yahan define karenge
  const weeklyMenu = {
    Monday: [
      { id: 1, name: 'Poha', price: '₹50.00', img: './101.jpg' },
      { id: 2, name: 'Mushroom Matar', price: '₹50.00', img: './102.jpg' },
      { id: 3, name: 'One Gravy Veg', price: '₹50.00', img: './103.jpg' },
      { id: 4, name: 'One Dry Veg', price: '₹50.00', img: './104.jpg' }
    ],
    Tuesday: [
      { id: 1, name: 'Sandwich', price: '₹50.00', img: './105.jpg' },
      { id: 2, name: 'Arhar Dal Fry', price: '₹50.00', img: './106.jpg' },
      { id: 3, name: 'Dry Sabzi', price: '₹50.00', img: './107.jpg' },
      { id: 4, name: 'Lauki Kofta', price: '₹50.00', img: './108.jpg' }
    ],
    Wednesday: [
      { id: 1, name: 'Suji/Besan Chilla', price: '₹50.00', img: './109.jpg' },
      { id: 2, name: 'Special Rajma', price: '₹50.00', img: './110.jpg' },
      { id: 3, name: ' Steamed Rice', price: '₹50.00', img: './111.jpg' },
      { id: 4, name: 'Dum Aloo', price: '₹50.00', img: './112.jpg' }
    ],
    Thursday: [
      { id: 1, name: 'Aloo Paratha', price: '₹50.00', img: '/113.jpg' },
      { id: 2, name: 'Kadhi Tadka', price: '₹50.00', img: '/114.jpg' },
      { id: 3, name: 'Dry Veg', price: '₹50.00', img: '/115.jpg' },
      { id: 4, name: 'Chana Dal', price: '₹50.00', img: '/116.jpg' }
    ],
    Friday: [
      { id: 1, name: 'Bread Pakora', price: '₹50.00', img: './117.jpg' },
      { id: 2, name: 'Chole Bhatur', price: '₹50.00', img: './118.jpg' },
      { id: 3, name: 'Shahi Pulao', price: '₹50.00', img: './119.jpg' },
      { id: 4, name: 'Mix Paratha', price: '₹50.00', img: './120.jpg' }
],
    Saturday: [
      { id: 1, name: 'Puri + Special Sabzi', price: '₹50.00', img: './121.jpg' },
      { id: 2, name: 'Dal Makhni', price: '₹50.00', img: './122.jpg' },
      { id: 3, name: 'Dry Veg', price: '₹50.00', img: './123.jpg' },
      { id: 4, name: 'Soyabean Gravy Veg', price: '₹50.00', img: './124.jpg' }
],
    Sunday: [ 
      { id: 1, name: 'Paneer Paratha', price: '₹50.00', img: './125.jpg' },
      { id: 2, name: 'Khoya/Matar Paneer', price: '₹50.00', img: './126.jpg' },
      { id: 3, name: 'Aloo Matar', price: '₹50.00', img: './127.jpg' },
      { id: 4, name: 'Gravy Veg', price: '₹50.00', img: './128.jpg' }
 ]
  };

  useEffect(() => {
    // Ye function aaj ka din pata karega
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const currentDayName = daysOfWeek[today.getDay()]; // getDay() returns 0 for Sunday, 1 for Monday etc.

    // Aaj ke din ke hisaab se data set karega
    // Agar kisi din ka data missing hai toh default Monday ka dikha dega
    setMenuData(weeklyMenu[currentDayName] || weeklyMenu['Monday']);
  }, []);

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
