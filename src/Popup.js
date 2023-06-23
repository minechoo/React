import React from 'react';

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
};

function Popup({ setIsPop }) {
	return (
		<aside style={popupStyle}>
			{/* 자기자신을 닫아주는 스테이트가 자기가 아닌 부모컴포넌트에 있으므로 부모 컴포넌트로 부터 스테이트 변경함수를 props로 전달받아 호출 */}
			<button onClick={() => setIsPop(false)}>close</button>
		</aside>
	);
}

export default Popup;
