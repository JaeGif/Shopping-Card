import React from 'react';
import styles from './nav.module.css';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';

export default function NavBar({ items }) {
  return (
    <nav className={`${styles.flexSpace} ${styles.theme}`}>
      <h2>Tokyo Night</h2>
      <ul className={styles.navList}>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/store'>
          <li>Products</li>
        </Link>
      </ul>
      <CartIcon items={items} />
    </nav>
  );
}
