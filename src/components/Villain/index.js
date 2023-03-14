import './Villain.css'

import React from 'react'

const Villain = ({ name, image, organisation, description }) => {
  return (
    <div className="villain">
      <div className="header">
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>Organização: {organisation}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Villain
