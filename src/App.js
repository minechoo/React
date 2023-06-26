import { useState } from 'react';
import './scss/style.scss';
import Popup from './Popup';

function App() {
	const [IsPop, setIsPop] = useState(false);
	return (
		<>
			<button onClick={() => setIsPop(true)}>팝업 열기</button>
			{IsPop && <Popup setIsPop={setIsPop} />}
		</>
	);
}

export default App;
