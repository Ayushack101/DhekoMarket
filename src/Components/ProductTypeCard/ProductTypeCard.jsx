import React from 'react'
import "./ProductTypeCard.css"
const ProductTypeCard = ({Title,}) => {
  return (
    <div className='producttypecard'>
        <div className='cardHeading'>{Title}</div>
        <div className="cardselected"></div>
    </div>
  )
}

export default ProductTypeCard;