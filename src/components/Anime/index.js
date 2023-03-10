import Villain from '../Villain'
import './Anime.css'

import React from 'react'

const Anime = (props) => {
  return (
    <section
      className="anime"
      style={{ backgroundColor: props.secondaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <Villain />
    </section>
  )
}

export default Anime
