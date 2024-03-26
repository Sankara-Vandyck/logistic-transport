import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import Header from '../components/Header';
import MyVideoComponent from '../components/MyVideoComponent'
import '../style/slide.css';
import image1 from '../assets/images/image-1.png';
import image2 from '../assets/images/image-2.png';
import image3 from '../assets/images/image-3.png';

const HomePage = () => {
  const slides = [
    {
      url: image1,
      header: 'Air Freight That Saves Your Time!',
      paragraph: 'Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity',
      text: 'Slide 1'
    },
    {
      url: image2,
      header: 'Innovative Sea Transportation',
      paragraph: 'Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity',
      text: 'Slide 7'
    },
    {
      url: image3,
      header: 'Direction That Matters!',
      paragraph: 'Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity',
      text: 'Slide 10'
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 700);
  };

  return (
    <>
      <div className='max-w-[1400px] h-[780px] w-full m-auto relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className={`w-full h-full bg-full bg-cover duration-700 ${transitioning ? 'transition-slide-in' : ''} animate-stretchOut`}
        >
          <Header headerText={slides[currentIndex].header} />
          <div className=' flex flex-col justify-center items-center text-white'>
            <h2 className={`text-3xl font-semibold ${transitioning ? 'animate-slide-in-left' : ''} bg-opacity-50 p-2 rounded-md`}>{slides[currentIndex].header}</h2>
            <p className={`mt-2 ${transitioning ? 'animate-slide-in-left' : ''} bg-opacity-50 p-2 rounded-md`}>{slides[currentIndex].paragraph}</p>
          </div>
        </div>
        <MyVideoComponent />

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex justify-center'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'bg-black' : 'text-red'} p-2 rounded-sm`}
            >
              <div className='w-[400px] h-[200px]'>
                <p>{slide.text}</p> 
              </div>
            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default HomePage;
