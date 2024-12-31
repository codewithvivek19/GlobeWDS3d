import React from 'react';

const MapTitle: React.FC = () => {
  return (
    <div className="absolute inset-x-0 top-0 flex flex-col items-center z-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-8 mb-4 drop-shadow-lg">
        Why Digit is now Global
      </h1>
      <p className="text-lg md:text-xl text-gray-800 mb-8 text-center max-w-2xl px-4">
        Explore our locations across India and Malaysia
      </p>
    </div>
  );
};

export default MapTitle;