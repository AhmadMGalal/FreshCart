import React, { useEffect, useState } from 'react';
import Style from './MainSlider.module.css';
import mSliderImg1 from '../../assets/imgs/main-slider-1.jpeg';
import mSliderImg2 from '../../assets/imgs/main-slider-2.jpeg';
import mSliderImg3 from '../../assets/imgs/main-slider-3.jpeg';
import mSliderImg4 from '../../assets/imgs/slide-1.jpeg';
import mSliderImg5 from '../../assets/imgs/slide-2.jpeg';
import Slider from 'react-slick';

export default function MainSlider() {
  let settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className='grid grid-cols-12 mb-4'>
        {/* <div className='md:col-span-8 bg-green-500 '> */}
        <Slider
          {...settings}
          className=' col-span-12 md:col-span-8 bg-green-500'>
          <img
            className=' w-[400px] object-cover object-right h-[400px]'
            src={mSliderImg1}
            alt=''
          />
          <img
            className=' w-[400px] object-cover object-right h-[400px]'
            src={mSliderImg4}
            alt=''
          />
          <img
            className=' w-[400px] object-cover object-right h-[400px]'
            src={mSliderImg5}
            alt=''
          />
        </Slider>
        {/* </div> */}
        <div className='col-span-12 md:col-span-4 flex flex-col bg-sky-400'>
          <img
            className='w-full object-cover h-[200px]'
            src={mSliderImg2}
            alt=''
          />
          <img
            className='w-full object-cover h-[200px]'
            src={mSliderImg3}
            alt=''
          />
        </div>
      </div>
    </>
  );
}
