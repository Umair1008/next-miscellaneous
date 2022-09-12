import Head from "next/head";
import React from "react";
import Footer from "../components/layout/Footer";

export default function About() {
	return <h1 className="content">About</h1>;
}

About.getLayout = function PageLayout(page) {
	return (
		<>
			<Head>
				<title>About Page</title>
				<meta name="description" content="About Page" />
			</Head>
			{page}
			<Footer />
		</>
	);
};
