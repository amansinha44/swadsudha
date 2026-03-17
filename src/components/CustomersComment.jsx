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

  const testimonials = [
    { id: 1, name: 'John Doe', position: 'Food Expert', text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", img: './per_1.jpg' },
    { id: 2, name: 'Jolly Roy', position: 'Food Tester', text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.", img: './per_2.jpg' },
    { id: 3, name: 'Thomas Hed', position: 'Food Critic', text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.", img: './per_3.jpg' },
    { id: 4, name: 'Kally Mint', position: 'Chef', text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. Richard McClintock, a Latin professor.", img: './per_4.jpg' },
    { id: 5, name: 'Michael Scott', position: 'Food Expert', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", img: './per_5.jpg' },
    { id: 6, name: 'Pam Beesly', position: 'Food Expert', text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", img: './per_6.jpg' }
  ];

  return (
    <section className="customers-comment-section">
      <img className="cc-tamatar-bg" src="./tamatar.png" alt="Tomato Decor" />
<div className="cc-container">
        <div className="section-head text-center">
          <h2 className="title">Customer's Comment</h2>
        </div>

        <div className="cc-row">
          
          {/* LEFT SIDE: Thumbnails (Images) */}
          <div className="cc-col-left">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={3}
              grid={{ rows: 2, fill: 'row' }} 
              watchSlidesProgress={true}
              modules={[Grid, FreeMode, Thumbs]}
              className="testimonial-thumb-slider"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="thumb-slide">
                  <img src={item.img || `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&random=${item.id}`} alt={item.name} />
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
                      <p>{item.text}</p>
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