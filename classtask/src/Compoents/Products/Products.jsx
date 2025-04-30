import React from 'react'
import Product from '../Product/Product'

function Products() {
  const Pro = [
    {
      id:1,
      name:"laptop",
      cost:55000
    },
    {
      id:2,
      name: "mobile",
      cost:1500
    }
  ]
  return (
    <div>
     <Product  data={Pro} />
    </div>
  )
}

export default Products