import React from 'react';

function Card(props) {
	console.log(props);
	return (
		<article>
			<div className='bg' style={{ backgroundColor: props.color }}></div>
			<div className='txt'>{props.color}</div>
		</article>
	);
}

export default Card;
