import Link from 'next/link';

export default function Thanks() {
	return (
		<div className="space-y-4 py-10">
			<h1 className="text-5xl font-bold">Thank you!</h1>
			<p className="opacity-80">
				I'll be in touch soon. Thanks for reaching out!
				<br />
				<br />– leo
			</p>
			<div className="flex justify-end">
				<button className="pt-32">
					<Link href="/talk">
						<a className="hover:opacity-70">Go Back {'>'}</a>
					</Link>
				</button>
			</div>
		</div>
	);
}