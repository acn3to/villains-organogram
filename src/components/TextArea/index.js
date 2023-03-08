import './TextArea.css'

import React from 'react'

const TextArea = (props) => {
  const onTyping = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <div className="text-area">
      <label htmlFor="">{props.label}</label>
      <textarea
        name={props.name}
        id={props.id}
        cols={props.cols}
        rows={props.rows}
        onChange={onTyping}
      ></textarea>
    </div>
  )
}

export default TextArea
