import './Form.css'

import React from 'react'

import TextArea from '../TextArea'
import TextField from '../TextField'
import Dropdown from '../Dropdown'

const Form = () => {
  const animes = [
    'Naruto',
    'Dragon Ball Z',
    'One Piece',
    'Bleach',
    'Full Metal Alchemist',
    'Boku no Hero Academia',
  ]

  return (
    <section className="form">
      <form action="">
        <h2>Preencha os dados para criar o card do vilão</h2>
        <TextField label="Nome" placeholder="Digite o nome do vilão" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <TextField
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
      </form>
    </section>
  )
}

export default Form
