/* import Header from './Header';
   import Footer from './Footer';
	 import Section from './Section';*/
//import { Header, Footer, Section } from './Common';
// const name = '김영희';
// const class1 = 'box';

import './scss/style.scss';

function App() {
	const handleClick = (e) => {
		e.target.innerText = '버튼';
	};
	return (
		<>
			<div className='wrap'>
				<button
					onClick={(e) => {
						console.log('clicked');
						e.target.innerText = '버튼';
					}}
				>
					button1
				</button>
				<button onClick={handleClick}>button2</button>
			</div>
		</>
	);
}

export default App;
