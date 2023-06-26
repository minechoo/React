import { useState, useRef } from 'react';
import './scss/style.scss';

/**
 * 아래와 같이 코드작성을 하면 App컴포넌트가 호출되고 나야지만 article요소가
 * 동적으로 생기는 구조이기때문에
 * const article = document.querySelector('article');
 * 위의 구문은 현재 에러 발생(아직 없는 요소를 탐색학때문)
 * 이유-현재 리액트
 */

function App() {
	console.log('app called');
	let [Rotate, setRotate] = useState(0);
	//const article = document.querySelector('article');
	const article = useRef(null);
	console.log(article);

	//let custom = 0;
	let custom = useRef(0);

	const prev = () => {
		setRotate(--Rotate);
		// article.style.transform = `rotate(${45 * Rotate}deg)`;
		article.current.style.transform = `rotate(${45 * Rotate}deg)`;
	};
	const next = () => {
		setRotate(++Rotate);
		article.current.style.transform = `rotate(${45 * Rotate}deg)`;
	};
	return (
		<>
			<div className='wrap'>
				{/* <button onClick={() => setRotate(Rotate - 45)}>왼쪽으로 회전</button>
				<button onClick={() => setRotate(Rotate + 45)}>오른쪽으로 회전</button>
				<article style={{ transform: `rotate(${Rotate}deg)` }}></article> */}
				<button onClick={() => console.log(article)}>버튼</button>
				<button onClick={prev}>왼쪽으로 회전</button>
				<button onClick={next}>오른쪽으로 회전</button>
				<button onClick={() => console.log(++custom.current)}>plus</button>
				<button onClick={() => console.log(--custom.current)}>minus</button>
				{/* 참조하고 있는 가상돔요소를 useRef로 만든 참조객체와 연결 */}
				<article ref={article}></article>
			</div>
		</>
	);
}

export default App;

/*
	const 변수 = useRef(초기값);
	-변수에는 useRef의 초기값을 활용해서 빈 참조객체가 생성됨
	-이때 해당 객체안에는 current키값이 자동생성되면서 초기값이 담김
	-이렇게 만들어진 빈 참조객체를 원하는 가상돔 요소에 ref속성을 지정해서 참조 가능
	-참조된 가상요소는 이벤트 발생시 자유롭게 호출가능
	-useRef는 보통 이벤트 연결시 제어해야 되는 가상돔을 참조할때 주로 쓰임

	사용순서
	1- 변수에 useRef(null)을 대입해서 일단 빈 참조객체 생성
	2- 원하는 가상돔요소에 ref={참조객체}로 연결
	3. 참조객체명.current형식으로 참조된 가상돔 요소를 자유롭게 호출

	useRef의 다른 사용예
	- 컴포넌트안쪽에서 측정 값을 변경하고 싶은데 해당값 변경시 컴포넌트를 재호출 하고 싶지 않을때
	- 컴포넌트가 다른 state에 의해서 재호출 되더라도 특정 값을 초기화시키고 싶지 않을때
*/
