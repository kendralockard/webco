import React from 'react';

const Item = props => (
  <li className="header item">
    {props.item.name} <br />
    {props.item.price} <br />
    <button>Add to cart</button>
  </li>
);

export default Item;
