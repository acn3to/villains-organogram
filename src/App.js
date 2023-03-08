import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  const [villains, setVillains] = useState([])

  const onNewVillain = (villain) => {
    setVillains([...villains, villain])
  }

  return (
    <div className="App">
      <Header />
      <Form onVillainRegistered={onNewVillain} />
    </div>
  )
}

export default App
