import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class LDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link
						rel="icon"
						type="image/png"
						href="https://avatars.githubusercontent.com/u/68571519?v=4"
					/>
                    <meta
						name="description"
						content="my personal website"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}