import React from 'react';
import "./product.css"

function Product({ data }) {

    
  return (
    <div id='main'>
      {data?.map((val, index) => (
        <div id='hi'>
            <h1>{val.id}</h1>
            <h1>{val.name}</h1>
            <h1>{val.cost}</h1>
        </div>
      ))}
    </div>
  );
}

export default Product;
