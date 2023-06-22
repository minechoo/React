import './scss/style.scss';

function App() {
	const boxStyle = {
		width: 300,
		height: 300,
		backgroundColor: 'grey',
	};

	const colorChange = (e, color) => {
		e.target.style.backgroundColor = color;
	};

	return (
		<div className='wrap'>
			<div className='box' style={boxStyle} onClick={(e) => colorChange(e, 'blue')}></div>
		</div>
	);
}

export default App;
