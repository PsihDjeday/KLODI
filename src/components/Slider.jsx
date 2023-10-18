import { useState, useEffect } from 'react';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(${-currentSlide * 1760}px)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt="Slide" className="slider-image" />
          </div>
        ))}
      </div>
      <div className="slider-button left-button" onClick={prevSlide}>&#8249;</div>
      <div className="slider-button right-button" onClick={nextSlide}>&#8250;</div>
    </div>
  );
};

export default Slider;