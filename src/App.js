import Header from './components/Header'
import TextArea from './components/TextArea'
import TextField from './components/TextField'

function App() {
  return (
    <div className="App">
      <Header />
      <TextField label="Nome" placeholder="Digite o nome" />
      <TextField label="Anime" placeholder="Digite o anime" />
      <TextField label="Imagem" placeholder="Selecione um arquivo" />
      <TextField label="Organização" placeholder="Digite a organização" />
      <TextArea
        label="Descrição"
        name="Description"
        id="description"
        cols="50"
        rows="4"
      />
    </div>
  )
}

export default App
