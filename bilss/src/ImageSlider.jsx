import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Ensure to create a CSS file for styles

const ImageSlider = () => {
  const images = [
    'src/assets/img/weddingpic5.jpg',
    'src/assets/img/weddingpic4.jpg',
    'src/assets/img/weddingpic3.jpg',
    'src/assets/img/weddingpic2.jpg',
    'src/assets/img/weddingpic1.jpg',
  ];

  // Initialize the current index state to start each slider with different images
  const [currentIndex, setCurrentIndex] = useState([0, 1, 2, 3, 4]);

  // Auto slide every 3 seconds for each slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex.map((index) => (index + 1) % images.length)
      );
    }, 1500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to go to the next image for a specific slider
  const nextSlide = (sliderIndex) => {
    setCurrentIndex((prevIndex) => {
      const updatedIndex = [...prevIndex];
      updatedIndex[sliderIndex] = (updatedIndex[sliderIndex] + 1) % images.length;
      return updatedIndex;
    });
  };

  // Function to go to the previous image for a specific slider
  const prevSlide = (sliderIndex) => {
    setCurrentIndex((prevIndex) => {
      const updatedIndex = [...prevIndex];
      updatedIndex[sliderIndex] = (updatedIndex[sliderIndex] - 1 + images.length) % images.length;
      return updatedIndex;
    });
  };

  return (
    <div className="gridimg">
      {/* Slider 1 */}
      <div className="slider">
        <img src={images[currentIndex[0]]} alt={`Slide ${currentIndex[0] + 1}`} />
      </div>

      {/* Slider 2 */}
      <div className="slider1">
        <img src={images[currentIndex[1]]} alt={`Slide ${currentIndex[1] + 1}`} />
      </div>

      {/* Slider 3 */}
      <div className="slider2">
        <img src={images[currentIndex[2]]} alt={`Slide ${currentIndex[2] + 1}`} />
      </div>

      {/* Slider 4 */}
      <div className="slider3">
        <img src={images[currentIndex[3]]} alt={`Slide ${currentIndex[3] + 1}`} />
      </div>

      {/* Slider 5 */}
      <div className="slider4">
        <img src={images[currentIndex[4]]} alt={`Slide ${currentIndex[4] + 1}`} />
      </div>
    </div>
  );
};

export default ImageSlider;
