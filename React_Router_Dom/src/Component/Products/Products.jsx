
import React from 'react'
import Data from './Data'
import Product from '../Product/Product'

function Products() {
   const  p = Data
 
  return (
    <div>
        <Product ProductData = {p}/>
    </div>
  ) 
}

export default Products