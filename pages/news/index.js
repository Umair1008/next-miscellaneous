import React from "react";

export default function News({ data }) {
	return (
		<div className="content">
			<h1>News</h1>
			<br />
			<div>
				<h2>{data}</h2>
			</div>
		</div>
	);
}

export async function getStaticProps(context) {
	console.log("Running News getStaticProps", context.previewData);
	return {
		props: {
			data: context.preview
				? "List of Draft Articles"
				: "List of published articles",
		},
	};
}
