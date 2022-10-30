import {useRouter} from 'next/router';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Layout from '../components/Layout';
import {SiGithub, SiDiscord} from 'react-icons/si';
import {BiSend} from 'react-icons/bi';

export default function Talk() {
	const router = useRouter();
	return (
		<Layout title="Talk">
			<div className="space-y-8">
				<div className="space-y-2">
					<h1 className="text-2xl text-white font-bold sm:text-3xl">
						Let&apos;s talk 💬
					</h1>
					<p className="text-white/50">
						Leave a message through the form below or contact me through my
						socials.
					</p>
				</div>

				<div className="grid grid-cols-1 space-y-4">
					<div className="card font-semibold">
						<form
							className="space-y-6 uppercase grid grid-cols-1"
							method="POST"
							onSubmit={async event => {
								event.preventDefault();

								const values = JSON.stringify(
									Object.fromEntries(
										new FormData(event.target as HTMLFormElement).entries(),
									),
								);
								const options = {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
									},
									body: values,
								};

								await toast
									.promise(fetch('/api/talk', options), {
										loading: 'Loading...',
										success: 'Success',
										error: (error: Error) =>
											error?.message ?? 'Something went wrong...',
									})
									.then(async () => router.push('/thanks'))
									.catch(error => console.log(error.message));
							}}
						>
							<label className="grid grid-cols-1 space-y-1">
								<span>Name</span>
								<input
									required
									type="name"
									name="name"
									id="name"
									className="block input w-full rounded-md  py-1 px-4 font-sans text-lg focus:outline-none focus:ring focus:ring-gray-600 bg-white/5"
								/>
							</label>
							<label className="grid grid-cols-1 space-y-1">
								<span>Email Address</span>
								<input
									required
									type="email"
									name="email"
									id="email"
									className="block w-full rounded-md  py-1 px-4 font-sans text-lg focus:outline-none focus:ring focus:ring-gray-600 bg-white/5"
								/>
							</label>
							<label className="grid grid-cols-1 space-y-1">
								<span>Your Message</span>
								<textarea
									required
									rows={5}
									name="message"
									minLength={2}
									id="message"
									className="block w-full resize-none rounded-md py-1 px-4 font-sans text-lg focus:outline-none focus:ring focus:ring-gray-600 bg-white/5"
								/>
							</label>
							<div className="">
								<button
									type="submit"
									className="btn rounded-full inline-flex space-x-2 items-center justify-center bg-white/5 hover:bg-white/10"
								>
									<span>Submit</span>
									<span>{BiSend({className: 'h-4 w-4'})}</span>
								</button>
							</div>
						</form>
					</div>

					<div className="card space-y-2">
						<h1 className="text-xl font-semibold">Links</h1>
						<div className="flex-row space-x-2">
							<Link
								href="https://github.com/itsmeleow"
								target="_blank"
								rel="noreferrer"
							>
								<a
									className="btn relative inline-flex space-x-2 items-center justify-center no-underline bg-white/5 hover:bg-white/10 "
									target="_blank"
									rel="noopener noreferrer"
								>
									<span>{SiGithub({className: 'h-6 w-6'})}</span>
									<span className="font-medium">Github</span>
								</a>
							</Link>
							<Link href="https://discord.com/users/574773140392116228">
								<a
									className="btn relative inline-flex space-x-2 items-center justify-center no-underline bg-white/5 hover:bg-white/10"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span>{SiDiscord({className: 'h-6 w-6'})}</span>
									<span className="font-medium">Discord</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
