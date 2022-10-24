import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Layout from '../components/Layout';
import { SiGithub } from 'react-icons/si';

export default function Talk() {
	const router = useRouter();
	return (
		<Layout title="Talk">
			<div className="space-y-8">
				<div className="space-y-2">
					<h1 className="text-2xl text-white font-bold sm:text-3xl">
						Let's talk 💬
					</h1>
					<p className="text-white/50">
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
								<span>{SiGithub({ className: 'h-6 w-6' })}</span>
								<span>Github</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
