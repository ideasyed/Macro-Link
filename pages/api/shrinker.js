import { nanoid } from "nanoid";
import { createClient } from "@astrajs/collections";

export default async (req, res) => {
	try {
		switch (req.method) {
			case "GET":
				if (req.query.id) {
					const result = await dbQuery(req.query.id);
					return res.status(200).json(result);
				}
				break;
			case "POST":
				if (req.body && req.body.links) {
					const result = await dbUpdate(req.body);
					const fullURL = new URL(
						`${
							process.env.NODE_ENV === "development"
								? "http"
								: "https"
						}://${req.headers.host}/${result}`
					);
					return res.status(200).json({ alias: result, fullURL });
				}
		}
	} catch (e) {
		console.error(e);
		return res.status(400);
	}
};

export const config = {
	api: {
		bodyParser: {
			sizeLimit: "1mb",
		},
	},
};

async function getClient() {
	const client = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});
	return client.namespace("macro_link").collection("shortenedLinks");
}

async function dbQuery(id) {
	const client = await getClient();
	// Execute a query
	const result = await client.findOne({ id: { $eq: id } });
	if (result && result.links) {
		return {
			links: JSON.parse(result.links),
			description:
				result.description || "Thank you for using MacroLinks!",
		};
	}
}

async function dbUpdate({ links, description }) {
	const client = await getClient();
	const id = nanoid(5);
	// Execute a query
	await client.create({
		id,
		links: JSON.stringify(links),
		description,
	});
	return id;
}
