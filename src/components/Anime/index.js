import './Anime.css';

import hexToRgba from 'hex-to-rgba';
import React from 'react';

import Villain from '../Villain';

const Anime = ({ villains, anime, onDelete, changeColor, onFavorite }) => {
	return (
		villains.length > 0 && (
			<section className="anime" style={{ backgroundColor: hexToRgba(anime.color, '0.6') }}>
				<input
					onChange={(e) => changeColor(e.target.value, anime.id)}
					value={anime.color}
					type="color"
					className="input-color"
				/>
				<h3 style={{ borderColor: anime.color }}>{anime.name}</h3>
				<div className="villains">
					{villains.map((villain) => {
						return (
							<Villain
								backgroundColor={anime.color}
								key={villain.id}
								villain={villain}
								onDelete={onDelete}
								onFavorite={onFavorite}
							/>
						);
					})}
				</div>
			</section>
		)
	);
};

export default Anime;
