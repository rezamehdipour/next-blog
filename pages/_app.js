import Head from "next/head";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// CSS
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Next Blog</title>
				<meta name="description" content="A simple blog created with Next.js" />
			</Head>

			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
