import './TextField.css'

import React from 'react'

const TextField = (props) => {
  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input
        type="text"
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default TextField
