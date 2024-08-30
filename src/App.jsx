/* eslint-disable no-unused-vars */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
import CheckOut from './components/CheckOut/CheckOut';
import Allorders from './components/Allorders/Allorders';

let x = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: 'categories',
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: 'brands',
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: 'checkout/:cartId',
        element: (
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        ),
      },
      {
        path: 'allorders',
        element: (
          <ProtectedRoute>
            <Allorders />
          </ProtectedRoute>
        ),
      },
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: 'products',
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: 'productDetails/:id',
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Notfound /> },
    ],
  },
]);
const myClient = new QueryClient();
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QueryClientProvider client={myClient}>
        <UserContextProvider>
          <CartContextProvider>
            <RouterProvider router={x}></RouterProvider>
          </CartContextProvider>
        </UserContextProvider>
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
