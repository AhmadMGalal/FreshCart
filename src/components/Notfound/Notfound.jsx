import React, { useEffect, useState } from 'react';
import Style from './Notfound.module.css';

export default function Notfound() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <h2>Notfound</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        recusandae.
      </p>
    </>
  );
}
