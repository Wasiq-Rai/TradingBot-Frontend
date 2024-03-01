import React from 'react';
import FreeCard from './FreeCard';
import ProCard from './ProCard';
import Pluscard from './Pluscard';

const PricingCards = () => {
  return (
    <div className="flex justify-evenly mb-40">
      {/* Left card */}
      <div className="relative">
        <div className=" rounded-lg shadow-md p-4">
          <FreeCard/>
        </div>
      </div>
      {/* Center card */}
      <div className="relative -mt-20">
        <div className=" rounded-lg shadow-md p-4">
          <Pluscard/>
        </div>
      </div>
      {/* Right card */}
      <div className="relative">
        <div className=" rounded-lg shadow-md p-4">
          <ProCard/>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
