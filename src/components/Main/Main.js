import React from 'react';
import NavBar from '../Nav/NavBar';
import Cart from '../Cart/Cart';
import Overview from '../Overview/Overview';

import styles from './main.module.css';

export default function Main() {
  return (
    <div>
      <NavBar></NavBar>
      <Overview></Overview>
    </div>
  );
}
