import React from 'react';
import { useState } from 'react';

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
	return (
		<aside style={popupStyle}>
			{/* 자기자신을 닫아주는 스테이트가 자기가 아닌 부모컴포넌트에 있으므로 부모 컴포넌트로 부터 스테이트 변경함수를 props로 전달받아 호출 */}
			<button onClick={() => setIsPop(false)}>close</button>

			<p>{Data}</p>
			<button onClick={() => setData(++Data)}>plus</button>
			<button onClick={() => setData(--Data)}>minus</button>
		</aside>
	);
}

export default Popup;
