import './Anime.css';

import hexToRgba from 'hex-to-rgba';
import React from 'react';

import Villain from '../Villain';

const Anime = ({ villains, anime, onDelete, changeColor }) => {
	return (
		villains.length > 0 && (
			<section className="anime" style={{ backgroundColor: hexToRgba(anime.color, '0.6') }}>
				<input
					onChange={(e) => changeColor(e.target.value, anime.name)}
					value={anime.color}
					type="color"
					className="input-color"
				/>
				<h3 style={{ borderColor: anime.color }}>{anime.name}</h3>
				<div className="villains">
					{villains.map((villain, index) => {
						return (
							<Villain
								backgroundColor={anime.color}
								key={index}
								villain={villain}
								onDelete={onDelete}
							/>
						);
					})}
				</div>
			</section>
		)
	);
};

export default Anime;
