import './scss/style.scss';

function App() {
	const colors = ['aqua', 'lightgreen', 'hotpink', 'orange', 'skyblue'];

	return (
		<div className='wrap'>
			<h1>color chart</h1>
			{colors.map((color, idx) => {
				return (
					<article key={idx}>
						<div className='bg' style={{ backgroundColor: color }}></div>
						<div className='txt'>{color}</div>
					</article>
				);
			})}
		</div>
	);
}

export default App;

/**
 * 불변성(immutable) : 원형을 변형시키지 않으면서 원본을 유지한채로 복사본을 변경루 비교하는 형태
 * -리액트에서는 원본대비 변경된 부분을 비교해서 화면은 랜더링하기때문데 불변성유지가 필수
 * - 리액트에서는 원본과 복사본이 있어야함
 * - 참조형 자료를 변경할때에는 무조건 전개연산자로 deep copy
 * - 특정요소를 반복처리하기 위해서는 무조건 map처리
 * - JSX문법 안쪽에서는 map외의 반복문 사용불가
 * - JSX로 반복되는 요소를 동적으로 만들때에는 무조건 key값으로 고유값을 등록(리액트로 하여금 반복도는 요소를 개별적으로 인지시키기 위한)
 */
