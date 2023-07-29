import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button><img src={props.logo} alt="logobtn" /> <span>{props.text}</span></button>
    </div>
  )
}

export default Button
