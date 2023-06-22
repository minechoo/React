//하나의 파일에서 여려개의 컴포넌트 함수를 export 가능 (default키워드는 제거)
export function Header() {
	return (
		<header>
			<h1>Header</h1>
		</header>
	);
}

export function Footer() {
	return (
		<footer>
			<h1>footer</h1>
		</footer>
	);
}

export function Section() {
	return (
		<section>
			<h1>Layout</h1>
		</section>
	);
}
