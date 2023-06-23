import Popup from './Popup';
import { useState } from 'react';

function App() {
	const [Colors, setColors] = useState(['red', 'green', 'blue']);

	// if (Colors.indexOf() === 2) color = ;

	return (
		<>
			<ul>
				{Colors.map((color, idx) => {
					return (
						<li key={idx} style={{ color: color }}>
							{color}
						</li>
					);
				})}
			</ul>
			<button
				onClick={() => {
					const newColors = [...Colors];
					newColors[2] = 'aqua';
					setColors(newColors);
				}}
			>
				세번째 목록의 색상을 aqua로 변경
			</button>
		</>
	);
}

export default App;
/*
	State (상태값)
	- 리액트에서 컴포넌트의 화면 출력(rendering)을 담당하는 중요 정보값을 담는 그릇
	- 컴포넌트안에서 State값이 변경되면 해당 컴포넌트 화면이 자동으로 재랜더링됨 (함수가 재호출)
	- state에 담기는 정보값이 원시형이 아닌 배열이나 객체같은 참조형 자료이면 무조건 전개연산자로 복사본을 만들어서 변경처리 (불변성유지)
	- 리액트에서 state에 불변성을 유지하는 이유는 원본가 바뀔 복사본을 비교 대조해서 화면을 재 랜더링하기 때문
	
	State사용법
	1. 리액트로부터 useState라는 state생성해주는 전용 기능을 import (hook) : hook은 무조건 컴포넌트 함수 내부에서 호출되어야함
	2. useState 함수를 통해서 State와 State를 변경해주는 함수를 비구조화할당으로 받음
	3. 해당 State값을 무조건 State전용 변경함수를 통해서만 변경가능

*/
