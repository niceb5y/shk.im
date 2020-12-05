import Head from "next/head";

const App = ({ Component, pageProps }) => (
	<div>
		<Head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
		</Head>
		<Component {...pageProps} />
	</div>
);

export default App;
