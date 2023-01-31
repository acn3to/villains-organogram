import './Dropdown.css'

import React from 'react'

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label htmlFor="">{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
