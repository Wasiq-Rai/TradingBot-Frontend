'use client';

import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface SlickSliderProps {
  settings: any;
  children: any;
}


const SlickSlider: React.FC<SlickSliderProps> = ({ settings, children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default SlickSlider;