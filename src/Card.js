import React from 'react';

function Card({ color, idx, width }) {
	//console.log(props);
	return (
		<article style={{ width: width }}>
			<div className='bg' style={{ backgroundColor: color }}></div>
			<div className='txt'>{color}</div>
		</article>
	);
}

export default Card;
