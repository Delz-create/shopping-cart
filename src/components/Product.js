import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { IoIosCart } from "react-icons/io";


function Product({ onAddToCart }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error(error))
    }, [])

  return (
    <div className='Product-section'>
        <div className='Product-section_header'>
            <h1>Products</h1>
        </div>

        <div className='Main-products'>
            {
                products.map((product) => (
                    <div className='card' key={product.id}>
                        <div  className='card-img'>
                            <p>{product.img}</p>
                        </div>


                        <div className='card-title'>
                            <p>{product.title}</p>
                        </div>

                        <div className='card-des'>
                            <p>{product.des}</p>
                        </div>

                        <div className='card-footer'>
                            <div className='card-price'>
                                <p>${product.price}</p>
                            </div>

                            <div className='card-btn'>
                                <button onClick={() => onAddToCart(product)}>add to cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Product;
