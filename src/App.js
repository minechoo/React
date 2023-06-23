import './scss/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
	return (
		<>
			<p className='txt1'>Hello</p>
			<p className='txt2'> world!</p>
			<FontAwesomeIcon icon={faHouse} />
			<FontAwesomeIcon icon={faEnvelope} />
		</>
	);
}

export default App;
