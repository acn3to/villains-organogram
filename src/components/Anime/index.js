import './Anime.css'

import React from 'react'

import Villain from '../Villain'

const Anime = ({ villains, name, primaryColor, secondaryColor }) => {
  return (
    villains.length > 0 && (
      <section className="anime" style={{ backgroundColor: secondaryColor }}>
        <h3 style={{ borderColor: primaryColor }}>{name}</h3>
        <div className="villains">
          {villains.map((villain) => (
            <Villain
              backgroundColor={primaryColor}
              key={villain.name}
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
