import Link from "next/link";
import { useState } from "react";

// Libraries
import { LazyLoadImage } from "react-lazy-load-image-component";

// Components
import ThreeDotsLoader from "../components/ThreeDotLoader";

const ThreeDotsLoaderStyles = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	zIndex: "-1",
	height: "150px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const postFakeImageStyles = {
	width: "100%",
	aspectRatio: "3 / 1",
};

const Post = ({ id, title, body, reference = null }) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	// Apply limits to post body and convert that to somehow a preview
	let bodyCharactersLimit = 100;
	let postBody = body.substr(0, bodyCharactersLimit);
	postBody = postBody.charAt(0).toUpperCase() + postBody.slice(1); // Capitalize first letter
	if (body.length > bodyCharactersLimit) postBody = postBody + " ..."; // Add '...' to the end of post body

	return (
		<Link href={`/post/${id}`}>
			<a className="duration-200 rounded shadow-lg hover:bg-lime-500 hover:text-white " ref={reference}>
				<div className="relative mb-3">
					<ThreeDotsLoader style={ThreeDotsLoaderStyles} />
					{!imageLoaded && <div style={postFakeImageStyles}></div>}
					<LazyLoadImage
						src="https://picsum.photos/800/320"
						alt="random image"
						afterLoad={() => setImageLoaded(true)}
					/>
				</div>

				<div className="px-3 pb-3">
					<div className="mb-2">
						<h6 className="text-2xl font-bold capitalize md:text-3xl">{title}</h6>
					</div>
					<div className="">
						<p className="sm:text-xl ">{postBody}</p>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Post;
