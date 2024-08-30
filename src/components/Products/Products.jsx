import React, { useEffect, useState } from 'react';
import Style from './Products.module.css';
import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import ProductItem from '../ProductItem/ProductItem';
import useProducts from '../../Hooks/useProducts';

export default function Products() {
  const { data: products, isLoading, error, isError } = useProducts();

  useEffect(() => {}, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-10'>
            {products.map((p, i) => {
              return <ProductItem key={p._id} product={p} i={i} />;
            })}
          </div>
        </>
      )}
    </>
  );
}
