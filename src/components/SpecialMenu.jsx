import React from 'react';
import { Link } from 'react-router-dom'; // 🔴 Menu link ke liye import kiya
import './SpecialMenu.css';

const SpecialMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Mushroom Matar',
      desc: 'Tender Mushrooms and Matar cooked with spicy, tangy tomato-onion gravy.',
      price: '₹50.00',
      img: './s50_1.png'
    },
    {
      id: 2,
      name: 'Rajma Masala',
      desc: 'Swadist masalon aur makkhan ke saath bilkul lajawab banaya gya hai.',
      price: '₹50.00',
      img: './s50_2.png'
    },
    {
      id: 3,
      name: 'Special Chole',
      desc: 'Onion-tomato masala aur special spices mein paka huye Special Chole.',
      price: '₹50.00',
      img: './s50_3.png'
    },
    {
      id: 4,
      name: 'Matar Paneer',
      desc: 'Taza matar aur soft paneer ko rich onion-tomato gravy mein aromatic spices ke saath bna.',
      price: '₹50.00',
      img: './s50_4.png'
    },
   
    {
      id: 5,
      name: 'Arhar Dal Fry',
      desc: 'Dal tadka is cooked lentils which are tempered with desi ghee, fried spices & herbs.',
      price: '₹50.00',
      img: './106.jpg'
    },
    {
      id: 6,
      name: 'Dal Makhani',
      desc: 'Makkhan aur cream ke saath raat bhar dheemi aanch par pakai gayi kaali dal.',
      price: '₹50.00',
      img: './122.jpg'
    },
    {
      id: 7,
      name: 'Kadhi Tadka',
      desc: 'Deep fried Pakora dunked in sour curd and besan curry tempered with whole spices.',
      price: '₹50.00',
      img: './s50_5.png'
    }
  ];

  return (
    <section className="special-menu-section">
      
      {/* Background Decorative Images (Veg Focus) */}
      <img 
        src="./tamatar.png" 
        alt="Veg Decor" 
        className="decor-img decor-left" 
      />
      <img 
        src="./cabbage.png" 
        alt="Leaves Decor" 
        className="decor-img decor-right" 
      />

      <h2 className="section-title">The ₹ 50: Super Combo Lunch</h2>
      
      <div className="menu-container">
        
        {/* 🔴 Pehle 7 regular cards map honge */}
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            
            <div className="card-top-curve"></div>

            <div className="image-wrapper">
              <img src={item.img} alt={item.name} className="food-image" />
            </div>

            <div className="card-content">
              <h3 className="food-name">{item.name}</h3>
              <p className="food-desc">{item.desc}</p>
              <h4 className="food-price">{item.price}</h4>
              
              <button className="add-cart-btn">
                <span className="btn-text-main">With Rice or 3 Roti</span>
                <span className="btn-text-hover">With Rice or 3 Roti</span>
              </button>
            </div>
            
          </div>
        ))}

        {/* 🔴 8th Card: Craving for More (Menu Link) */}
        <div 
          className="menu-card" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: '#f8fbef', // Halka green background
            border: '2px dashed #7cb342', // Dashed border attention ke liye
            boxShadow: 'none'
          }}
        >
          <div className="card-content" style={{ marginTop: '0', textAlign: 'center' }}>
            {/* Ek chota sa decorative icon/emoji */}
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>< img src='/craving.png' /></div>
            
            <h3 className="food-name" style={{ color: '#568a35', fontSize: '1.5rem', marginBottom: '10px' }}>
              Craving for more?
            </h3>
            
            <p className="food-desc" style={{ marginBottom: '25px', padding: '0 10px' }}>
              We have a lot more delicious meals waiting for you. Explore our complete daily menu!
            </p>
            
            {/* React Router Link as Button */}
            <Link to="/menu" className="add-cart-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <span className="btn-text-main">View Full Menu</span>
              <span className="btn-text-hover">Explore Now</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialMenu;