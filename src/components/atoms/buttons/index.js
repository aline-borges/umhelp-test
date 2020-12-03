import React from 'react'
import './style.css'

export const EditButton = (props) => {
  return(
    <button 
    id={props.id}
    className="edit-button"
    onClick={props.onClick}
    >
      <img 
      className="edit-icon" 
      src={props.src} 
      alt={props.alt} />
    </button>
  )
}

const Button = (props) => {
  return(
    <button 
    id={props.id}
    className="button"
    onClick={props.onClick}
    >
      {props.text}
      <img 
      className="button-icon" 
      src={props.src} 
      alt={props.alt} />
    </button>
  )
}

export default Button 
