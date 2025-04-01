import React from 'react'
import "./Button.css"

const Button = (props) => {
  const {enabled, onClick} = props
  
  return (
    <button onClick={(event) => onClick(event)} className={`button ${enabled == false ? "disabled" : ""}`}>
      {props.children}
    </button>
  )
}

export default Button