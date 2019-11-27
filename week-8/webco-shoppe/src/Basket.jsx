import React from 'react';

const Basket = props => {
  return (
    <div>
      Your basket has {props.size} items for ${props.totalPrice} dollars
    </div>
  );
};

export default Basket;
