import React from 'react';
import Header from './header.js';
import Theater from './theater.js';
import Social from './social.js';
import Contact from './contact.js';

var styles = {
	app: {
		wrapper: {
			background: 'rgba(255,255,255,0.8)',
			boxShadow: '0 0 10px 1px #CCC',
			flexGrow: 1,
			display: 'flex',
			width: '100%',
			flexWrap: 'wrap',
			flexFlow: 'column',
			borderRadius: 5
		}
	}
};

var App = React.createClass({
	onShowContact() {
		this.setState({
			contact: true
		});
	},
	onHideContact() {
		this.setState({
			contact: false
		});
	},
	//
	getInitialState() {
		return {
			contact: false
		};
	},
	//
	render() {
		var contact = null;
		if (this.state.contact) {
			contact = <Contact onHideContact={this.onHideContact} />;
		}
		return (
			<div style={styles.app.wrapper}>
				{contact}
				<Header onShowContact={this.onShowContact} />
				<Theater />
				<Social />
			</div>
		);
	}
});

export default App;