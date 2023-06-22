// const App = ()=> {
// 	return (
// 		<>
// 			<h1 id='title'>Hello2</h1>
// 			<h2 className='title2'>world</h2>
// 		</>
// 	);
// }

const App = () => (
	<>
		<h1 id='title'>Hello2</h1>
		<h2 className='title2'>world</h2>
	</>
);

export default App;

/**
 * 컴포넌트 파일생성시 규칙
 * -함수명은 대문자로 생성
 * - 해당함수를 JSX를 리턴해야함
 * - 해당함수를 export 시켜야 함
 * - 하나의 컴포넌트 함수는 복수요소의 JSX를 리턴할 수 없음
 * - 복수계의 요소를리턴하고 싶을때는 무조건 wrapping 태그로 감싸야함 단수계에는 괄호생략가능
 * - 중첩되는 태그없이 복수요소의 JSX를 리턴하고싶으면 fregment활용<></>
 * - 클래스명을 입력할시에는 clsaaName이라고 표기(class 객체지향 활용하는 예약어이기때문에 사용불가)
 */
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

RealDOM - 실제돔
- html태그를 이용해서 구조를 만들면 브라우저가 이를 해석해서 실제 DOM형태로 만들로 화면에 갠더링하는 형태

Virtual DOM - 가상돔
-실제 브라우저레서 리얼돔으로 변환하기전 메모리상에서 DOM구조를 가상으로 만들어서 기존의 DOM구조의 차이점을 분석
-기존 DOM과 변경되는 부분을 수정해서 최종적으로 리얼돔으로 출력하는 형태

JSX
-리액트에서 자체적으로 가상돔을 편하게 생성해주는 문법체계
(실제로는 자바스크립트로 돔을 만들지만 개발자의 사용성을 위해 HTML표현방식을 채택)
*/
