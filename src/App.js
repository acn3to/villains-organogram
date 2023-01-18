import Header from './components/Header'
import TextField from './components/TextField'

function App() {
  return (
    <div className="App">
      <Header />
      <TextField label="Nome" placeholder="Digite o nome" />
      <TextField label="Anime" placeholder="Digite o anime" />
      <TextField label="Imagem" placeholder="Selecione um arquivo" />
      <TextField label="Organização" placeholder="Digite a organização" />
    </div>
  )
}

export default App
