import React from 'react';
import { NavLink } from 'react-router-dom';

const CheckoutButton = () => (
  <button>
    <NavLink to="/checkout">Check Out</NavLink>
  </button>
);

export default CheckoutButton;
