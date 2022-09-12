// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.setPreviewData({ user: "Umair" });
	res.redirect(`${req.query.redirect}`);
	// res.end("Preview mode enabled");
}
