import Popup from './Popup';
import { useState } from 'react';

function App() {
	//컴포넌트 함수 안쪽에서 특정 정보값을 지역변수에 담아놓으면
	//해당 함수가 호출될때마다 다시 초기값으로 갱신되는 문제가 발생
	//컴포넌트 함수안에서 특정정보값을 이밴트에 의해서 바꾸고
	//그 정보값을 토대로 JSX리턴해주는 함수를 다시 호출해서 재랜더링 해줄 필요가 있음
	//State: 컴포넌트 내부에서 특정정보값을 담아줌 - 해당 값이 바뀌면 컴포넌트 함수를 강제 재호출하면서 새로운 화면으로 갱신

	//useState 는 배열값을 리턴[인수로 전달한 값을 state에 담아서 첫번째값, 해당 state 를 변경할 수 있는 전용함수]
	const [IsPop, setIsPop] = useState(false);
	console.log(useState(false));

	const [Color, setColor] = useState('#333');

	return (
		<>
			<main className='wrap'>
				<h1
					style={{ color: Color }}
					onClick={() => {
						setIsPop(true);
					}}
				>
					메인 컨텐츠
				</h1>
				<button onClick={() => setColor('red')}>제목 글자색을 red로 변경</button>
				<button onClick={() => setColor('aqua')}>제목 글자색을 aqua로 변경</button>
			</main>
			{/* {IsPop ? <Popup /> : null} */}
			{IsPop && <Popup />}
		</>
	);
}

export default App;

/**
state (상태값)
리액트에서 컴포넌트의 화면 출력을 담당하는 종요정보값을 담는 그릇
-컴포넌트안에서 state 값이 변경되면 해당 컴포넌트 화면이 자동으로 재랜더링 됨(함수가 재호출)
State 사용법
1. 리액트로부터 useState 라는 State 생성해주는 전용 기능을 import(hook)
2.useState 함수를 통해서 State와 state를 변경해주는 함수극 비구조할당으로 받음
3.해당 State 갑승ㄹ
 */
