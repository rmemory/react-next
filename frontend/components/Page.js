import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

// This is the top level Page for all Components.
// Themes, width, height, global styles show up here
// Header includes Nav. 
export default class Page extends Component {
	render() {
		return (
			<div>
				<Meta />
				<Header />
				{this.props.children}
			</div>
		)
	}
}