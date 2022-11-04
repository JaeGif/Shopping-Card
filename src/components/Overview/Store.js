import React from 'react';
import ProductDetailed from '../ProductDetailed/ProductDetailed';
import { catalog } from './catalog';
import uniqid from 'uniqid';
import styles from './store.module.css';

export default function Overview({ addItemToCart, removeItemFromCart }) {
  const productInfo = catalog.products.map((product) => (
    <ProductDetailed
      addItemToCart={addItemToCart}
      removeItemFromCart={removeItemFromCart}
      fullItemObject={product}
      productName={product.name}
      productDescription={product.description}
      productPrice={product.price}
      productImg={product.url}
      key={uniqid()}
    ></ProductDetailed>
  ));
  return <div className={styles.storeContainer}>{productInfo}</div>;
}
