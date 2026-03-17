import React from 'react';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Pizza',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      price: '$55.00',
      img: './pic_16.jpg'
    },
    {
      id: 2,
      name: 'Rice',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      price: '$50.00',
      img: './pic_17.jpg'
    },
    {
      id: 3,
      name: 'Green Salad',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      price: '$45.00',
      img: './pic_18.jpg'
    },
    {
      id: 4,
      name: 'Pasta',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
      price: '$35.00',
      img: './pic_19.jpg'
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

      <h2 className="section-title">Special Menu</h2>
      
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