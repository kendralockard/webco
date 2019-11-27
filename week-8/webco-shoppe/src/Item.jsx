import React from 'react';

const Item = props => {
  const onClick = () => props.updateBasket(props.item.price);
  return (
    <li className="header item">
      {props.item.name}
      <br />${props.item.price}
      <br />
      <button onClick={onClick}>Add To Cart</button>
    </li>
  );
};

export default Item;
