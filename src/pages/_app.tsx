import React, {useState, useEffect, ReactNode, StrictMode} from 'react';
import {AppProps} from 'next/app';
import Link from 'next/link';
import {Router} from 'next/router';
import NProgress from 'nprogress';
import {Squash as Hamburger} from 'hamburger-react';
import {AnimatePresence, motion} from 'framer-motion';
import {Toaster} from 'react-hot-toast';
import {Analytics} from '@vercel/analytics/react';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../../public/fonts/general-sans/css/general-sans.css';
import 'nprogress/nprogress.css';

NProgress.configure({showSpinner: false});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({Component, pageProps, router}: AppProps) {
	const [mobileMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(old => !old);
	};

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
			return;
		}

		document.body.style.overflow = 'unset';
	}, [mobileMenuOpen]);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		setMenuOpen(false);
	}, [router.pathname]);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const navLinks = (
		<>
			<NavLink href="/" closeMenu={closeMenu}>
				<code className="text-sm">~/</code>
			</NavLink>
			<NavLink href="/talk" closeMenu={closeMenu}>
				<code className="text-sm">~/talk</code>
			</NavLink>
		</>
	);

	const [hasScrolled, setHasScrolled] = useState(false);
	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const listener = () => {
			setHasScrolled(window.scrollY > 20);
		};

		document.addEventListener('scroll', listener);

		return () => {
			document.removeEventListener('scroll', listener);
		};
	}, []);

	return (
		<StrictMode>
			<Toaster
				position="bottom-right"
				reverseOrder={false}
				toastOptions={{
					style: {
						background: '#363636',
						color: '#fff',
						border: '1px solid hsla(0, 0%, 90%, 0.1)',
						userSelect: 'none',
					},
				}}
			/>

			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{opacity: 0, y: -10}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0}}
						className="fixed inset-0 z-10 py-24 px-8 space-y-4 backdrop-blur sm:hidden"
					>
						<div className="max-w-4xl mx-auto">
							<h1 className="text-5xl font-bold">Menu</h1>
							<div className="mt-6">
								<ul className="grid grid-cols-1">
									<li>{navLinks}</li>
								</ul>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="overflow-hidden sticky top-0 z-30 h-32 transition-all sm:hidden">
				<div
					className={` ${
						hasScrolled || mobileMenuOpen ? 'mt-0' : 'mt-10 mx-5'
					} relative bg-gray-900 transition-all ${
						hasScrolled || mobileMenuOpen ? 'rounded-none' : 'rounded-lg'
					}`}
				>
					<div
						className={`flex justify-start transition-colors space-x-2 pr-5 ${
							mobileMenuOpen ? 'bg-gray-900' : 'bg-transparent'
						}`}
					>
						<button
							type="button"
							className="block relative z-50 px-2 text-gray-500 transition-all py-2"
							onClick={toggleMenu}
						>
							<Hamburger
								toggled={mobileMenuOpen}
								size={20}
								color="currentColor"
							/>
						</button>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-4xl py-10 px-5">
				<div className="hidden items-center space-x-2 sm:flex mx-auto max-w-3xl">
					<nav className="flex-1">
						<ul className="flex space-x-8">{navLinks}</ul>
					</nav>
				</div>
				<AnimatePresence mode="wait">
					<motion.div
						key={router.asPath}
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
					>
						<div className="mx-auto max-w-3xl space-y-12 sm:py-24">
							<Component {...pageProps} />
						</div>

						<footer className="mx-auto mt-20 max-w-3xl border-t-2 border-neutral-900/10 p-4 py-10 opacity-50 dark:border-white/10">
							<h1 className="text-3xl font-bold">Leo Wang</h1>
							<p>Software Engineer • {new Date().getFullYear()}</p>
						</footer>
					</motion.div>
				</AnimatePresence>
			</div>
			<Analytics />
		</StrictMode>
	);
}

const navLinkClassName = 'cursor-pointer text-2xl hover:opacity-70';

export function NavLink(props: {
	children: ReactNode;
	href: string;
	closeMenu?: () => void;
}) {
	return (
		<Link href={props.href} passHref>
			<p className={navLinkClassName} onClick={props.closeMenu}>
				{props.children}
			</p>
		</Link>
	);
}
