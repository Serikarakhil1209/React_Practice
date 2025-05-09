import React, { Component } from 'react'
import Data from './Data'
import Product from '../Product/Product'

export default class Products extends Component {
  render() {
    // console.log(Data)  
    return (
      <div>
        <Product Product_Data = {Data}/>
      </div>
    )
  }
}
