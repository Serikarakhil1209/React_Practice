import React, { Component } from 'react'
import './Product.css'
export default class Product extends Component {
  render() {
    console.log(this.props.Product_Data)
    return (
        <div id='main'>
        {
          this.props.Product_Data?.map((items, index) => {
            return (
    
              <div className='card' key={index}>
                <img src={items.image} alt="photo" />
                <h1>{items.title}</h1>
                <h2>{items.price}</h2>
              </div>
             
            );
          })
        }
      </div>
    )
  }
}
