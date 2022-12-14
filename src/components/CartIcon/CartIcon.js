import React, { useEffect } from 'react';
import styles from './carticon.module.css';
import { useState } from 'react';
import cartIcon from '../../assets/icons/cart96.png';

export default function CartIcon({ items, openCart }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (items >= 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [items]);

  return (
    <div className={styles.cartParent}>
      <img
        onClick={(e) => openCart(e)}
        className={styles.cartIcon}
        src={cartIcon}
        alt='cart'
      />
      {isVisible ? <div className={styles.inCart}>{items}</div> : <></>}
    </div>
  );
}
