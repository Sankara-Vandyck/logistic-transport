import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Header from '../components/Header';
import '../style/slide.css';

const HomePage = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
      header: 'Slide 1 Header',
      text: 'Slide 1 Description',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      header: 'Slide 2 Header',
      text: 'Slide 2 Description',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
      header: 'Slide 3 Header',
      text: 'Slide 3 Description',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      setTransitioning(true); // Start transition animation
      setTimeout(() => setTransitioning(false), 500); // Stop transition animation after 0.5 seconds
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setTransitioning(true); // Start transition animation
    setTimeout(() => setTransitioning(false), 500); // Stop transition animation after 0.5 seconds
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setTransitioning(true); // Start transition animation
    setTimeout(() => setTransitioning(false), 500); // Stop transition animation after 0.5 seconds
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setTransitioning(true); // Start transition animation
    setTimeout(() => setTransitioning(false), 500); // Stop transition animation after 0.5 seconds
  };

  return (
    <div>
      <Header />
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className={`w-full h-full rounded-2xl bg-full bg-cover duration-500 ${transitioning ? 'transition-slide-out' : ''}`}
        >
          <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
            <h2 className={`text-3xl font-semibold ${transitioning ? 'animate-slide-in-left' : ''}`}>{slides[currentIndex].header}</h2>
            <p className={`mt-2 ${transitioning ? 'animate-slide-in-right' : ''}`}>{slides[currentIndex].text}</p>
          </div>

        </div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-black' : 'text-white'}`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
