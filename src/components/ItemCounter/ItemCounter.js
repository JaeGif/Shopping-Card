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
        <p
          onClick={() => {
            removeItemFromCart(itemObject.id);
          }}
          className={styles.icons}
        >
          -
        </p>
      </div>

      <div className={styles.iconContainer}>
        <p
          onClick={() => {
            addItemToCart(itemObject);
          }}
          className={styles.icons}
        >
          +
        </p>
      </div>
    </div>
  );
}
