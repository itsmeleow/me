import Link from 'next/link';
import Layout from '../components/Layout';

export default function Error500() {
	return (
		<Layout title="Error 500">
			<div className="flex flex-col space-y-4 items-center justify-center sm:flex-row sm:space-y-20 py-10">
				<h1 className="text-9xl font-bold">500</h1>
				<p className="ml-2 text-2xl opacity-80">Internal Server Error.</p>
			</div>
			<div className="flex justify-end">
				<button className="pt-32">
					<Link href="/">
						<a className="hover:opacity-70">Back to Home {'>'}</a>
					</Link>
				</button>
			</div>
		</Layout>
	);
}
