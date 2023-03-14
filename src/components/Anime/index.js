import Villain from '../Villain'
import './Anime.css'

import React from 'react'

const Anime = (props) => {
  return (
    props.villain.length > 0 && (
      <section
        className="anime"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="villains">
          {props.villain.map((villain) => (
            <Villain
              name={villain.name}
              image={villain.image}
              organisation={villain.organisation}
              description={villain.description}
            />
          ))}
        </div>
      </section>
    )
  )
}

export default Anime
