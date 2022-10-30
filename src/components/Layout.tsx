import React, {ReactNode} from 'react';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';

type Props = {
	children?: ReactNode;
	title?: string;
};

export default function Layout({children, title}: Props) {
	return (
		<>
			<Head>
				<title>{title} | leo</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			{children}
		</>
	);
}
