import App, {Container} from 'next/app';
import Page from '../components/Page';
// https://nextjs.org/docs#custom-app

class MyApp extends App {
	render() {
		// Each "page" in next.js is a Component
		const { Component } = this.props;

		return (
			<Container>
				<Page>
					<Component />
				</Page>
			</Container>
		)
	}
}

export default MyApp;