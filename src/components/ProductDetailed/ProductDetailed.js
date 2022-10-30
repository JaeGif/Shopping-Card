import React from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import { useState } from 'react';

export default function ProductDetailed(props) {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseOverHandler = () => {
    setIsHovered(true);
  };
  const onMouseOutHandler = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={onMouseOverHandler} onMouseLeave={onMouseOutHandler}>
      <h2>{props.productName}</h2>
      <img src={props.productImg} alt='missing product' />
      <p>{props.productDescription}</p>
      {isHovered && <ItemCounter></ItemCounter>}
    </div>
  );
}
