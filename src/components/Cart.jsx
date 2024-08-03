import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice';
import AddressForm from './AddressForm';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showAddressForm, setShowAddressForm] = useState(false);

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleBuy = () => {
    setShowAddressForm(true);
  };

  const handleAddressSubmit = (details) => {
    alert(`Purchase successful! Address: ${details.address}, Phone: ${details.phone}`);
    dispatch(clearCart());
    setShowAddressForm(false);
  };

  const handleAddressCancel = () => {
    setShowAddressForm(false);
  };

  return (
    <div className="container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name} - ${item.price}
              <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger btn-sm">Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && !showAddressForm && (
        <>
          <button onClick={handleBuy} className="btn btn-success mt-3">Buy</button>
          <button onClick={handleClearCart} className="btn btn-danger mt-3 ml-2">Clear Cart</button>
        </>
      )}
      {showAddressForm && (
        <AddressForm onSubmit={handleAddressSubmit} onCancel={handleAddressCancel} />
      )}
    </div>
  );
};

export default Cart;
