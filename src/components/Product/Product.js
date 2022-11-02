import React from 'react';
import styles from './product.module.css';

export default function Product({ name, price, src, id, removeItemFromCart }) {
  return (
    <div className={styles.productWrapper}>
      <h3 className={styles.productName}>{name}</h3>
      <img className={styles.productImg} src={src} alt='missing item' />
      <h3 className={styles.productPrice}>{price}</h3>
      <button
        onClick={() => {
          removeItemFromCart(id);
        }}
        className={`${styles.remove} ${styles.icons}`}
      >
        <div className={`original ${styles.iconsOriginalColor}`}>Remove</div>
        <div className={`letters ${styles.iconsAfterColor}`}>
          <span>R</span>
          <span>e</span>
          <span>m</span>
          <span>o</span>
          <span>v</span>
          <span>e</span>
        </div>
      </button>
    </div>
  );
}
