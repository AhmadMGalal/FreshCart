import React, { useEffect, useState } from 'react';
import Style from './Brands.module.css';
import axios from 'axios';
import BrandsItem from '../BrandsItem/BrandsItem';

export default function Brands() {
  const [isLoading, setIsLoading] = useState(false);
  const [brandsData, setBrandsData] = useState([]);

  async function getBrands() {
    try {
      setIsLoading(true);
      const { data } = await axios(
        'https://ecommerce.routemisr.com/api/v1/brands'
      );
      setBrandsData(data.data);
      console.log(brandsData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getBrands();
  }, []);
  return (
    <>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10'>
        {brandsData.map((b) => {
          return <BrandsItem key={b._id} brand={b} />;
        })}
      </div>
    </>
  );
}
