import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';


const Navbar = ({ toggleCart }) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">Fast-Food Order</a>
      <h1 className="navbar-header">Welcome to Fast-Food Order Buy and enjoy your food</h1>
      <div className="cart-container">
        <BsCartFill onClick={toggleCart} className="cart-icon" />
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
