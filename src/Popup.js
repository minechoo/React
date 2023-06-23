import React from 'react';
const popupStyle = {
	width: 600,
	height: 300,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#555',
	fontSize: '36px',
	color: '#fff',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};

function Popup() {
	return <aside style={popupStyle}>popup</aside>;
}

export default Popup;
