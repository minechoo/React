import React from 'react';

function Card({ color, idx }) {
	//console.log(props);
	return (
		<article>
			<div className='bg' style={{ backgroundColor: color }}></div>
			<div className='txt'>{color}</div>
		</article>
	);
}

export default Card;
