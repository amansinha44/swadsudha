import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, FreeMode, Thumbs, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

import './CustomersComment.css';

const CustomersComment = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // 🔴 MAINE AUTHENTIC INDIAN PHOTOS KE LINKS UPDATE KAR DIYE HAIN (2F, 4M)
  const testimonials = [
    { 
      id: 1, 
      name: 'Neha Sharma', 
      position: 'IT Professional', 
      text: "Bahar ka khana kha ke health kharab ho rahi thi. Inki tiffin service is a lifesaver! Ekdum ghar jaisa taste, kam tel aur hygiene dono perfect hain. Highly recommended!", 
      // Authentic Indian Female Portrait 1
      img: './per_1.jpg' 
    },
    { 
      id: 2, 
      name: 'Rahul Verma', 
      position: 'Bank Manager', 
      text: "Swad Sudha ki sabse achhi baat unki consistency hai. Roz garm aur fresh khana exact time pe milta hai. Inki Dal Tadka is just wow, bilkul maa ke hath jaisi!", 
      // Authentic Indian Male Portrait 1
      img: './per_2.jpg' 
    },
    { 
      id: 3, 
      name: 'Vikram Singh', 
      position: 'Student', 
      text: "Hostel ke khane se pareshan tha, phir doston ne ye tiffin try karne ko bola. Portion size is great for the price, aur packaging bahut hi neat hoti hai.", 
      // Authentic Indian Male Portrait 2
      img: './per_5.jpg' 
    },
    { 
      id: 4, 
      name: 'Priya Desai', 
      position: 'Teacher', 
      text: "I love how they maintain the quality daily. Ekdum healthy, less spice aur super tasty. Unka weekend special paneer is something my whole family waits for.", 
      // Authentic Indian Female Portrait 2
      img: './per_4.jpg' 
    },
    { 
      id: 5, 
      name: 'Amit Patel', 
      position: ' Businessman', 
      text: "Office mein roz bahar ka lunch order karna mehnga aur unhealthy tha. Since I started this tiffin, my digestion has improved. Authentic taste, amazing quality.", 
      // Authentic Indian Male Portrait 3
      img: './per_3.jpg' 
    },
    { 
      id: 6, 
      name: 'Rohan Gupta', 
      position: 'Graphic Designer', 
      text: "Late night shifts ke baad agle din healthy aur garma-garam khana mil jana is a blessing. Rotiyan hamesha soft rehti hain aur sabzi me oil bilkul limit me hota hai.", 
      // Authentic Indian Male Portrait 4
      img: './per_6.jpg' 
    }
  ];

  return (
    <section className="customers-comment-section">
      {/* 🔴 decorative timaatar image -- make sure it's in your public/assets/ folder */}
      <img className="cc-tamatar-bg" src="./assets/tamatar.png" alt="Tomato Decor" />
      <div className="cc-container">
        <div className="section-head text-center">
          <h2 className="title">Customer's Comment</h2>
        </div>

        <div className="cc-row">
          
          {/* LEFT SIDE: Thumbnails (Images) */}
          <div className="cc-col-left">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={0}
              slidesPerView={3}
              grid={{ rows: 2, fill: 'row' }} 
              watchSlidesProgress={true}
              modules={[Grid, FreeMode, Thumbs]}
              className="testimonial-thumb-slider"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="thumb-slide">
                  <img src={item.img} alt={item.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT SIDE: Text Content (Green Box) */}
          <div className="cc-col-right">
            <Swiper
              effect={'fade'}
              fadeEffect={{ crossFade: true }}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[EffectFade, Thumbs]}
              className="testimonial-text-slider"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={`text-${item.id}`}>
                  <div className="testimonial-box">
                    
                    <div className="testimonial-text">
                      <p>"{item.text}"</p>
                    </div>
                    
                    <div className="testimonial-info">
                      <h5 className="testimonial-name">{item.name}</h5>
                      <span className="testimonial-position">{item.position}</span>
                    </div>
                    
                    {/* SVG QUOTE MARK */}
                    <svg className="cc-quote-svg" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                    </svg>
                    
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomersComment;