import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  const handleBuy = () => {
    const address = prompt("Enter your address:");
    const phone = prompt("Enter your phone number:");
    if (address && phone) {
      alert(`Order placed for ${product.name}!\nAddress: ${address}\nPhone: ${phone}`);
    }
  }

  return (
    <div className="col-3 mb-3">
      <div className="card food-card img ">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">₹{product.price}</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
          <button onClick={handleBuy} className="btn btn-success ml-2">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
