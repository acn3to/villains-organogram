import React from 'react'
import './Dropdown.css'

const Dropdown = (props) => {
  console.log(props.itens)
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