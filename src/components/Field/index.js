import './Field.css';

import React from 'react';

const Field = ({ type = 'text', onChange, label, inputValue, required, placeholder }) => {
	const onTyping = (event) => {
		onChange(event.target.value);
	};

	return (
		<div className={`field field-${type}`}>
			<label>{label}</label>
			<input
				type={type}
				value={inputValue}
				onChange={onTyping}
				required={required}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Field;
