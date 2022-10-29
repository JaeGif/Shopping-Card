import React from 'react';

export default function ProductDetailed(props) {
  return (
    <div>
      <h2>{props.productName}</h2>
      <img src={props.productImg} alt='missing product' />
      <p>{props.productDescription}</p>
      <button>Add to Cart</button>
    </div>
  );
}
