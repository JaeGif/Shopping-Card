import React from 'react';
import subtract from '../../assets/icons/subtract96.png';
import add from '../../assets/icons/add96.png';
import styles from './itemcounter.module.css';

export default function ItemCounter({
  itemObject,
  addItemToCart,
  removeItemFromCart,
}) {
  return (
    <div className={styles.counterContainer}>
      <img
        onClick={() => {
          removeItemFromCart(itemObject.id);
        }}
        className={styles.icons}
        src={subtract}
        alt='remove'
      />

      <img
        onClick={() => {
          addItemToCart(itemObject);
        }}
        className={styles.icons}
        src={add}
        alt='add'
      />
    </div>
  );
}
