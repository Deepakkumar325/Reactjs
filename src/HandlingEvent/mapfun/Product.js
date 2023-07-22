import React from 'react'

function Product (props){
    
  return (
  <>
  <center>
   <h2>{props.product.name}</h2>
   <p>{props.product.id}</p>
   <p>{props.product.prices}</p>
   <p>{props.product.description}</p></center>
   </>
  )
}
export default Product;
// Warning: Each child in a list should have a unique "key" prop.%s%s See  
// when you render the productdata you need to use the keyid 