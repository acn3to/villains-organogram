import './TextArea.css'

import React from 'react'

const TextArea = ({ onChange, label, name, id, cols, rows }) => {
  const onTyping = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className="text-area">
      <label htmlFor="">{label}</label>
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        onChange={onTyping}
      ></textarea>
    </div>
  )
}

export default TextArea
