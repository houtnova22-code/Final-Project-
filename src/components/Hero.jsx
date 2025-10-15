import React from 'react';

export default function Hero() {
  return (
    <div 
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("public/bg.webp")',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Skincare isn't vanity, it's the art of respecting yourself.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Stop wishing for perfect skin — start glowing today with our store by buying a good skincare.
        </p>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-white mb-8"></div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {['All Products', ,'Cleanser','Toner','Serum', 'Sunscreen','Moisturizer','Face mask/Sheet mask','Eye cleam','Facial oil','Blush','Highlighter','Lip balm/Lip gloss'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}