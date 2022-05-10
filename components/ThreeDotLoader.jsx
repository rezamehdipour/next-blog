const ThreeDotsLoader = (props) => {
	return (
		<svg
			version="1.1"
			id="L4"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 100 100"
			enableBackground="new 0 0 0 0"
			xmlSpace="preserve"
			{...props}
		>
			<circle fill="#cbd5e1" stroke="none" cx="33" cy="50" r="6">
				<animate
					attributeName="opacity"
					dur="1s"
					values="0;1;0"
					repeatCount="indefinite"
					begin="0.1"
				></animate>
			</circle>
			<circle fill="#cbd5e1" stroke="none" cx="50" cy="50" r="6">
				<animate
					attributeName="opacity"
					dur="1s"
					values="0;1;0"
					repeatCount="indefinite"
					begin="0.2"
				></animate>
			</circle>
			<circle fill="#cbd5e1" stroke="none" cx="66" cy="50" r="6">
				<animate
					attributeName="opacity"
					dur="1s"
					values="0;1;0"
					repeatCount="indefinite"
					begin="0.3"
				></animate>
			</circle>
		</svg>
	);
};

export default ThreeDotsLoader;
