import './TextArea.css';

import React from 'react';

const TextArea = ({ onChange, label, name, id, rows, inputValue }) => {
	const onTyping = (event) => {
		onChange(event.target.value);
	};

	return (
		<div className="text-area">
			<label>{label}</label>
			<textarea name={name} id={id} rows={rows} onChange={onTyping} value={inputValue}></textarea>
		</div>
	);
};

export default TextArea;
