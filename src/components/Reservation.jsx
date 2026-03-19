import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    people: '',
    date: '',
    time: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submission (Add your logic here later)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Request:", formData);
    alert("Thank you! Your request has been received.");
    // Clear form after submit if needed
  };

  return (
    <section 
      className="reservation-section" 
      style={{ backgroundImage: `url('./bk_8.png')` }}
    >
      <div className="res-overlay"></div> {/* Dark overlay for text readability */}
      
      <div className="container relative-z">
        <div className="section-head text-center">
          <h2 className="title" style={{ color: '#ffffff' }}>Order a Meal</h2>
        </div>

        <form className="res-form" onSubmit={handleSubmit}>
          <div className="res-row">
            
            {/* 1. Name */}
            <div className="res-col">
              <div className="input-line">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
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
              <div className="input-line">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
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

            {/* 3. Email */}
            <div className="res-col">
              <div className="input-line">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="form-control" 
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* 4. Number of People (Using a standard select for simplicity & stability) */}
            <div className="res-col">
              <div className="input-line">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
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
              <div className="input-line">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                {/* HTML5 Date input works very well natively */}
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
              <div className="input-line">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
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