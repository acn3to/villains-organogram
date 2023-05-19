import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Anime from './components/Anime';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
	const [animes, setAnimes] = useState([
		{
			id: uuidv4(),
			name: 'Naruto',
			color: '#F6AD22',
		},
		{ id: uuidv4(), name: 'Dragon Ball Z', color: '#F6E100' },
		{ id: uuidv4(), name: 'One Piece', color: '#CC4853' },
		{ id: uuidv4(), name: 'Bleach', color: '#F1A959' },
		{ id: uuidv4(), name: 'Full Metal Alchemist', color: '#A20B0B' },
		{ id: uuidv4(), name: 'Boku no Hero Academia', color: '#1B54D9' },
	]);

	const [villains, setVillains] = useState([]);

	const handleNewVillain = (villain) => {
		setVillains([...villains, villain]);
	};

	const handleDeleteVillain = (id) => {
		setVillains(villains.filter((villain) => villain.id !== id));
	};

	const handleChangeAnimeColor = (color, id) => {
		setAnimes(
			animes.map((anime) => {
				if (anime.id === id) {
					anime.color = color;
				}
				return anime;
			}),
		);
	};

	const handleCreateAnime = (newAnime) => {
		setAnimes([...animes, { ...newAnime, id: uuidv4() }]);
	};

	const handleFavorite = (id) => {
		setVillains(
			villains.map((villain) => {
				if (villain.id === id) villain.favorite = !villain.favorite;
				return villain;
			}),
		);
	};

	return (
		<div className="App">
			<Header />
			<Form
				createAnime={handleCreateAnime}
				onVillainRegistered={handleNewVillain}
				animes={animes}
			/>
			{animes.map((anime) => (
				<Anime
					key={anime.name}
					anime={anime}
					villains={villains.filter((villain) => villain.anime === anime.name)}
					onDelete={handleDeleteVillain}
					changeColor={handleChangeAnimeColor}
					onFavorite={handleFavorite}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
