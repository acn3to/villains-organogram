import './Form.css'

import React, { useState } from 'react'

import Button from '../Button'
import Dropdown from '../Dropdown'
import TextArea from '../TextArea'
import TextField from '../TextField'

const Form = (props) => {
  const animes = [
    'Naruto',
    'Dragon Ball Z',
    'One Piece',
    'Bleach',
    'Full Metal Alchemist',
    'Boku no Hero Academia',
  ]

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [anime, setAnime] = useState('')
  const [description, setDescription] = useState('')

  const onSave = (event) => {
    event.preventDefault()
    props.onVillainRegistered({
      name,
      image,
      organisation,
      anime,
      description,
    })
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do vilão</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o nome do vilão"
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onChange={(value) => setImage(value)}
        />
        <TextField
          required={true}
          label="Organização"
          placeholder="Digite o nome da organização"
          value={organisation}
          onChange={(value) => setOrganisation(value)}
        />
        <Dropdown
          label="Anime"
          itens={animes}
          value={anime}
          onChange={(value) => setAnime(value)}
        />
        <TextArea
          label="Descrição"
          name="Description"
          id="description"
          cols="50"
          rows="4"
          type="text"
          value={description}
          onChange={(value) => setDescription(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form
