import React from 'react';
import NavBar from '../Nav/NavBar';
import Cart from '../Cart/Cart';
import Overview from '../Overview/Overview';
import styles from './main.module.css';
import { useState } from 'react';
import Home from '../Home/Home';

export default function Main() {
  const [itemsInCart, setItemsInCart] = useState(1);

  return (
    <div>
      <NavBar items={itemsInCart}></NavBar>
      <Home></Home>
    </div>
  );
}
