import './TextField.css'

import React from 'react'

const TextField = (props) => {
  const onTyping = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input
        type="text"
        value={props.inputValue}
        onChange={onTyping}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default TextField
