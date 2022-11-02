import React from 'react';
import styles from './checkout.module.css';

export default function Checkout({ totalPrice }) {
  return (
    <div className={styles.sticky}>
      <div className={styles.subtotal}>Subtotal: ${totalPrice}</div>
      <button className={`${styles.checkout} ${styles.icons}`}>
        <div className={`original ${styles.iconsOriginalColor}`}>Checkout</div>
        <div className={`letters ${styles.iconsAfterColor}`}>
          <span>Pay</span>
          <span>me</span>
          <span>nt M</span>
          <span>et</span>
          <span>th</span>
          <span>od</span>
        </div>
      </button>
    </div>
  );
}
