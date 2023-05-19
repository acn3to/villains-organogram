import './Form.css';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';
import Dropdown from '../Dropdown';
import Field from '../Field';
import TextArea from '../TextArea';

const Form = ({ onVillainRegistered, animes, createAnime }) => {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [organisation, setOrganisation] = useState('');
	const [anime, setAnime] = useState('');
	const [description, setDescription] = useState('');
	const [animeName, setAnimeName] = useState('');
	const [animeColor, setAnimeColor] = useState('');

	const onSave = (event) => {
		event.preventDefault();
		const newVillain = {
			id: uuidv4(),
			favorite: false,
			name,
			image,
			organisation,
			anime,
			description,
		};
		onVillainRegistered(newVillain);
		setName('');
		setImage('');
		setOrganisation('');
		setAnime('');
		setDescription('');
	};

	return (
		<section className="form-container">
			<form onSubmit={onSave}>
				<h2>Preencha os dados para criar o card do vilão</h2>
				<Field
					required={true}
					label="Nome"
					placeholder="Digite o nome do vilão"
					inputValue={name}
					onChange={(value) => setName(value)}
				/>
				<Field
					label="Imagem"
					placeholder="Digite o endereço da imagem"
					inputValue={image}
					onChange={(value) => setImage(value)}
				/>
				<Field
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
			<form
				onSubmit={(event) => {
					event.preventDefault();
					createAnime({ name: animeName, color: animeColor });
				}}
			>
				<h2>Preencha os dados para criar um novo anime</h2>
				<Field
					required
					label="Nome"
					placeholder="Digite o nome do anime"
					inputValue={animeName}
					onChange={(value) => setAnimeName(value)}
				/>
				<Field
					required
					label="Cor"
					type="color"
					placeholder="Digite a cor do anime"
					inputValue={animeColor}
					onChange={(value) => setAnimeColor(value)}
				/>
				<Button>Criar um novo anime</Button>
			</form>
		</section>
	);
};

export default Form;
