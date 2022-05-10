import { useState, useEffect, useRef } from "react";

// Libraries
import axios from "axios";

// Helper
import { isInViewport } from "../helper/helper";

// Components
import Header from "../components/Header";
import Post from "../components/Post";
import Footer from "../components/Footer";

const home = (props) => {
	const lastPostElement = useRef();
	const [uiLoading, setUiLoading] = useState(false);
	const loading = useRef(false);
	const setLoading = (value) => {
		setUiLoading(value);
		loading.current = value;
	};
	const [posts, setPosts] = useState(props.posts);
	const lastPostNumber = useRef(props.lastPostNumber);
	const postsCount = useRef(props.postsCount);

	const getNewPosts = async () => {
		try {
			// check if any posts left !
			if (lastPostNumber.current < postsCount.current) {
				setLoading(true);
				const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
				if (data.length > 0) postsCount.current = data.length; // Set `postsCount`
				lastPostNumber.current += 5;
				let newPosts = data.slice(0, lastPostNumber.current);
				setLoading(false);
				setPosts(newPosts);
			}
		} catch (error) {
			console.log(
				"This error happend when we were trying to fetch new posts from jsonplaceholderapi : ",
				error
			);
		}
	};

	const checkLastPostElementIsInViewport = () => {
		if (!loading.current) {
			if (isInViewport(lastPostElement.current, -50)) {
				getNewPosts();
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkLastPostElementIsInViewport);

		return () => {
			window.removeEventListener("scroll", checkLastPostElementIsInViewport);
		};
	}, []);

	return (
		<main>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					{posts.length > 0 &&
						posts.map(({ id, title, body }, index) => {
							if (posts.length === index + 1) {
								return (
									<Post
										key={id}
										id={id}
										title={title}
										body={body}
										reference={lastPostElement}
									/>
								);
							} else {
								return <Post key={id} id={id} title={title} body={body} />;
							}
						})}
					{uiLoading && (
						<div className="flex items-center justify-center">
							<img src="/dist/images/loading.gif" alt="loading" style={{ width: "100px" }} />
						</div>
					)}

					{posts.length < 1 && <h1>No Posts Available</h1>}
				</div>
			</div>
		</main>
	);
};

export default home;

export async function getServerSideProps(a) {
	let posts = [];
	let lastPostNumber = 0;
	let postsCount = 0;

	// Fetch posts data and set `posts`
	try {
		const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
		if (data.length > 0) postsCount = data.length; // Set `postsCount`
		posts = data.slice(0, 5);
	} catch (error) {
		console.log(
			"This error happend when we were trying to fetch posts from jsonplaceholderapi : ",
			error
		);
	}

	// Set `lastPostNumber`
	if (posts.length > 0) lastPostNumber = posts.length;

	return {
		props: {
			posts,
			lastPostNumber,
			postsCount,
		},
	};
}
