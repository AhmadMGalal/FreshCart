import React, { useEffect, useState } from 'react';
import Style from './CategorySlider.module.css';
import Slider from 'react-slick';
import axios from 'axios';
import Loading from '../Loading/Loading';
import useCategories from '../../Hooks/useCategories';

export default function CategorySlider() {
  // const [categories, setCategories] = useState([]);
  const { data: categories, isLoading, isError, error } = useCategories();

  // async function getGategories() {
  //   const { data } = await axios(
  //     'https://ecommerce.routemisr.com/api/v1/categories'
  //   );
  //   setCategories(data?.data);
  // }
  // useEffect(() => {
  //   getGategories();
  // }, []);

  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        // md
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        // sm
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        // xs
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        // sm
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      {isLoading ? (
        <>
          <Loading />{' '}
        </>
      ) : (
        <>
          <Slider {...settings}>
            {categories.map((c) => (
              <div key={c._id} className='p-1'>
                <img
                  className='h-[200px] w-full object-cover'
                  src={c.image}
                  alt={c.name}
                />
                <h3
                  className={
                    'text-sm text-green-500 my-1 font-bold text-center'
                  }>
                  {c.name}
                </h3>
              </div>
            ))}
          </Slider>
        </>
      )}
    </>
  );
}
