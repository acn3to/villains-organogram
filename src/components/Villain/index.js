import './Villain.css';

import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const Villain = ({ villain, backgroundColor, onDelete }) => {
	return (
		<div className="villain">
			<AiFillCloseCircle size={25} className="delete" onClick={onDelete} />
			<div className="header" style={{ backgroundColor: backgroundColor }}>
				<img src={villain.image} alt={villain.name} />
			</div>
			<div className="description">
				<h4>{villain.name}</h4>
				<h5>Organização: {villain.organisation}</h5>
				<p>{villain.description}</p>
			</div>
		</div>
	);
};

export default Villain;
