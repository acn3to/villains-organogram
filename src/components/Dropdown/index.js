import './Dropdown.css'

import React from 'react'

const Dropdown = ({ label, onChange, required, value, itens }) => {
  return (
    <div className="dropdown">
      <label htmlFor="">{label}</label>
      <select
        onChange={(event) => onChange(event.target.value)}
        required={required}
        value={value}
      >
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
