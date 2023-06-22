/* import Header from './Header';
   import Footer from './Footer';
	 import Section from './Section';*/
//import { Header, Footer, Section } from './Common';
// const name = '김영희';
// const class1 = 'box';

import './scss/style.scss';

function App() {
	const noArg = (e) => {
		e.target.innerText = 'noname';
	};
	const handleClick = (e, txt) => {
		e.target.innerText = txt;
	};
	return (
		<div className='wrap'>
			<button
				onClick={(e) => {
					console.log('clicked');
					e.target.innerText = '버튼';
				}}
			>
				button1
			</button>

			{/* 인수를 전달해야되는 함수를 이벤트 연결할때는 wrapping함수로 아래처럼 호출 */}
			<button onClick={(e) => handleClick(e, '안녕')}>button2</button>

			<button onClick={noArg}>button3</button>
		</div>
	);
}

export default App;
