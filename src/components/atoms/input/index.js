import React from 'react'
import './style.css'

export const Label = (props) => {
  return(
    <label id={props.id}>
      {props.attribute}
    </label>
  )
}

export const Value = (props) => {
  return(
    <input 
    id={props.id}
    className="product-value" />
  )
}

const Input = (props) => {
  return(
    <input 
    id={props.id}
    className="search-input" 
    placeholder={props.placeholder}
    />
  )
}

export default Input 
