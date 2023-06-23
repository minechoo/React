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
					//기존 Colors에 들어가 있는 참조형 자료인 배열값을 Deep Copy
					const newColors = [...Colors];
					//원본은 유지한채 복사가된 배열값을 변경
					newColors[2] = 'aqua';
					//변경된  복사된 배열값을 state변경함수로 변경처리
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

	hooks
	- 리액트16버전에서 새로 나온 개념으로 리액트에서 자주쓰이는 상태관리, 생명주기 관련 내용들을 내장함수처럼 미리 만들어놓은 라이브러리 형태의 기능 모음
	- 리액트 hook의 등장으로 인해서 기존의 클래스형 컴포넌트 제작방식에서 함수형 컴포넌트 제작방식으로 리액트의 작업 난이도가 낮아지면서 인기가 올라감

	hook이 나오게된 배경
	react16이전버전에서는 클래스형 작업방식, 함수형 작업방식
	클래스형 작업방식 : 여러가지 클래스를 제작해서 서로 상속을 작업을 하다보니 코드의 가독성은 비교적 좋으나 반복코드 작업을 많이 했었어야 됨
	함수형 작업방식 : hoc(high order component) 함수에 인수로 함수를 전달해서 새로운 함수를 리턴하는 방식, 반복 코드는 적으로 코드 가독성이 많이 떨어짐
	함수형 작업방식의 문제점인 hoc를 활용하는 기능들을 라이브러리처럼 hook라는 개념으로 미리 만들어서 배포
	2016년도 이후부터 hook의 등장으로 class형 방식에 비해 함수형 컴포넌트 방식의 효율성이 증대

	리액트의 hook 삼대장 (useState, useEffect, useRef)
	성능관리를 위한 hook (memo, useMemo, useCallback)
	양방향 데이터 바인딩을 위한 hook (forwardRef, useImperativeHandle)

*/
