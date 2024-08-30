/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Style from './CheckOut.module.css';
import { useFormik, validateYupSchema } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';

export default function CheckOut() {
  const { cartId } = useParams();
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { setToken } = useContext(UserContext);
  const { checkOutSession } = useContext(CartContext);
  let navigate = useNavigate();

  async function handleRegister(formValues) {
    const response = await checkOutSession(cartId, formValues);
    window.location.href = response.data.session.url;
  }

  let formik = useFormik({
    initialValues: {
      details: '',
      phone: '',
      city: '',
    },

    onSubmit: handleRegister,
  });
  useEffect(() => {}, []);
  return (
    <>
      <div className='py-6  mx-auto'>
        <h2 className='text-3xl text-green-600 font-bold mb-6'>CheckOut</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='relative mb-5'>
            <input
              type='tel'
              name='phone'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='phone'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Mobile Phone
            </label>
          </div>
          <div className='relative mb-5'>
            <input
              type='text'
              name='city'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='city'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              User City
            </label>
          </div>
          <div className='relative mb-5'>
            <input
              type='text'
              name='details'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='details'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              User details
            </label>
          </div>

          <button
            disabled={isLoading}
            type='submit'
            className='text-white disabled:bg-green-50 disabled:text-gray-500 dark:disabled:bg-green-50 dark:disabled:text-gray-500 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
            {isLoading ? (
              <FaSpinner className='animate-spin text-black' />
            ) : (
              'Go to Payment'
            )}
          </button>
        </form>
      </div>
    </>
  );
}
