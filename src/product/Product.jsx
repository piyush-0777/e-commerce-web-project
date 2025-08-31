import React from 'react'
import './Product.css';

import Card from '../component/Card';

const Product = ({products}) => {
 
  return (
    <div className='product-container' key={"hello"}>

      {products && products.map((e)=>{
        return<Card
        
        img= {e.img}
        title = {e.title}
        newPrice = {e.newPrice}
        />
      }) }
    
   

    
    </div>

  )
}

export default Product
