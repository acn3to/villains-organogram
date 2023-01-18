import './TextArea.css'

import React from 'react'

const TextArea = (props) => {
  return (
    <div className="text-area">
      <label htmlFor="">{props.label}</label>
      <textarea
        name={props.name}
        id={props.id}
        cols={props.cols}
        rows={props.rows}
      ></textarea>
    </div>
  )
}

export default TextArea
