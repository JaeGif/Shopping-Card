import React from 'react';

import styles from './itemcounter.module.css';

export default function ItemCounter({
  itemObject,
  addItemToCart,
  removeItemFromCart,
}) {
  return (
    <div className={styles.counterContainer}>
      <div className={styles.iconContainer}>
        <button
          onClick={() => {
            addItemToCart(itemObject);
          }}
          className={styles.icons}
        >
          <div className='original'>Add To Cart</div>
          <div className='letters'>
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
