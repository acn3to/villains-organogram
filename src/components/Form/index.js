import './Form.css'

import React from 'react'

import TextArea from '../TextArea'
import TextField from '../TextField'

const Form = () => {
  return (
    <section className="form">
      <form action="">
        <h2>Preencha os dados para criar o card do vilão</h2>
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
      </form>
    </section>
  )
}

export default Form
