import React from 'react';
import ProductDetailed from '../ProductDetailed/ProductDetailed';
import styles from './overview.module.css';
import { catalog } from './catalog';
import uniqid from 'uniqid';

export default function Overview() {
  const productInfo = catalog.products.map((product) => (
    <ProductDetailed
      productName={product.name}
      productDescription={product.description}
      productImg={product.url}
      key={uniqid()}
    ></ProductDetailed>
  ));
  return (
    <div>
      {productInfo}
      {/* Contains details descriptions of all the product pages, and a learn more button */}
    </div>
  );
}
