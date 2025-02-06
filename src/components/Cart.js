import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext)

  const handleDeleteItem = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId))
  }

  const totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const increaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    )
  }

  return (
    <div className='Cart'>
      <div className='Cart-header'>
        <h1>Check-out</h1>
      </div>

      <hr />

      <div className='products'>
        <ul>
          {cartItems.map((item) => (
            <div className='product' key={item.id}>
              <li>
                    <div className='product-img card-img'>
                    <p>{item.img}</p>
                    </div>

                <div className='product-details'>
                    <div className='product-detail'>
                        <div className='product-title card-title'>
                        <p>{item.title}</p>
                        </div>

                        <div className='product-des card-des'>
                        <p>{item.des}</p>
                        </div>
                    </div>

                    <div className='aside'>
                        <div className='quantity-controls'>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>

                        <div className='product-price card-price'>
                            <p>${item.price}</p>
                        </div>
                    </div>

                </div>

                <div className='del-btn'>
                    <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <p className='total'>Total: ${totalSum.toFixed(2)}</p>

      <div className='checkout-btn'>
        <button>proceed to payment</button>
      </div>
    </div>
  );
}

export default Cart;