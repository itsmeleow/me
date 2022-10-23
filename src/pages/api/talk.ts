import {z} from 'zod';
import {NextApiResponse, NextApiRequest} from 'next';
import {DISCORD_WEBHOOK} from '../../server/constants';

const schema = z.object({
	name: z.string(),
	email: z.string().email(),
	body: z.string().max(500).min(2),
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const body = schema.parse(req.body);

	const result = await fetch(DISCORD_WEBHOOK, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			content: `**New message from (${body.name})!**`,
			embeds: [
				{
					description: body.body,
					author: {
						name: body.email,
					},
					fields: [
						{
							name: 'ip',
							value:
								req.headers['x-forwarded-for'] ??
								req.connection.remoteAddress ??
								'unknown!?',
						},
					],
				},
			],
		}),
	});

	if (result.status >= 400) {
		return res.status(500).send({success: false});
	}

	if (req.headers['content-type'] === 'application/json') {
		return res.status(200).json(res);
	}
}
