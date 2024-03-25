import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from'../assets/images/image-1.jpg';
import image2 from'../assets/images/image-2.jpg';
import image3 from'../assets/images/image-3.jpg';

const ImageSlide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderImages = [
       { url: image1 },
       { url: image2 },
       { url: image3 },
    ];
   
    const nextSlide = () => {
       setCurrentSlide((currentSlide + 1) % sliderImages.length);
    };
   
    const prevSlide = () => {
       setCurrentSlide((currentSlide - 1 + sliderImages.length) % sliderImages.length);
    };
  return (
    <div>
    <SimpleImageSlider
      width={500}
      height={250}
      images={sliderImages}
      showNavs={false}
      autoPlay={true}
      autoPlayDelay={3}
    />
    <div className="slider-controls">
      <ArrowBackIosIcon onClick={prevSlide} />
      <ArrowForwardIosIcon onClick={nextSlide} />
    </div>
  </div>
  )
}

export default ImageSlide