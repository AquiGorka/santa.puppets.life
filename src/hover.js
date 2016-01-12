import React from 'react';

export default React.createClass({
	onHover() {
		this.setState({
			hover: true
		});
	},
	onOut() {
		this.setState({
			hover: false
		});
	},
	//
	getInitialState() {
		return {
			hover: false
		};
	},
	//
	render() {
		var myStyles = this.props.style;
		if (this.state.hover) {
			myStyles = this.props.hover;
		}
		return (
			<div style={myStyles} onMouseOver={this.onHover} onMouseOut={this.onOut}>
				{this.props.children}
			</div>
		);
	}
});