import './Dropdown.css'

import React from 'react'

const Dropdown = ({ label, onChange, required, value, items }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select
        onChange={(event) => onChange(event.target.value)}
        required={required}
        value={value}
      >
        <option value=""></option>
        {items.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
