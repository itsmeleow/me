import React, {useState, useEffect, ReactNode, StrictMode} from 'react';
import {AppProps} from 'next/app';
import Link from 'next/link';
import {Router} from 'next/router';
import NProgress from 'nprogress';
import {Squash as Hamburger} from 'hamburger-react';
import {AnimatePresence, motion} from 'framer-motion';
import {Toaster} from 'react-hot-toast';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
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
		<div className="space-y-8">
			<NavLink href="/" closeMenu={closeMenu}>
				Home
			</NavLink>
			<NavLink href="/talk" closeMenu={closeMenu}>
				Talk
			</NavLink>
		</div>
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
					duration: 5000,
					style: {
						background: '#363636',
						color: '#fff',
						border: '1px solid hsla(0, 0%, 90%, 0.1)',
						userSelect: 'none',
					},
				}}
			/>
			<div className="max-w-4xl mx-auto">
				<AnimatePresence>
					{mobileMenuOpen && (
						<motion.div
							initial={{opacity: 0, y: -10}}
							animate={{opacity: 1, y: 0}}
							exit={{opacity: 0}}
							className="fixed inset-0 z-30 py-24 px-8 space-y-4 backdrop-blur"
						>
							<div className="max-w-4xl mx-auto">
								<h1 className="text-5xl font-bold">MENU</h1>
								<div className="mt-4">
									<ul className="grid grid-cols-1">
										<li>{navLinks}</li>
									</ul>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<div className="overflow-hidden sticky top-0 z-30 h-32 transition">
					<div
						className={`border border-white/10 ${
							hasScrolled || mobileMenuOpen
								? 'mt-0 border-transparent bg-transparent'
								: 'mt-10 mx-5 bg-deep/50'
						} relative transition-all ${
							hasScrolled || mobileMenuOpen ? 'rounded-none' : 'rounded-lg'
						}`}
					>
						<div
							className={`pl-7 flex justify-end transition-colors -space-x-2 ${
								mobileMenuOpen ? '' : ''
							}`}
						>
							<button
								type="button"
								className="block relative z-50 px-2 text-gray-500 transition-all"
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

				<div className="px-8">
					<main className="mx-auto mt-16">
						<Component {...pageProps} />
					</main>
				</div>
			</div>
		</StrictMode>
	);
}

const navLinkClassName = 'cursor-pointer text-2xl';

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
