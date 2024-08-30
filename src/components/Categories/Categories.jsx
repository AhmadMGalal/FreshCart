import React, { useEffect, useState } from 'react';
import Style from './Categories.module.css';
import useCategories from '../../Hooks/useCategories';
import Loading from '../Loading/Loading';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import SubCategories from '../SubCategories/SubCategories';

export default function Categories() {
  const [counter, setCounter] = useState(0);
  // const [click, setClick] = useState(false);
  const [cId, setCId] = useState(null);
  const { data: categories, isLoading, error, isError } = useCategories();
  console.log(categories);
  useEffect(() => {}, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
            {categories.map((c) => {
              return (
                <>
                  <div
                    onClick={() => {
                      // setClick(true);
                      setCId(c._id);
                    }}>
                    <CategoriesItem key={c._id} category={c} />
                  </div>
                </>
              );
            })}
          </div>
          
          {cId && <SubCategories cId={cId} />}
        </>
      )}
    </>
  );
}
