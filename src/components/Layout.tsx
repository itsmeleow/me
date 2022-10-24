import React, { ReactNode } from 'react';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';

type Props = {
	children?: ReactNode;
	title?: string;
};

export default function Layout({ children, title }: Props) {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" lang="en" />
				<link
					rel="icon"
					type="image/png"
					href="https://avatars.githubusercontent.com/u/68571519?v=4"
				/>
				<title>{title} | leo</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div>{children}</div>
		</div>
	);
}
