// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);


  return (
    <div className="App">
      <h1> Tienda </h1>
      <Form />
      <div className="products">
        <AllTheThings />
        <MyShoppingCart />
      </div>
    </div>
  );
}
