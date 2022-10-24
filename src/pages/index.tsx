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
import Layout from '../components/Layout';
import {ListItem} from '../components/ListItem';
import {age} from '../util/time';

export default function Home() {
	return (
		<Layout title="Home">
			<div className="space-y-16">
				<div className="space-y-2">
					<h1 className="text-3xl text-white font-bold sm:text-4xl md:text-6xl">
						Hey, I&apos;m leo ✌️
					</h1>
					<p className="text-white/50">
						Thanks for checking out my page. I&apos;m a{' '}
						<span>~{age.toPrecision(7)}</span> year old software engineer from
						the United States. I&apos;m currently interested in full stack web
						development. Get in touch with me at{' '}
						<Link href="/talk">
							<a className="font-bold hover:opacity-70">~/talk !</a>
						</Link>
					</p>
				</div>

				<div className="space-y-2">
					<h1 className="text-2xl sm:text-3xl font-semibold">
						Technologies 💻
					</h1>
					<p className="text-white/50">
						I use a wide range of technologies to create applications.
					</p>
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
			</div>
		</Layout>
	);
}
