import React from 'react';
import styles from './cart.module.css';
import Product from '../Product/Product';
import uniqid from 'uniqid';
import Checkout from './Checkout';

export default function Cart({ cart, isOpen, items, removeItemFromCart }) {
  const cartItemsRendered = cart.map((el) => (
    <Product
      src={el.url}
      name={el.name}
      price={el.price}
      id={el.id}
      removeItemFromCart={removeItemFromCart}
      key={uniqid()}
    />
  ));

  const totalPrice = () => {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
      price += cart[i].price;
    }
    price = (Math.round(Number(parseFloat(price)) * 100) / 100).toFixed(2);

    return price;
  };
  return (
    <div
      style={isOpen ? cartOpenStyles : noneStyles}
      className={styles.cartContainer}
    >
      <div>{cartItemsRendered}</div>
      <Checkout totalPrice={totalPrice()} />
    </div>
  );
}

const cartOpenStyles = {
  transform: 'translateX(-27vw)',
};
const noneStyles = {};
