import Link from 'next/link';
import {
	SiCss3,
	SiFigma,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedis,
	SiStyledcomponents as SiStyledComponents,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiYarn,
} from 'react-icons/si';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import Layout from '../components/Layout';
import {ListItem} from '../components/ListItem';
import {age} from '../util/time';

export default function Home() {
	return (
		<Layout title="Home">
			<div className="space-y-4">
				<div className="flex items-center">
					<a
						target="_blank"
						href="https://www.google.com/maps/place/New+York,+NY/"
						rel="noreferrer"
						className="inline-flex space-x-1 items-center justify-center rounded-full px-2 py-1 no-underline transition-colors bg-white/5 text-opacity-70 hover:bg-white/10 border border-[#e6e6e61a]"
					>
						<span>
							<HiOutlineLocationMarker className="h-6 w-6" />
						</span>

						<span className="-mb-0.5">New York City, US &nbsp;</span>

						<span className="-mb-0.5 ml-1 block h-[6px] w-[6px] animate-pulse rounded-full bg-sky-400" />
					</a>
				</div>

				<h1 className="text-3xl font-bold sm:text-4xl md:text-6xl">
					Hey, I&apos;m leo ✌️
				</h1>
				<p className="text-white/50">
					Thanks for checking out my page! I&apos;m a{' '}
					<span suppressHydrationWarning>~{age.toPrecision(7)}</span> year old self-taught
					software engineer from the United States. I&apos;m currently
					building full stack web applications and exploring new technologies.
				</p>
			</div>

			<div className="space-y-4">
				<div>
					<h1 className="text-2xl sm:text-3xl font-semibold">Technologies 💻</h1>
					<p className="text-white/50">
					I use a wide range of technologies to create applications in the most
					efficient manner possible.
					</p>
				</div>
				<ul className="grid grid-cols-3 sm:grid-cols-4 gap-4 pt-2">
					<ListItem icon={SiNextDotJs} text="Next.js" />
					<ListItem icon={SiJavascript} text="Javascript" />
					<ListItem icon={SiRedis} text="Redis" />
					<ListItem icon={SiPostgresql} text="Postgres" />
					<ListItem icon={SiReact} text="React.js" />
					<ListItem icon={SiNodeDotJs} text="Node.js" />
					<ListItem icon={SiTypescript} text="TypeScript" />
					<ListItem icon={SiCss3} text="CSS" />
					<ListItem icon={SiHtml5} text="Html" />
					<ListItem icon={SiPython} text="Python" />
					<ListItem icon={SiFigma} text="Figma" />
					<ListItem icon={SiYarn} text="Yarn" />
					<ListItem icon={SiTailwindcss} text="TailwindCSS" />
					<ListItem icon={SiGit} text="Git" />
					<ListItem icon={SiStyledComponents} text="styled-components" />
					<ListItem icon={SiVercel} text="Vercel" />
				</ul>
			</div>
		</Layout>
	);
}
