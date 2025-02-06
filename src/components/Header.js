import React, { useContext, useState } from 'react';
import Cart from './Cart';
import { CartContext } from './CartContext';

function Header() {
  const {cartItems} = useContext(CartContext)
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='header'>
      <div className='Header-logo'>
        <h1>Logo</h1>
      </div>

      <div className='cart-btn'>
        <button onClick={cartOpenHandler}>cart ({cartItems.length})</button>
        {isCartOpen && <Cart cartItems={cartItems} />}
      </div>
    </div>
  );
}

export default Header;