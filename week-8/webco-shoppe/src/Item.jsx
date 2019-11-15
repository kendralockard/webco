import React from 'react';

const Item = props => {
  return (
    <li>
      {props.item.name}
      {props.item.price}
      <button onClick={props.updateBasket}>Add To Cart</button>
    </li>
  );
};

export default Item;
