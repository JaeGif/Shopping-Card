import React from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import styles from './detailed.module.css';

export default function ProductDetailed(props) {
  return (
    <div className={styles.productCard}>
      <div
        style={randomPositionOfCircleStyles()}
        className={styles.backgroundCircle}
      ></div>
      <h2>{props.productName}</h2>
      <img
        className={styles.productImg}
        src={props.productImg}
        alt='missing product'
      />
      <p className={styles.textWrapping}>{props.productDescription}</p>
      <div className={styles.priceAdding}>
        <p className={styles.price}>{props.productPrice}</p>
        <span>
          <ItemCounter
            itemObject={props.fullItemObject}
            addItemToCart={props.addItemToCart}
            removeItemFromCart={props.removeItemFromCart}
          ></ItemCounter>
        </span>
      </div>
    </div>
  );
}

const randomPositionOfCircleStyles = () => {
  const right = Math.floor(Math.random() * 100);
  const top = Math.floor(Math.random() * 100);
  console.log(right, top);
  return {
    position: 'absolute',
    zIndex: '-1',
    right: `${right}%`,
    top: `${top}%`,
  };
};
