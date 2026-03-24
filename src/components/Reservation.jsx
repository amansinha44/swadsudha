import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    mealType: '', 
    people: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Indian Time Validation Logic (IST)
    const now = new Date();
    const currentHour = now.getHours();
    const { mealType } = formData;

    if (mealType === 'Breakfast' && currentHour >= 8) {
      alert("Maaf kijiye! Breakfast ka order subah 8:00 AM se pehle hi liya jata hai.");
      return;
    }
    if (mealType === 'Lunch' && currentHour >= 14) {
      alert("Maaf kijiye! Lunch ka order dopahar 2:00 PM se pehle hi liya jata hai.");
      return;
    }
    if (mealType === 'Dinner' && currentHour >= 20) {
      alert("Maaf kijiye! Dinner ka order raat 8:00 PM se pehle hi liya jata hai.");
      return;
    }

    console.log("Order Details:", formData);
    alert(`Shukriya! Aapka ${mealType} order mil gaya hai.`);
  };

  return (
    <section className="reservation-section" style={{ backgroundImage: `url('./bk_8.png')` }}>
      <div className="res-overlay"></div>
      
      <div className="container relative-z">
        <div className="section-head text-center">
          <h2 className="title" style={{ color: '#ffffff' }}>Order a Meal</h2>
          <p style={{ color: '#ddd', marginBottom: '20px' }}>
            Breakfast (Before 8 AM) | Lunch (Before 2 PM) | Dinner (Before 8 PM)
          </p>
        </div>

        <form className="res-form" onSubmit={handleSubmit}>
          <div className="res-row">
            
            {/* 1. Name */}
            <div className="res-col">
              <div className="input-line single-border">
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="form-control" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* 2. Phone */}
            <div className="res-col">
              <div className="input-line single-border">
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="form-control" 
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* 3. Meal Type (New Field) */}
            <div className="res-col">
              <div className="input-line single-border">
                <select 
                  name="mealType" 
                  required 
                  className="form-control custom-select"
                  value={formData.mealType}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>Select Meal Type</option>
                  <option value="Breakfast">Breakfast (Before 8AM)</option>
                  <option value="Lunch">Lunch (Before 2PM)</option>
                  <option value="Dinner">Dinner (Before 8PM)</option>
                </select>
              </div>
            </div>

            {/* 4. Number of People */}
            <div className="res-col">
              <div className="input-line single-border">
                <select 
                  name="people" 
                  required 
                  className="form-control custom-select"
                  value={formData.people}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>Number Of People</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People</option>
                </select>
              </div>
            </div>

            {/* 5. Date */}
            <div className="res-col">
              <div className="input-line single-border">
                <input 
                  type="text" 
                  name="date" 
                  required 
                  className="form-control" 
                  placeholder="Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.value === "" ? e.target.type = "text" : e.target.type = "date")}
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* 6. Time */}
            <div className="res-col">
              <div className="input-line single-border">
                <input 
                  type="text" 
                  name="time" 
                  required 
                  className="form-control" 
                  placeholder="Time"
                  onFocus={(e) => (e.target.type = "time")}
                  onBlur={(e) => (e.target.value === "" ? e.target.type = "text" : e.target.type = "time")}
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="res-submit-col">
              <button type="submit" className="btn-book-table">
                <span>Order Meal</span>
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;