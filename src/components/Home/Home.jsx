/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Style from './Home.module.css';
import axios from 'axios';
import MainSlider from '../MainSlider/MainSlider';
import RecentProducts from '../RecentProducts/RecentProducts';
import CategorySlider from '../CategorySlider/CategorySlider';

export default function Home() {
  const [counter, setCounter] = useState(0);
  // const [data, setData] = useState([]);
  // async function getProducts() {
  //   const { data } = await axios(
  //     'https://ecommerce.routemisr.com/api/v1/products'
  //   );

  //   setData(data.data);
  // }

  useEffect(() => {}, []);
  return (
    <>
      <MainSlider />
      <CategorySlider />
      <RecentProducts />
    </>
  );
}
