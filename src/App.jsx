import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div>
      <Navbar toggleCart={toggleCart} />
      <ProductList />
      {cartVisible && <Cart />}
      <Footer />
    </div>
  );
};

export default App;
