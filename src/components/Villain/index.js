import './Villain.css'

import React from 'react'

const Villain = (props) => {
  return (
    <div className="villain">
      <div className="header">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="footer">
        <h4>{props.name}</h4>
        <h5>Organização: {props.organisation}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Villain
