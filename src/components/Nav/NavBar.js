import React from 'react';
import styles from './nav.module.css';
import CartIcon from '../CartIcon/CartIcon';

export default function NavBar({ items }) {
  return (
    <nav className={`${styles.flexSpace} ${styles.theme}`}>
      <h2>Tokyo Night</h2>
      <ul className={styles.navList}>
        <li>Home</li>
        <li>Products</li>
      </ul>
      <CartIcon items={items} />
    </nav>
  );
}
