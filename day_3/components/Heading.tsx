import React from 'react';

const Banner = () => {
  return (
    <div
      className="w-full h-48 sm:h-56 md:h-64 lg:h-64 bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/banner.png")' }} // Replace with your image URL
    >
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-12 left-4 sm:left-6 md:left-14 text-white font-bold text-2xl sm:text-4xl md:text-5xl">
        All Products
      </div>
    </div>
  );
};

export default Banner;
