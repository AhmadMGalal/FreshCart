import React, { useEffect, useState } from 'react';
import Style from './RecentProducts.module.css';
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import Loading from '../Loading/Loading';
import { useQueries, useQuery } from '@tanstack/react-query';
import useProducts from '../../Hooks/useProducts';

// export default function RecentProducts() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [err, setErr] = useState(null);
//   const [products, setProducts] = useState([]);

//   async function getProducts() {
//     try {
//       setIsLoading(true);
//       const { data } = await axios(
//         'https://ecommerce.routemisr.com/api/v1/products'
//       );
//       setProducts(data.data);
//     } catch (error) {
//       console.log(error);
//       setErr(err);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <>
//           <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-10'>
//             {products.map((p, i) => {
//               return <ProductItem key={p._id} product={p} i={i} />;
//             })}
//           </div>
//         </>
//       )}
//     </>
//   );
// }

export default function RecentProducts() {
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
