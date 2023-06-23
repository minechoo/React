import pic1 from './img/pic1.jpg';
import pic2 from './img/pic2.jpg';
import pic3 from './img/pic3.jpg';
import './scss/style.scss';

function App() {
	//public폴더까지의 절대경로값
	const path = process.env.PUBLIC_URL;
	return (
		<>
			<div>
				<h1>src 폴더</h1>
				{/* src 폴더이서 임포트하는 방식은 각각 컴포넌트를 독립적으로 관리할때 용이*/}
				<img src={pic1} alt='pic1' />
				<img src={pic2} alt='pic2' />
				<img src={pic3} alt='pic3' />
			</div>
			<div>
				<h1>public폴더</h1>
				{/* 페이지에 연결되는 이미지가 많을때 */}
				<img src={path + '/img/pic1.jpg'} alt='pic1' />
				<img src={path + '/img/pic2.jpg'} alt='pic2' />
				<img src={path + '/img/pic3.jpg'} alt='pic3' />
			</div>
		</>
	);
}

export default App;
