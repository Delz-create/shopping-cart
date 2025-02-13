import React, { useContext } from 'react';
import Product from './Product';
import { CartContext } from './CartContext';

function Products() {
  const {setCartItems} = useContext(CartContext)

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };


  return (
    <div>
      <Product onAddToCart={handleAddToCart} />
    </div>
  );
}

export default Products;
