/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Style from './Login.module.css';
import { useFormik, validateYupSchema } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { UserContext } from '../../Context/UserContext';

export default function Login() {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { setToken } = useContext(UserContext);
  let navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('email is required')
      .email('email is not valid'),
    password: Yup.string()
      .required('password is required')
      .matches(
        /^[A-Z].{3,}/,
        'password should start with Upper case and then atleast 3 characters'
      ),
  });

  async function handleRegister(formValues) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        formValues
      );
      if (data.message == 'success') {
        console.log(data.message);
        navigate('/');
        setToken(data.token);
      }
    } catch (error) {
      setErrorMsg(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  // ! replaced by Yup
  // function myValidation(value) {
  //   let errors = {};
  //   if (!value.name) {
  //     errors.name = 'Name is Required';
  //   } else if (!/^[A-Z][a-z]{3,5}$/.test(value.name)) {
  //     errors.name = 'Name must start with uppercase ...';
  //   }
  //   if (!value.email) {
  //     errors.email = 'email is required';
  //   } else if (
  //     !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //       value.email
  //     )
  //   ) {
  //     errors.email = 'email is invalid';
  //   }
  //   return errors;
  // }
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    // ! replaced by Yup
    // validate: myValidation,
    onSubmit: handleRegister,
  });
  useEffect(() => {}, []);
  return (
    <>
      <div className='py-6  mx-auto'>
        <h2 className='text-3xl text-green-600 font-bold mb-6'>Log in</h2>
        {errorMsg ? (
          <div
            className='p-4 mb-9 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
            role='alert'>
            {errorMsg}.
          </div>
        ) : null}
        <form onSubmit={formik.handleSubmit}>
          <div className='relative mb-5'>
            <input
              type='email'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='email'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Enter your email address
            </label>
          </div>
          {formik.errors.email && formik.touched.email && (
            <div
              className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
              role='alert'>
              {formik.errors.email}.
            </div>
          )}

          <div className='relative mb-5'>
            <input
              type='password'
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='password'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Enter your password
            </label>
          </div>
          {formik.errors.password && formik.touched.password && (
            <div
              className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
              role='alert'>
              {formik.errors.password}.
            </div>
          )}

          <button
            disabled={isLoading}
            type='submit'
            className='text-white disabled:bg-green-50 disabled:text-gray-500 dark:disabled:bg-green-50 dark:disabled:text-gray-500 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
            {isLoading ? (
              <FaSpinner className='animate-spin text-black' />
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </>
  );
}
