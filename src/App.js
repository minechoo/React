function App() {
	return (
		<div className='App'>
			<h1>Hello2</h1>
		</div>
	);
}

export default App;
/*
function App() {
document.createElement('h1').innerHTML('Hello2')
}
*/
/*
SSR vs CSR
SSR - Server Side Rendering
-페이지 이동시마다 일일이 서버쪽에 출력할 HTML파일을 요청
-장점 = 초기 로딩속도 빠름, 검색엔진에 최적화(SEO에 좋음)
-단점 = 페이지 이동할때마다 서버쪽에 요청해야하기때문에 깜박거리면서 로딩이 되는 사용성이 안 좋음

CSR - Client Side Rendering (SPA Single Page Application)
- 초기에 빈 html 화일을 가져오고 화면에 출력된 모든 정보데이터를 Chunk단위로 구성된 자바스크립트 파일을 모두 가져옴
-장점 = 같은 페이지안에서 서로 다른 컨텐츠를 실시간으로 변경하면서 출력하므로 동적인 컨텐츠 화면변경이 자유롭고 페이지간 로딩이 없음(사용성 좋음)
-단점 = 한번에 데이터를 불러와야 되기때문데 초기로딩속도가 SSR 방식에 비해 느림
검색엔진에 비최적화
*/
