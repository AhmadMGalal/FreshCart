/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import Style from './ProductItem.module.css';
import { FaStar } from 'react-icons/fa';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
export default function ProductItem({ product, i }) {
  const { addItemToCart, setCartItemsQTY } = useContext(CartContext);

  async function addItem(id) {
    const response = await addItemToCart(id);

    if (response.data.status == 'success') {
      toast.success('product is added', {
        style: { backgroundColor: 'green', color: 'white' },
        position: 'bottom-right',
      });
      setCartItemsQTY(response.data.numOfCartItems);
    }
  }

  return (
    <>
      <div
        className={
          'group p-2' + (i % 2 == 0 ? ' bg-green-50 dark:bg-green-500' : '')
        }>
        <Link to={`/productDetails/${product._id}`}>
          <img
            className='w-full'
            src={product.imageCover}
            alt={product.title}
          />
          <p
            className={
              'text-xs text-green-500 my-1 font-bold' +
              (i % 2 == 0 ? ' dark:text-black' : '')
            }>
            {product.category.name}
          </p>
          <h3 className='text-sm my-1'>
            {product.title.split(' ').slice(0, 2).join(' ')}
          </h3>
          <div className='flex justify-between'>
            <p className='text-sm font-bold'>
              <span className='me-2'>{product.price}</span>EGY
            </p>
            <p className='flex align-bottom items-center'>
              <span className='mx-2'>{product.ratingsAverage}</span>
              <FaStar className='text-yellow-400' />
            </p>
          </div>
        </Link>
        <button
          onClick={() => addItem(product._id)}
          className='w-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 translate-y-full bg-green-400 text-white rounded-md opacity-0 p-3 dark:text-black dark:bg-green-100'>
          Add to cart
        </button>
      </div>
    </>
  );
}
