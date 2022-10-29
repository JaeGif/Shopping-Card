import React, { useEffect } from 'react';
import styles from './carticon.module.css';
import { useState } from 'react';

export default function CartIcon({ items }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (items >= 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [items]);

  return (
    <div>
      <img className={styles.cartIcon} src='#' alt='cart' />
      {isVisible ? <div className={styles.inCart}>{items}</div> : <></>}
    </div>
  );
}
