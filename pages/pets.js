import React from "react";
// import Image from "next/image";
import img from "../public/1.jpg";

export default function Pets() {
	return (
		<div>
			<h1>Pets</h1>
			{/* <Image
				src={img}
				alt="pet"
				// width="280"
				// height="420"
				placeholder="blur"
			/> */}
			{["1", "2", "3", "4", "5"].map((path) => (
				<div key={path}>
					{/* <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" /> */}
					{/* <img src={`/${path}.jpg`} alt="pet" width={"280"} height="420" /> */}
				</div>
			))}
		</div>
	);
}
