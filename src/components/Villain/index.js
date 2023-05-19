import './Villain.css';

import React from 'react';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Villain = ({ villain, backgroundColor, onDelete, onFavorite }) => {
	const favorite = () => {
		onFavorite(villain.id);
	};

	const propsFavorite = {
		size: 25,
		onClick: favorite,
	};

	return (
		<div className="villain">
			<AiFillCloseCircle size={25} className="delete" onClick={() => onDelete(villain.id)} />
			<div className="header" style={{ backgroundColor: backgroundColor }}>
				<img src={villain.image} alt={villain.name} />
			</div>
			<div className="description">
				<h4>{villain.name}</h4>
				<h5>Organização: {villain.organisation}</h5>
				<p>{villain.description}</p>
				<div className="favorite">
					{villain.favorite ? (
						<AiFillHeart {...propsFavorite} color="#ff0000" />
					) : (
						<AiOutlineHeart {...propsFavorite} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Villain;
