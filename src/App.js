import { useState } from 'react';

import Anime from './components/Anime';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
	const [animes, setAnimes] = useState([
		{
			name: 'Naruto',
			color: '#F6AD22',
		},
		{
			name: 'Dragon Ball Z',
			color: '#F6E100',
		},
		{
			name: 'One Piece',
			color: '#CC4853',
		},
		{
			name: 'Bleach',
			color: '#F1A959',
		},
		{
			name: 'Full Metal Alchemist',
			color: '#A20B0B',
		},
		{
			name: 'Boku no Hero Academia',
			color: '#1B54D9',
		},
	]);

	const [villains, setVillains] = useState([]);

	const handleNewVillain = (villain) => {
		setVillains([...villains, villain]);
	};

	const handleDeleteVillain = () => {
		console.log('deleteVillain called');
	};

	const handleChangeAnimeColor = (color, name) => {
		setAnimes(
			animes.map((anime) => {
				if (anime.name === name) {
					anime.color = color;
				}
				return anime;
			}),
		);
	};

	return (
		<div className="App">
			<Header />
			<Form onVillainRegistered={handleNewVillain} animes={animes} />
			{animes.map((anime) => (
				<Anime
					key={anime.name}
					anime={anime}
					villains={villains.filter((villain) => villain.anime === anime.name)}
					onDelete={handleDeleteVillain}
					changeColor={handleChangeAnimeColor}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
