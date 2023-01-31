import './Form.css'

import React from 'react'

import Button from '../Button'
import Dropdown from '../Dropdown'
import TextArea from '../TextArea'
import TextField from '../TextField'

const Form = () => {
  const animes = [
    'Naruto',
    'Dragon Ball Z',
    'One Piece',
    'Bleach',
    'Full Metal Alchemist',
    'Boku no Hero Academia',
  ]

  const onSave = (event) => {
    event.preventDefault()
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do vilão</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o nome do vilão"
        />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <TextField
          required={true}
          label="Organização"
          placeholder="Digite o nome da organização"
        />
        <Dropdown label="Anime" itens={animes} />
        <TextArea
          label="Descrição"
          name="Description"
          id="description"
          cols="50"
          rows="4"
        />
        <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form
