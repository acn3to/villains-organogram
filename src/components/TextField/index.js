import './TextField.css'

import React from 'react'

const TextField = (props) => {
  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default TextField
