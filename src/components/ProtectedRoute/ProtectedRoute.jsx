/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Style from './ProtectedRoute.module.css';
import { UserContext } from '../../Context/UserContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const { token } = useContext(UserContext);

  if (token) {
    return props.children;
  } else {
    alert('please login first');
    return <Navigate to={'/login'}></Navigate>;
  }
}
