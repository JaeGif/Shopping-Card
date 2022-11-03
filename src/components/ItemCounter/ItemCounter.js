import React from 'react';

import styles from './itemcounter.module.css';

export default function ItemCounter({ itemObject, addItemToCart }) {
  return (
    <div className={styles.counterContainer}>
      <div className={styles.iconContainer}>
        <button
          onClick={() => {
            addItemToCart(itemObject);
          }}
          className={styles.icons}
        >
          <div className={`original ${styles.iconsOriginalColor}`}>
            Add To Cart
          </div>
          <div className={`letters ${styles.iconsAfterColor}`}>
            <span>Ad</span>
            <span>d T</span>
            <span>o C</span>
            <span>a</span>
            <span>r</span>
            <span>t</span>
          </div>
        </button>
      </div>
    </div>
  );
}
