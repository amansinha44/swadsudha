import React from 'react';
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
      desc: 'Taza matar aur soft paneer ko rich onion-tomato gravy mein aromatic spices ke saath bna',
      price: '₹50.00',
      img: './s50_4.png'
    }
  ];

  return (
    <section className="special-menu-section">
      
      {/* Background Decorative Images (Veg Focus) */}
      <img 
        src="./tamatar.png" 
        alt="Veg Burger Decor" 
        className="decor-img decor-left" 
      />
      <img 
        src="./cabbage.png" 
        alt="Leaves Decor" 
        className="decor-img decor-right" 
      />

      <h2 className="section-title">The ₹ 50: Super Lunch</h2>
      
      <div className="menu-container">
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
                <span className="btn-text-main">Add To Cart</span>
                <span className="btn-text-hover">Add To Cart</span>
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialMenu;