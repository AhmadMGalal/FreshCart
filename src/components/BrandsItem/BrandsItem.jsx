import React, { useEffect, useState } from 'react';
import Style from './BrandsItem.module.css';

export default function BrandsItem({ brand }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div className='border hover:shadow-lg hover:shadow-green-600 transition-all duration-500'>
        <img
          className=' w-full object-contain mb-4'
          src={brand?.image}
          alt={brand?.name}
        />
        <p className={'text-xl text-green-500 my-1 font-bold text-center'}>
          {brand?.name}
        </p>
      </div>
    </>
  );
}
