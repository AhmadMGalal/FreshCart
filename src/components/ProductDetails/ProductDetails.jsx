import React, { useContext, useEffect, useState } from 'react';
import Style from './ProductDetails.module.css';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function ProductDetails() {
  // const [productDetails, setproductDetails] = useState([]);

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

  const { id } = useParams();
  const {
    data: productDetails,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['productDetails', id],
    queryFn: () =>
      axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`),
    select: (data) => data.data.data,
  });
  console.log(productDetails);
  // async function getProductDetails(id) {
  //   const { data } = await axios.get(
  //     'https://ecommerce.routemisr.com/api/v1/products/' + id
  //   );
  //   setproductDetails(data.data);
  // }
  // useEffect(() => {
  //   getProductDetails(id);
  // }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='grid sm:grid-cols-12 gap-4'>
            <div className='col-span-4 py-5'>
              <img
                className='w-full'
                src={productDetails?.imageCover}
                alt={productDetails.title}
              />
            </div>
            <div className='col-span-8 py-5 self-center'>
              <h2 className='font-bold text-2xl'>{productDetails.title}</h2>
              <p className='my-3'>{productDetails.description}</p>
              <h3>{productDetails.category?.name}</h3>
              <div className='flex justify-between mb-3'>
                <p className='text-sm font-bold'>
                  <span className='me-2'>{productDetails.price}</span>EGY
                </p>
                <p className='flex align-bottom items-center'>
                  <span className='mx-2'>{productDetails.ratingsAverage}</span>
                  <FaStar className='text-yellow-400' />
                </p>
              </div>
              <button
                onClick={() => addItem(id)}
                className='w-full bg-green-600 text-white rounded-md  p-3'>
                Add to cart
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
