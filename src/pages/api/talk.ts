import {DISCORD_WEBHOOK} from '../../server/constants';

export default async function handler(req, res) {
	const body = req.body;

	try {
		await fetch(DISCORD_WEBHOOK, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				content: `**New message from (${body.name})!**`,
				embeds: [
					{
						description: body.message,
						author: {
							name: body.email,
						},
						fields: [
							{
								name: 'ip',
								value:
									req.headers['x-forwarded-for'] ??
									req.socket.remoteAddress ??
									'unknown!?',
							},
						],
					},
				],
			}),
		});
		res.status(200).end();
		return {
			_redirect: '/thanks',
		};
	} catch (err) {
		console.error(err);
		return res.status(500).json({
			success: false,
			error: err.message,
		});
	}
}
