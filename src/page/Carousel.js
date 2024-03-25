import React, { useState, useEffect } from 'react';
 // Import your CSS file

const Carousel = () => {
 const slides = [
    {
      image: '/src/assets/Shutterstock_2033407733.png', // Update with your image paths
      header: 'Slide 1 Header',
      text: 'Slide 1 Description',
    },
    {
      image: '/path/to/image2.jpg',
      header: 'Slide 2 Header',
      text: 'Slide 2 Description',
    },
    {
      image: '/path/to/image3.jpg',
      header: 'Slide 3 Header',
      text: 'Slide 3 Description',
    },
 ];

 const [currentIndex, setCurrentIndex] = useState(0);
 const [transitioning, setTransitioning] = useState(false);

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      setTransitioning(true);
      setTimeout(() => setTransitioning(false), 700);
    }, 7000);

    return () => clearInterval(interval);
 }, [slides.length]);

 const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 700);
 };

 const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 700);
 };

 return (
    <div >
      <div className='max-w-[1400px] h-[180px] w-full m-auto relative group bg-red'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full bg-full bg-cover duration-700 ${index === currentIndex ? 'active' : ''} ${transitioning ? 'transitioning' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-text">
              <h2>{slide.header}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>Prev</button>
      <button className="carousel-button next" onClick={nextSlide}>Next</button>
    </div>
 );
};

export default Carousel;
