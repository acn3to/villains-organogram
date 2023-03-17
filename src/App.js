import { useState } from 'react'

import Anime from './components/Anime'
import Form from './components/Form'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const animes = [
    {
      name: 'Naruto',
      primaryColor: '#FF8029',
      secondaryColor: '#F6AD22',
    },
    {
      name: 'Dragon Ball Z',
      primaryColor: '#CF8100',
      secondaryColor: '#F6E100',
    },
    {
      name: 'One Piece',
      primaryColor: '#9F402E',
      secondaryColor: '#CC4853',
    },
    {
      name: 'Bleach',
      primaryColor: '#DD7D2E',
      secondaryColor: '#F1A959',
    },
    {
      name: 'Full Metal Alchemist',
      primaryColor: '#810A0A',
      secondaryColor: '#A20B0B',
    },
    {
      name: 'Boku no Hero Academia',
      primaryColor: '#1F367D',
      secondaryColor: '#1B54D9',
    },
  ]

  const [villains, setVillains] = useState([])

  const onNewVillain = (villain) => {
    setVillains([...villains, villain])
  }

  return (
    <div className="App">
      <Header />
      <Form onVillainRegistered={onNewVillain} animes={animes} />
      {animes.map((anime) => (
        <Anime
          key={anime.name}
          name={anime.name}
          primaryColor={anime.primaryColor}
          secondaryColor={anime.secondaryColor}
          villains={villains.filter((villain) => villain.anime === anime.name)}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
