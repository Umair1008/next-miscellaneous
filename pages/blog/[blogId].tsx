import Head from "next/head";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Blog({ title, description }: any) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<h1 className="content">Article</h1>
			<h1 className="content">
				ENV {process.env.NEXT_PUBLIC_ANALYTICS_ID}
			</h1>
		</div>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		fallback: false,
		paths: [{ params: { blogId: "1" } }],
	};
};

export const getStaticProps: GetStaticProps = async () => {
	const user = process.env.DB_USER;
	const password = process.env.DB_PASSWORD;
	console.log({ user, password });

	return {
		props: {
			title: "Article Title",
			description: "Article Description",
		},
	};
};
