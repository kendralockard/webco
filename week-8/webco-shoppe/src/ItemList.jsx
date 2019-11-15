import React from 'react';
import Item from './Item';

// React-specific props argument
const ItemList = props => {
  return (
    <ul>
      {/* <Item item={props.item} /> */}
      {props.items.map(item => (
        <Item updateBasket={props.updateBasket} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;
