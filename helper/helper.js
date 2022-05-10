// function isInViewport(element) {
// 	const rect = element.getBoundingClientRect();
// 	return (
// 		rect.top >= 0 &&
// 		rect.left >= 0 &&
// 		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
// 	);
// }
function isInViewport(element, offset = 0) {
	const top = element.getBoundingClientRect().top;
	return top + offset >= 0 && top - offset <= window.innerHeight;
}

export { isInViewport };
