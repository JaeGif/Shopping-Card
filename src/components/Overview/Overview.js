import React from 'react';
import ProductDetailed from '../ProductDetailed/ProductDetailed';
import styles from './overview.module.css';
import { catalog } from './catalog';
import uniqid from 'uniqid';

export default function Overview(props) {
  const productInfo = catalog.products.map((product) => (
    <ProductDetailed
      addItemToCart={props.addItemToCart}
      removeItemFromCart={props.removeItemFromCart}
      fullItemObject={product}
      productName={product.name}
      productDescription={product.description}
      productImg={product.url}
      key={uniqid()}
    ></ProductDetailed>
  ));
  return <div>{productInfo}</div>;
}
