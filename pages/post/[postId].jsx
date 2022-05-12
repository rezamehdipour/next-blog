import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Libreries
import axios from "axios";
import _ from "lodash";

const post = (props) => {
	const router = useRouter();
	const [post, setPost] = useState(props.post);

	// if `post` prop was empty!
	useEffect(() => {
		if (_.isEmpty(props.post)) {
			router.push("/");
		}
	}, []);

	return (
		<main>
			<div className="container mx-auto">
				<div className="mb-5">
					<img src="https://picsum.photos/800/320" alt="post image" className="w-full rounded" />
				</div>
				<div className="mb-4">
					<h2 className="text-3xl font-bold capitalize md:text-5xl">{post.title}</h2>
				</div>
				<div>
					<p className="text-xl">{post.body}</p>
				</div>
			</div>
		</main>
	);
};

export default post;

export async function getServerSideProps(context) {
	const postId = context.params.postId;
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

	// if post was not available, redirect the user to the homepage!
	if (_.isEmpty(post)) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			post,
		},
	};
}
