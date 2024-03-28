import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Header from '../components/Header';
// import '../style/slide.css';
import image1 from '../assets/images/image-1.png';
import image2 from '../assets/images/image-2.png';
import image3 from '../assets/images/image-3.png';

const HomePage = () => {
  const slides = [
    {
      url: image1,
      header: 'Air Freight That Saves Your Time!',
      paragraph: 'Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity',
      text: 'Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity'
    },
    {
      url: image2,
      header: 'Innovative Sea Transportation',
      paragraph: 'Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity',
      text: 'Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity'
    },
    {
      url: image3,
      header: 'Direction That Matters!',
      paragraph: 'Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity',
      text: 'Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const slideInLeftControls = useAnimation();
  const slideInRightControls = useAnimation();

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % slides.length;

    controls.start({
      scale: 1,
      opacity: 1,
      transition: { duration: 1 },
    });

    slideInLeftControls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    });

    slideInRightControls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    });

    const interval = setInterval(() => {
      setCurrentIndex(nextIndex);
      controls.start({
        scale: 1.1,
        opacity: 0,
        transition: { duration: 1 },
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length, controls, slideInLeftControls, slideInRightControls]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className='max-w-[1400px] h-[1080px] w-full m-auto relative group'>
        <motion.div
          animate={controls}
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-cover duration-500"
        >
          <Header headerText={slides[currentIndex].header} />
          <div className='flex flex-col justify-center items-center top-[250px] relative text-white'>
            <motion.h2
              animate={slideInLeftControls}
              initial={{ x: -100, opacity: 0 }}
              className='text-5xl font-semibold bg-opacity-50 p-2 rounded-md text-center w-[735px]'
            >
              {slides[currentIndex].header}
            </motion.h2>
            <motion.p
              animate={slideInRightControls}
              initial={{ x: 100, opacity: 0 }}
              className='mt-2 bg-opacity-50 p-2 rounded-md text-2xl text-center w-[720px]'
            >
              {slides[currentIndex].paragraph}
            </motion.p>
          </div>
        </motion.div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex justify-center mt-[-220px] text-white bg-black bg-opacity-50 ml-11 w-[1250px]'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'bg-orange-600' : ''} p-2 rounded-sm`}
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
