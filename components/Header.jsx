import Link from "next/link";

const Header = (props) => {
	return (
		<header className="pt-2 mb-6 md:pt-16 md:mb-10">
			<div className="container flex items-center justify-between pb-2 mx-auto border-b">
				<Link href="/">
					<a>
						<h1 className="text-2xl duration-200 cursor-pointer hover:-rotate-3 hover:scale-110">
							Next Blog
						</h1>
					</a>
				</Link>

				<nav>
					<ul className="flex items-center gap-2">
						<li>
							<Link href="/">
								<a className="px-2 py-1 duration-200 rounded-xl hover:bg-lime-500 hover:text-white">
									Home
								</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a className="px-2 py-1 duration-200 rounded-xl hover:bg-lime-500 hover:text-white">
									About
								</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
