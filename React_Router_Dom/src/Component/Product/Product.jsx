import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';
function Product({ ProductData }) {
  console.log(ProductData);
  return (
    <div id='main'>
      {
        ProductData?.map((items, index) => {
          return (
            <Link >
            <div className='card' key={index}>
              <img src={items.image} alt="photo" />
              <h1>{items.title}</h1>
              <h2>{items.price}</h2>
            </div>
            </Link>
          );
        })
      }
    </div>
  );
}

export default Product;
