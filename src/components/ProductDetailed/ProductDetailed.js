import React from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import styles from './detailed.module.css';

export default function ProductDetailed(props) {
  return (
    <div className={styles.productCard}>
      <div
        style={randomPositionOfCircleStyles()}
        className={`${styles.backgroundCircle}`}
      ></div>
      <div
        style={randomPositionOfCircleStyles()}
        className={`${styles.backgroundCircle}`}
      ></div>
      <h2 style={{ zIndex: '2' }}>{props.productName}</h2>
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
/* 0 -> 255 rgb */
const randomPositionOfCircleStyles = () => {
  const right = Math.floor(Math.random() * 100);
  const top = Math.floor(Math.random() * 100);
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const heightAndWidth = Math.floor(Math.random() * (30 - 10 + 1) + 10);
  const alpha = Math.random();
  const blur = Math.random() * (4 - 1 + 1) + 1;

  return {
    position: 'absolute',
    backgroundColor: `rgba(${r},${g}, ${b}, ${alpha})`,
    height: `${heightAndWidth}vh`,
    width: `${heightAndWidth}vh`,
    filter: `blur(${blur}px)`,
    right: `${right}%`,
    top: `${top}%`,
  };
};
