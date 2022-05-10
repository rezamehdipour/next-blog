import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Libreries
import axios from "axios";
import _ from "lodash";

const post = (props) => {
	const router = useRouter();
	const [post, setPost] = useState(props.post);

	// componentDidMount
	useEffect(() => {
		if (_.isEmpty(post)) {
			router.push("/");
		}
	}, []);

	return (
		<main>
			<div className="container mx-auto">
				{_.isEmpty(post) && (
					<h2 className="text-center">Post not found! returning to home page ...</h2>
				)}
				{!_.isEmpty(post) && (
					<>
						<div className="mb-5">
							<img
								src="https://picsum.photos/800/320"
								alt="post image"
								className="w-full rounded"
							/>
						</div>
						<div className="mb-4">
							<h2 className="text-3xl font-bold capitalize md:text-5xl">{post.title}</h2>
						</div>
						<div>
							<p className="text-xl">{post.body}</p>
						</div>
					</>
				)}
			</div>
		</main>
	);
};

export default post;

export async function getServerSideProps(props) {
	const postId = props.query.postId;
	const numbersRegex = /^\d+$/;
	let post = {};

	// If postId was a number
	if (numbersRegex.test(postId)) {
		try {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
			const data = response.data;
			if (!_.isEmpty(data)) {
				post = {
					id: data.id,
					title: data.title,
					body: data.body,
				};
			}
		} catch (error) {
			console.log("This error happend when we was trying to fetch post data :", error);
		}
	}

	return {
		props: {
			post,
		},
	};
}
