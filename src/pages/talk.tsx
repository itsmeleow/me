import {useRouter} from 'next/router';
import toast from 'react-hot-toast';
import Layout from '../components/Layout';

export default function Talk() {
	const router = useRouter();
	return (
		<Layout title="Talk">
			<div className="space-y-8">
				<div className="space-y-2">
					<h1 className="text-4xl font-semibold">Let's talk 💬</h1>
					<p className="text-md text-white/50">
						Leave a message through the form below or contact me through my
						socials.
					</p>
				</div>

				<div className="grid grid-cols-1 space-y-4">
					<div className="card">
						<form
							className="space-y-6 uppercase grid grid-cols-1"
							method="POST"
							onSubmit={async event => {
								event.preventDefault();

								const values = Object.fromEntries(
									new FormData(event.target as HTMLFormElement).entries(),
								);
								const options = {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
									},
									body: JSON.stringify(values),
								};

								toast.promise(
									fetch('/api/talk', options)
										.then(res => {
											console.log(res);
										})
										.then(() => {
											router.push('/thanks');
										})
										.catch(err => console.log(err)),
									{
										loading: 'Loading...',
										success: 'Success',
										error: (error: Error) =>
											error?.message ?? 'Something went wrong...',
									},
								);

								// const response = fetch('/api/talk', options);

								// await toast
								// 	.promise(response, {
								// 		loading: 'Sending...',
								// 		success: 'Success!',
								// 		error: (error: Error) =>
								// 			error?.message ?? 'Something went wrong...',
								// 	})
								// 	.then(async () => router.push('/thanks'))
								// 	.catch(() => null);
							}}
						>
							<label className="grid grid-cols-1 space-y-1">
								<span>Name</span>
								<input
									required
									type="name"
									name="name"
									id="name"
									className="block w-full rounded-md  py-1 px-4 font-sans text-lg focus:outline-none focus:ring focus:ring-gray-800 bg-white/5"
								/>
							</label>
							<label className="grid grid-cols-1 space-y-1">
								<span>Email Address</span>
								<input
									required
									type="email"
									name="email"
									id="email"
									className="block w-full rounded-md  py-1 px-4 font-sans text-lg focus:outline-none focus:ring focus:ring-gray-800 bg-white/5"
								/>
							</label>
							<label className="grid grid-cols-1 space-y-1">
								<span>Your Message</span>
								<textarea
									required
									rows={5}
									name="body"
									minLength={2}
									id="body"
									className="block w-full resize-none rounded-md py-1 px-4 font-sans text-lg focus:outline-none focus:ring focus:ring-gray-800 bg-white/5"
								/>
							</label>
							<div className="">
								<button
									type="submit"
									className="btn bg-white/5 hover:bg-white/10"
								>
									<span>Submit</span>
								</button>
							</div>
						</form>
					</div>

					<div className="card space-y-2">
						<h1 className="text-xl font-semibold">Links</h1>
						<div>
							<a
								className="btn relative inline-flex space-x-2 items-center justify-center no-underline bg-white/5 hover:bg-white/10"
								target="_blank"
								rel="noreferrer"
								href="https://github.com/itsmeleow"
							>
								<span>
									<svg
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
										className="icon w-6 h-6"
										viewBox="0 0 24 24"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
									</svg>
								</span>
								<span>Github</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
