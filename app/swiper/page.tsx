"use client";
import React, { useEffect } from 'react';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';
import './swipe.css'; // Your custom CSS

const CustomSwiper: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      grabCursor: true,
      speed: 500,
      effect: 'slide',
      loop: true,
      mousewheel: {
        invert: false,
        sensitivity: 1,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section>
      {/* <img 
        className="hero" 
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c62efd51-f844-4335-ba29-70ea35521dd8" 
        alt="" 
      /> */}
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <h1 className="title one">Slide 1</h1>
            <img
              src="https://images.unsplash.com/photo-1589261769919-26a29b6eba1b"
              alt="Slide 1"
            />
          </div>
          <div className="swiper-slide">
            <h1 className="title two">Slide 2</h1>
            <img
              src="https://images.unsplash.com/photo-1497290756760-23ac55edf36f"
              alt="Slide 2"
            />
          </div>
          <div className="swiper-slide">
            <h1 className="title three">Slide 3</h1>
            <img
              src="https://images.unsplash.com/photo-1530891671629-3a053324e4f7"
              alt="Slide 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSwiper;
