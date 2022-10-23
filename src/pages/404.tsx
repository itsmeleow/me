import Link from 'next/link';
import Layout from '../components/Layout';

export default function Error404() {
	return (
		<Layout title="Error 404">
			<div className="flex flex-col space-y-4 items-center justify-center sm:flex-row sm:space-y-20 py-10">
				<h1 className="text-9xl font-bold">404</h1>
				<p className="ml-2 text-2xl opacity-80">Page Not Found.</p>
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
