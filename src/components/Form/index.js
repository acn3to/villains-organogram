import './Form.css';

import React, { useState } from 'react';

import Button from '../Button';
import Dropdown from '../Dropdown';
import TextArea from '../TextArea';
import TextField from '../TextField';

const Form = ({ onVillainRegistered, animes }) => {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [organisation, setOrganisation] = useState('');
	const [anime, setAnime] = useState('');
	const [description, setDescription] = useState('');

	const onSave = (event) => {
		event.preventDefault();
		onVillainRegistered({
			name,
			image,
			organisation,
			anime,
			description,
		});
		setName('');
		setImage('');
		setOrganisation('');
		setAnime('');
		setDescription('');

		console.log(name, image, description, organisation, anime);
	};

	return (
		<section className="form">
			<form onSubmit={onSave}>
				<h2>Preencha os dados para criar o card do vilão</h2>
				<TextField
					required={true}
					label="Nome"
					placeholder="Digite o nome do vilão"
					inputValue={name}
					onChange={(value) => setName(value)}
				/>
				<TextField
					label="Imagem"
					placeholder="Digite o endereço da imagem"
					inputValue={image}
					onChange={(value) => setImage(value)}
				/>
				<TextField
					required={true}
					label="Organização"
					placeholder="Digite o nome da organização"
					inputValue={organisation}
					onChange={(value) => setOrganisation(value)}
				/>
				<Dropdown
					label="Anime"
					items={animes}
					value={anime}
					onChange={(value) => setAnime(value)}
				/>
				<TextArea
					label="Descrição"
					name="Description"
					id="description"
					rows="4"
					type="text"
					inputValue={description}
					onChange={(value) => setDescription(value)}
				/>
				<Button>Criar card</Button>
			</form>
		</section>
	);
};

export default Form;
