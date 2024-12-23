'use client';

import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return; // Avoid interval setup if images are empty
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="my-8 relative max-w-full w-full mx-auto">
        <div className="text-center text-gray-500">
          No images available for the carousel.
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 relative max-w-full w-full mx-auto">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`carousel-${currentIndex}`}
          className="w-full h-auto rounded-xl shadow-lg transition-all duration-500"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white text-6xl font-bold drop-shadow-lg">WELCOME TO SRI LANKA</h1>
            <p className="text-white text-2xl mt-4 font-medium">Plan Your Vacation With Us</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} transition`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
