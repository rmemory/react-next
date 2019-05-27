import App, {Container} from 'next/app';
import Page from '../components/Page';
// https://nextjs.org/docs#custom-app
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
	// next.js lifecycle method, runs before render()
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
		  pageProps = await Component.getInitialProps(ctx);
		}
		// this exposes the query params to each page
		// which could then (if it wishes) pass the query
		// params to each Component. See pages/update.js
		// for an example
		pageProps.query = ctx.query;
		return { pageProps };
	}

	render() {
		// Each "page" in next.js is a Component
		const { Component, apollo, pageProps } = this.props;

		return (
			<Container>
				<ApolloProvider client={apollo}>
`					<Page>
						<Component {...pageProps} />
					</Page>
`				</ApolloProvider>
			</Container>
		)
	}
}

// withData gives us the "apollo" prop
export default withData(MyApp);