import './TextField.css'

import React from 'react'

const TextField = ({ onChange, label, inputValue, required, placeholder }) => {
  const onTyping = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className="text-field">
      <label>{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={onTyping}
        required={required}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextField
