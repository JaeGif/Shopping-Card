import React from 'react';
import styles from './checkout.module.css';

export default function Checkout({ totalPrice }) {
  return (
    <div>
      <div className={styles.subtotal}>Subtotal: ${totalPrice}</div>
      <button className={styles.checkout}>
        <div className='original'>Checkout</div>
        <div className='letters'>
          <span>Ch</span>
          <span>ec</span>
          <span>k</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </div>
      </button>
    </div>
  );
}
