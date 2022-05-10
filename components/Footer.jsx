const Footer = (props) => {
	return (
		<footer className="mt-12">
			<div className="container p-4 mx-auto text-center border-t md:p-8">
				<p>
					Copyright &copy;{" "}
					<a
						href="https://www.linkedin.com/in/rezamehdipour/"
						target="_blank"
						className="font-bold text-lime-500"
					>
						Reza Mehdipour
					</a>{" "}
					- 2022
				</p>
			</div>
		</footer>
	);
};

export default Footer;
