import React, { useContext, useEffect, useState } from 'react';
import Style from './Cart.module.css';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const {
    setCartItemsQTY,
    getUserCart,
    updateItemCount,
    deleteItem,
    deleteAllItems,
  } = useContext(CartContext);
  const [cartDetails, setCartDetails] = useState(null);

  async function getLoggedUserCart() {
    const response = await getUserCart();
    console.log(response.data);

    if (response.data.status == 'success') {
      setCartDetails(response.data.data);
    }
  }
  async function updateQuantity(id, count) {
    const response = await updateItemCount(id, count);
    console.log(response.data);

    if (response.data.status == 'success') {
      setCartDetails(response.data.data);
    }
  }

  async function deleteCartItem(id) {
    const response = await deleteItem(id);
    console.log(response.data);

    if (response.data.status == 'success') {
      setCartDetails(response.data.data);
    }
  }
  async function deleteCartItems() {
    const response = await deleteAllItems();
    console.log(response.data);

    if (response.data.message == 'success') {
      console.log(response.data);
      setCartDetails(null);
      setCartItemsQTY(0);
    }
  }

  useEffect(() => {
    getLoggedUserCart();
  }, []);
  return (
    <>
      <h2 className='text-2xl font-bold text-green-600 mb-4'>Cart Details</h2>
      <div className='flex justify-between items-center mb-4'>
        <p className='text-xl font-bold text-green-500'>
          Total Price {cartDetails?.totalCartPrice}
        </p>
        <button
          onClick={() => deleteCartItems()}
          className='flex items-center p-2 bg-green-500 text-white rounded-md'>
          <span className='mr-3'>Clear Cart</span>
          <FaTrash />
        </button>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mb-5'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-16 py-3'>
                <span className='sr-only'>Image</span>
              </th>
              <th scope='col' className='px-6 py-3'>
                Product
              </th>
              <th scope='col' className='px-6 py-3'>
                Qty
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartDetails?.products.map((p) => (
              <CartItem
                key={p._id}
                count={p.count}
                price={p.price}
                product={p.product}
                updateQuantity={updateQuantity}
                deleteCartItem={deleteCartItem}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Link to={'/checkout/' + cartDetails?._id}>
        <button className='p-4 bg-green-500 text-2xl font-bold text-white rounded-md w-1/3 center'>
          CheckOut Session
        </button>
      </Link>
    </>
  );
}
