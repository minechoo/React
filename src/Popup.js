import React from 'react';
import { useState, useEffect } from 'react';

const popupStyle = {
	width: 600,
	height: 300,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#555',
	fontSize: '36px',
	color: '#fff',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	gap: '20px',
};

function Popup({ setIsPop }) {
	let [Data, setData] = useState(0);
	//의존성배열이 비어있는 useEffect문 (컴포넌트 생성을 캐치)
	//실사례1 - 외부데이터를 패칭하는 무거운 함수를 처음 한범만 호출해야할때
	//-실사례2 - window 객체에 이벤트 바인딩할때(브라우저 스크롤, 리사이즈 이벤트 연결)
	useEffect(() => {
		console.log('팝업 컴포넌트 생성');
	}, []);
	//의존성배열에 특정 State값이 등록되어 있는 useEffect문 (컴포넌트의 특정 state값 변경을 캐치)
	//실사례 - 외부 패칭 데이터를 이벤트가 발생할때마다 계속 변경할때마다 로딩 이미지 출력할때
	useEffect(() => {
		console.log('state 변경');
	}, [Data]);
	//의존성배열이 비어있는 상태에서 특정함수가 리턴되는 useEffect문 (컴포넌트의 소멸을 캐치)
	//실사례 - 특정 팝업 제거시 스크롤바 다시 보이기
	useEffect(() => {
		return () => {
			console.log('컴포넌트 소멸');
		};
	}, []);

	return (
		<aside style={popupStyle}>
			{/* 자기자신을 닫아주는 스테이트가 자기가 아닌 부모컴포넌트에 있으므로 부모 컴포넌트로 부터 스테이트 변경함수를 props로 전달받아 호출 */}
			<button onClick={() => setIsPop(false)}>close</button>

			<p>{Data}</p>
			<button onClick={() => setData(++Data)}>plus</button>
			<button onClick={() => setData(Data - 1)}>minus</button>
		</aside>
	);
}

export default Popup;

/*
  useEffect
  - 컴포넌트의 생명주기를 관장하는 hook
  - life cylce: 생성(mount), 변경 (state change), 소멸(unmount)
  - useEffect(실행할 함수,[의존성배열])

	생명주기
  - 의존성 배열이 비어있으면 해당 구문은 처음 컴포넌트가 마운트 되었을때 한번만 실행
  - 의존성 배열에 특정 state가 등록되어 있으면 해당 state가 변경될때마다 실행
  - 의존성 배열이 비어있는 상태에서 함수가 리턴되면 해당 함수는 컴포넌트가 언마운트 될때 한번만 실행
*/
