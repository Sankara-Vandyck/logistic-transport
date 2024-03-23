import React, { useState, useEffect } from 'react';
import '../style/slide.css'
import Header from '../components/Header';


const HomePage = () => {
   const images = [
    "../assets/images/image-1.jpg",
    "../assets/images/image-2.jpg",
    "../assets/images/image-3.jpg"
   ]

   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleArrowClick = direction => {
    if (direction === 'prev') {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }
  };
  
    return (
        <div>
            <Header />
            <div
      className="background-slider"
      style={{
        backgroundImage: `url('${images[currentIndex]}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'full',
        height: '100vh',
        transition: 'background-image 0.3s ease',
      }}
    >
      <button onClick={() => handleArrowClick('prev')}>Previous</button>
      <button onClick={() => handleArrowClick('next')}>Next</button>
      {/* Your content goes here */}
    </div>
      
      </div>
  )
}

export default HomePage