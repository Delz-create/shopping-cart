import React from 'react';

function Product({ onAddToCart }) {
    const products = [
        {
            id: 1,
            img: 'img',
            title: 'title',
            des: "lorem ipsom, fake text that is used for test subjects and not an actual text. so don't bother using it for normal projects.",
            price: 10000
        },
        {
            id: 2,
            img: 'img',
            title: 'title',
            des: "lorem ipsom,just like i said fake text that is used for test subjects and not an actual text. so don't bother using it for normal projects.",
            price: 15000
        },
        {
            id: 3,
            img: 'img',
            title: 'title',
            des: "lorem ipsom,and again it's just a fake ass text that is used for test subjects and not an actual text. so don't bother using it for normal projects.",
            price: 20000
        },
        {
            id: 4,
            img: 'img',
            title: 'title',
            des: "lorem ipsom, and again and again fake text that is used for test subjects and not an actual text. so don't bother using it for normal projects.",
            price: 100000
        },
        {
            id: 5,
            img: 'img',
            title: 'title',
            des: "lorem ipsom,agin it's fake text that is used for test subjects and not an actual text. so don't bother using it for normal projects.",
            price: 150000
        },
        {
            id: 6,
            img: 'img',
            title: 'title',
            des: "lorem ipsom, last time it's a fake text that is used for test subjects and not an actual text. so don't bother using it for normal projects.",
            price: 7000
        },
    ]

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