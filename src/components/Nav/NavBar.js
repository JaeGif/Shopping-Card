import React from 'react';
import styles from './nav.module.css';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar({ cart, items, removeItemFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isCartOpen) {
      setIsCartOpen(true);
    } else {
      setIsCartOpen(false);
    }
  };

  return (
    <nav className={`${styles.flexSpace} ${styles.theme}`}>
      <h1 className={styles.logoText}>Tokyo Night</h1>
      <ul className={styles.navList}>
        <Link className={styles.navList} to='/'>
          <li className={styles.innerLiText}>About</li>
        </Link>
        <Link className={styles.navList} to='/store'>
          <li className={styles.innerLiText}>Products</li>
        </Link>
      </ul>
      <CartIcon
        removeItemFromCart={removeItemFromCart}
        cart={cart}
        isOpen={isCartOpen}
        openCart={openCart}
        items={items}
      />
    </nav>
  );
}
