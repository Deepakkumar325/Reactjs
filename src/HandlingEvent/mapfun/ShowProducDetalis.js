import ProductsData from './ProductsData'
import Product from './Product'

import React from 'react'
 
 
function ShowProducDetalis () {
  const productsComponent = ProductsData.map(item => <Product  key={item.id}  product={item}/> )
  return (
     <>
    <p>{productsComponent}</p>  
     </>
  )
}
export default ShowProducDetalis;