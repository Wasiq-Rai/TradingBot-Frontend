import React from 'react';

const Banner = () => {
  return (
    <section className="relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:col-span-10">
            <div className="banner-content text-center mx-5">
              <h2 className="title text-white text-5xl lg:text-6xl font-bold leading-tight mt-4 mb-8">
                Join Future of Algorithmic <span className="text-blue-400">Stocks</span> with Trading Bots
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;