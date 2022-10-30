import React from 'react';
import styles from './nav.module.css';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';

export default function NavBar({ items }) {
  return (
    <nav className={`${styles.flexSpace} ${styles.theme}`}>
      <h2>Tokyo Night</h2>
      <ul className={styles.navList}>
        <Link className={styles.navList} to='/'>
          <li>
            <div className={styles.innerDiv}>Home</div>
          </li>
        </Link>
        <Link className={styles.navList} to='/store'>
          <li>
            <div className={styles.innerDiv}>Products</div>
          </li>
        </Link>
      </ul>
      <CartIcon items={items} />
    </nav>
  );
}
