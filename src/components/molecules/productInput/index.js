import React from 'react'
import './style.css'

import { Label, Value } from '../../atoms/input/index'

const ProductInput = (props) => {
  return(
    <div className="product-attribute">
      <Label 
      id={props.id}
      attribute={props.attribute} />
      <Value id={props.id}  />
    </div>
  )
}

export default ProductInput 
