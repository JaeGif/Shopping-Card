import React from 'react';
import styles from './nav.module.css';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';

export default function NavBar({ items }) {
  return (
    <nav className={`${styles.flexSpace} ${styles.theme}`}>
      <h1 className={styles.logoText}>Tokyo Night</h1>
      <ul className={styles.navList}>
        <Link className={styles.navList} to='/'>
          <li className={styles.innerLiText}>Home</li>
        </Link>
        <Link className={styles.navList} to='/store'>
          <li className={styles.innerLiText}>Products</li>
        </Link>
      </ul>
      <CartIcon items={items} />
    </nav>
  );
}
