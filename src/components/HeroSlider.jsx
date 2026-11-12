import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://www.bits-pilani.ac.in/wp-content/uploads/BITS_Website_Desktop_banner.png'
    },
    {
      image: 'https://www.bits-pilani.ac.in/wp-content/uploads/Convocation2026-banner-27-06-2026.png'
    },
    {
      image: 'https://www.bits-pilani.ac.in/wp-content/uploads/Axis-Bank-BITS-banner.png'
    },
    {
      image: 'https://www.bits-pilani.ac.in/wp-content/uploads/BITSAT-web-banner-new.png'
    },
    {
      image: 'https://www.bits-pilani.ac.in/wp-content/uploads/Beware-of-fraud.png'
    },
    {
      image: 'https://www.bits-pilani.ac.in/wp-content/uploads/Ranking-website-banner-2026.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="hero_slider_container" style={{ height: '480px' }}>
      {slides.map((slide, idx) => (
        <div key={idx} className={`slide ${idx === currentSlide ? 'active' : ''}`}>
          <div 
            className="slide_bg" 
            style={{ 
              backgroundImage: `url(${slide.image})`, 
              filter: 'none', // Remove darkness so actual banners show clearly!
              backgroundSize: '100% 100%', // Stretch to fit the slider height exactly like real banners
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="slider_arrows">
        <button className="slider_arrow" onClick={prevSlide} aria-label="Previous Slide">
          <FaAngleLeft />
        </button>
        <button className="slider_arrow" onClick={nextSlide} aria-label="Next Slide">
          <FaAngleRight />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="slider_dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider_dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
