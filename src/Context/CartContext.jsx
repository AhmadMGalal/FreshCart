import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  function getUserCart() {
    const token = localStorage.getItem('token');
    const headers = {
      token,
    };
    return axios
      .get('https://ecommerce.routemisr.com/api/v1/cart', { headers })
      .then((data) => data)
      .catch((err) => err);
  }

  function addItemToCart(pid) {
    const token = localStorage.getItem('token');
    const headers = {
      token,
    };
    return axios
      .post(
        'https://ecommerce.routemisr.com/api/v1/cart',
        { productId: pid },
        { headers }
      )
      .then((data) => data)
      .catch((err) => err);
  }

  function updateItemCount(id, count) {
    const token = localStorage.getItem('token');
    const headers = {
      token,
    };
    return axios
      .put(
        'https://ecommerce.routemisr.com/api/v1/cart/' + id,
        { count: count },
        { headers }
      )
      .then((data) => data)
      .catch((err) => err);
  }
  function deleteItem(id) {
    const token = localStorage.getItem('token');
    const headers = {
      token,
    };
    return axios
      .delete('https://ecommerce.routemisr.com/api/v1/cart/' + id, { headers })
      .then((data) => data)
      .catch((err) => err);
  }
  function deleteAllItems() {
    const token = localStorage.getItem('token');
    const headers = {
      token,
    };
    return axios
      .delete('https://ecommerce.routemisr.com/api/v1/cart', { headers })
      .then((data) => data)
      .catch((err) => err);
  }

  function checkOutSession(cartId, shippingaddress) {
    const token = localStorage.getItem('token');
    const headers = {
      token,
    };
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
        { shippingaddress: shippingaddress },
        { headers }
      )
      .then((data) => data)
      .catch((err) => err);
  }

  const [cartItemsQTY, setCartItemsQTY] = useState(0);
  async function getCart() {
    const response = await getUserCart();
    if (response.data.status == 'success') {
      setCartItemsQTY(response.data.numOfCartItems);
    }
  }
  useEffect(() => {
    getCart();
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartItemsQTY,
        getUserCart,
        setCartItemsQTY,
        addItemToCart,
        updateItemCount,
        deleteItem,
        deleteAllItems,
        checkOutSession,
      }}>
      {children}
    </CartContext.Provider>
  );
}
