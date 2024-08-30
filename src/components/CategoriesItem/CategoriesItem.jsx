/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Style from './CategoriesItem.module.css';
import SubCategories from '../SubCategories/SubCategories';

export default function CategoriesItem({ category }) {
  
  useEffect(() => {}, []);

  
  return (
    <>
      <div
        
        className='border hover:shadow-lg hover:shadow-green-600 transition-all duration-500'>
        <img
          className='h-[400px] w-full object-cover mb-4'
          src={category?.image}
          alt={category?.name}
        />
        <h3 className={'text-xl text-green-500 my-1 font-bold text-center'}>
          {category?.name}
        </h3>
      </div>
      
    </>
  );
}
