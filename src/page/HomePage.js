import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Transition } from '@headlessui/react';

import Header from "../components/Header";

import "../style/slide.css";
import "../style/VideoPlayer.css";
// import "../style/mission.css"
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import imageSrc from "../assets/images/image-9.png"

import VideoPlayerParent from "../components/VideoPlayerParent";
import SecondVideoParent from "../components/SecondVideoParent";

const HomePage = () => {
  const slides = [
    {
      url: image1,
      header: "Air Freight That Saves Your Time!",
      paragraph:
        "Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity",
      text: "Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity",
    },
    {
      url: image2,
      header: "Innovative Sea Transportation",
      paragraph:
        "Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity",
      text: "Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity",
    },
    {
      url: image3,
      header: "Direction That Matters!",
      paragraph:
        "Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity",
      text: "Provide flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity",
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
  }, [
    currentIndex,
    slides.length,
    controls,
    slideInLeftControls,
    slideInRightControls,
  ]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };



  const [selectedOption, setSelectedOption] = useState('mission');

  const toggleOption = (option) => {
    setSelectedOption(option);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <button
 className="fixed bottom-4 right-4 z-50 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full focus:outline-none"
 onClick={scrollToTop}
>
 <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
 >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
 </svg>
</button>

      <div className="max-w-[1400px] h-[1080px] w-full m-auto relative group">
        <motion.div
          animate={controls}
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-cover duration-500"
        >
          <Header headerText={slides[currentIndex].header} />
          <div className="flex flex-col justify-center items-center bg-transparent top-[250px] relative text-white">
            <motion.h2
              animate={slideInLeftControls}
              initial={{ x: -100, opacity: 0 }}
              className="text-5xl font-semibold bg-opacity-50 bg-black p-2 rounded-md text-center w-[735px]"
            >
              {slides[currentIndex].header}
            </motion.h2>
            <motion.p
              animate={slideInRightControls}
              initial={{ x: 100, opacity: 0 }}
              className="mt-2 bg-opacity-50 bg-black p-2 rounded-md text-2xl text-center w-[720px]"
            >
              {slides[currentIndex].paragraph}
            </motion.p>
          </div>
        </motion.div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div>
          <VideoPlayerParent />
        </div>

        <div className="flex justify-center relative top-[-265px] text-white bg-black bg-opacity-50 ml-11 w-[1250px]">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? "bg-orange-600" : ""
                } p-2 rounded-sm`}
            >
              <div className="w-[400px] h-[200px]">
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <>
        <div className="flex mt-40 ml-20 mr-20">
          <div>
            <div>
              <h1 className="text-4xl font-extrabold">
                Safe, Reliable And Express Logistic & Transport Solutions That
                Saves Your Time!
              </h1>
            </div>
            <div className="flex justify-between mt-[45px] w-[750px] space-x-20 ">
              <div className="flex justify-center w-screen">
                <div className="w-100 p-6 bg-gray-200 rounded-lg">
                  <div className="flex justify-between mb-4">
                    <button
                      className={`px-4 py-2 focus:outline-none ${selectedOption === 'mission' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                      onClick={() => toggleOption('mission')}
                    >
                      Mission
                    </button>
                    <button
                      className={`px-4 py-2 focus:outline-none ${selectedOption === 'vision' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                      onClick={() => toggleOption('vision')}
                    >
                      Vision
                    </button>
                  </div>
                  <Transition
                    show={selectedOption === 'mission'}
                    enter="transition-transform duration-500 ease-out"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition-transform duration-500 ease-in"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <h1 className="flex justify-center text-center text-2xl font-extrabold ">Our Mission</h1>
                    <p className="flex text-center">Utilising latest communications, tracking processing software, and decades of experience</p>
                  </Transition>
                  <Transition
                    show={selectedOption === 'vision'}
                    enter="transition-transform duration-500 ease-out"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition-transform duration-500 ease-in"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <h1 className="flex justify-center text-center text-2xl font-extrabold ">Our Vision</h1>
                    <p className="flex  text-center">The best possible service in the sphere of optimized route of cargo & transportation worldwide</p>
                  </Transition>
                </div>
              </div>
              <div className="space-y-10 ">
                <div>
                  <h2>
                    Logisti Group is a representative logistics operator
                    providing full range of service in the sphere of customs
                    clearance and transportation worldwide for any type of
                    cargo.
                  </h2>
                </div>

                <div>
                  <h2>
                    We pride ourselves on providing the best transport and
                    shipping services available allover the world. Our skilled
                    personnel, utilising the latest communications, tracking and
                    processing software, combined with decades of experience!
                    Through integrated supply chain solutions, Logisti drives
                    sustainable competitive advantages to some of Australia’s
                    largest companies.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className=" bg-gray-900 flex justify-center items-center">
              <div className="relative">
                <img src={imageSrc} alt="ImageSrc" className="w-full h-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div>
          <div>
            <SecondVideoParent />
          </div>
          
          {/* <h3>
            We pride ourselves on providing the best transport and shipping
            services available allover the world. Our skilled personnel,
            utilising the latest communications, tracking and processing
            software, combined with decades of experience! Through integrated
            supply chain solutions, Logisti drives sustainable competitive
            advantages to some of Australia’s largest companies.
          </h3> */}
        </div>
      </>
    </>
  );
};
export default HomePage;
