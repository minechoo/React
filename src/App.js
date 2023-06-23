import './scss/style.scss';
import Card from './Card';

function App() {
	const colors = ['aqua', 'lightgreen', 'hotpink', 'orange', 'skyblue'];

	return (
		<div className='wrap'>
			<h1>color chart</h1>
			{colors.map((color, idx) => {
				//부모요소에서 color, idx라는 props으로 Card 컴포넌트에 데이터 전달
				if (idx === 2) return <Card key={idx} color={color} idx={idx} width={'150px'} />;
				else return <Card key={idx} color={color} idx={idx} width={'300px'} />;
			})}
		</div>
	);
}

export default App;

/**
외부 컴포넌트 파일을 import 해서 연결시 특정 데이터 값을 전달하기 위한 위해서는 props을 통해 전달
기본적으로 리액트 단방향 데이터 바인딩(부모에서 자식으로 데이터 건달)
 */
