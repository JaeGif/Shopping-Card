import React, { useEffect } from 'react';
import styles from './cart.module.css';
import Product from '../Product/Product';
import uniqid from 'uniqid';
import Checkout from './Checkout';
import { useState } from 'react';

export default function Cart({ cart, isOpen, items, removeItemFromCart }) {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (cart.length >= 1) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [cart, removeItemFromCart]);

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
      <div>
        {isEmpty ? (
          <h1 style={{ color: 'white' }}>Your cart is empty</h1>
        ) : (
          cartItemsRendered
        )}
      </div>
      <Checkout totalPrice={totalPrice()} />
    </div>
  );
}

const cartOpenStyles = {
  transform: 'translateX(-27vw)',
};
const noneStyles = {};
