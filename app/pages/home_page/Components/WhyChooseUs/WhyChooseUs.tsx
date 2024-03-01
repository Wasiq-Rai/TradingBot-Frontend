'use client';

import React, { useEffect, useState } from 'react';
import WhyChooseUsItem from './WhyChooseUsItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const WhyChooseUs = () => {
  const slider_items = [
    { src: '../img/icon/choose_icon01.svg', alt: '', link: '/', title: 'Mobile payment made easy', description: 'Add new, trending and rare artwork to your collection.' },
    { src: '../img/icon/choose_icon02.svg', alt: '', link: '/', title: 'Lifetime free transaction', description: 'Add new, trending and rare artwork to your collection.' },
    { src: '../img/icon/choose_icon03.svg', alt: '', link: '/', title: 'Protect the identity', description: 'Add new, trending and rare artwork to your collection.' },
    { src: '../img/icon/choose_icon04.svg', alt: '', link: '/', title: 'Security & control over money', description: 'Add new, trending and rare artwork to your collection.' },
    { src: '../img/icon/choose_icon01.svg', alt: '', link: '/', title: 'Lifetime free transaction', description: 'Add new, trending and rare artwork to your collection.' },
    { src: '../img/icon/choose_icon03.svg', alt: '', link: '/', title: 'Protect the identity', description: 'Add new, trending and rare artwork to your collection.' },
    { src: '../img/icon/choose_icon04.svg', alt: '', link: '/', title: 'Security & control over money', description: 'Add new, trending and rare artwork to your collection.' },
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old === slider_items.length - 1 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slider_items.length]);

  return (
    <section className="choose-area pb-130" style={{ backgroundImage: "url('../img/banner/banner_bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">

            <div className="  left-0 w-full flex justify-center">
              <h1 className=" text-3xl lg:text-4xl mt-4 font-bold text-white  py-10 px-4 rounded-lg uppercase ">
                Why Choose Us ?
              </h1>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white"></span>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}

          
        >
          {slider_items.map((item, index) => (
            <SwiperSlide key={index} className='py-20'>
              <WhyChooseUsItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slide-progressbar">
          <div
            style={{
              width: `${((count + 1) * 100) / slider_items.length}%`,
            }}
            className="slide-filler"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
