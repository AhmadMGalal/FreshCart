import React, { useContext, useEffect, useState } from 'react';
import Style from './SubCategories.module.css';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';

export default function SubCategories({ cId }) {
  const [subCatData, setSubCatData] = useState([]);
  const [catData, setCatData] = useState([]);
  console.log(cId);

  async function getCatData(cId) {
    try {
      const { data } = await axios(
        `https://ecommerce.routemisr.com/api/v1/categories/${cId}`
      );
      setCatData(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getSubCategories(cId) {
    try {
      const { data } = await axios(
        `https://ecommerce.routemisr.com/api/v1/categories/${cId}/subcategories`
      );
      setSubCatData(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCatData(cId);
    getSubCategories(cId);
    console.log(cId);
  }, [cId]);
  return (
    <>
      <div className='text-center'>
        <h2 className='text-green-500'>{catData.name}</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
          {subCatData.map((e) => {
            return (
              <>
                <div className=' flex border hover:shadow-lg hover:shadow-green-600 transition-all duration-500 h-[80px] rounded-md items-center justify-center'>
                  <h3>{e.name}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
