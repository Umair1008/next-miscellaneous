import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/layout.css";

function MyApp({ Component, pageProps }) {
	if (Component.getLayout)
		return Component.getLayout(<Component {...pageProps} />);

	return (
		<>
			<Head>
				<title>My Next.js Application</title>
				<meta name="description" content="My Next.js Application" />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
