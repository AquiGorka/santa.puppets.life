import React from 'react';
import Stage from './stage.js';
import nsa from './nsajs/index.js';

var styles = {
	wrapper: {
		minHeight: 500,
		display: 'flex',
		flexGrow: 1,
		position: 'relative',
		borderBottom: '1px solid #FFF'
	},
	canvas: {
		wrapper: {
			width: '60%',
			borderBottomRightRadius: 5,
			display: 'flex',
			borderBottom: '1px solid #FFF'
		},
		realCanvas: {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: '25%',
			left: 0,
			display: 'flex',
			zIndex: 2
		}
	},
	qp: {
		wrapper: {
			borderLeft: '1px solid #EEE',
			flexGrow: 1,
			width: '40%',
			display: 'flex',
			background: '#FFF',
			marginBottom: 50
		},
		inner: {
			margin: '15px auto',
			background: '#FFF',
			maxWidth: 450,
			flexGrow: 1,
			backgroundImage: 'url(img/android-smartphone-clipart.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'containt',
			backgroundPosition: 'center center',
			textAlign: 'center',
			display: 'flex',
			flexWrap: 'wrap'
		},
		title: {
			width: '100%',
			textAlign: 'left',
			padding: '10px 0 15px 10px',
			fontSize: 20,
			fontFamily: 'Montserrat'
		},
		separator: {
			borderBottom: '3px solid #00AEFF',
			width: 105,
			height: 1,
			position: 'relative',
			top: 5,
			zIndex: 1
		},
		features: {
			wrapper1:{
				boxSizing: 'border-box',
				width: '50%',
				height: 80,
				display: 'flex',
				alignContent: 'center',
				flexWrap: 'wrap',
				textAlign: 'right',
				paddingRight: 60
			},
			wrapper2:{
				boxSizing: 'border-box',
				width: '50%',
				height: 80,
				display: 'flex',
				alignContent: 'center',
				flexWrap: 'wrap',
				textAlign: 'left',
				paddingLeft: 60
			},
			wrapper3:{
				boxSizing: 'border-box',
				width: '50%',
				height: 100,
				display: 'flex',
				alignContent: 'center',
				flexWrap: 'wrap',
				textAlign: 'right',
				paddingRight: 60
			},
			wrapper4:{
				boxSizing: 'border-box',
				width: '50%',
				height: 100,
				display: 'flex',
				alignContent: 'center',
				flexWrap: 'wrap',
				textAlign: 'left',
				paddingLeft: 60
			},
			title:{
				fontSize: 14,
				textTransform: 'uppercase',
				width: '100%'
			},
			text:{
				marginTop: 3,
				color: '#777',
				fontSize: 13,
				width: '100%'
			}
		},
		url: {
			wrapper: {
				flexGrow: 1,
				color: '#333',
				fontSize: 30,
				fontFamily: 'Montserrat'
			},
			protocol: {
				fontSize: 24,
				color: '#CCC',
				marginRight: 2,
				fontStyle: 'normal'
			},
			spinner: {
				flexGrow: 1,
				backgroundImage: 'url(./img/spinner.gif)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center center'
			}
		}
	},
	ghost: {
		position: 'absolute',
		zIndex: 1,
		bottom: 0,
		right: 0,
		height: 50,
		width: '40%',
		background: '#FFF'
	}
};

var QPUrl = (props) => {
	var content = (
		<div style={styles.qp.url.spinner}></div>
	);
	if (props.peerId) {
		content = (
			<div style={styles.qp.url.wrapper}>
				<span style={styles.qp.url.protocol}>http://</span>santa.ppts.co/{props.peerId}
			</div>
		);
	}
	return content;
};

var Theater = React.createClass({
	componentDidMount() {
		nsa.start().then((id) => {
			this.setState({
				peerId: id
			});
		});
	},
	getInitialState() {
		return {
			peerId: null
		};
	},
	//
	render() {
		return (
			<div style={styles.wrapper}>
				<div style={styles.canvas.realCanvas}>
					<Stage />
				</div>
				<div style={styles.canvas.wrapper}></div>
				<div style={styles.qp.wrapper}>
					<div style={styles.qp.inner}>
						<div style={styles.qp.title}>
							<div>Quick Play</div>
							<div style={styles.qp.separator}></div>
						</div>
						
						<div style={styles.qp.features.wrapper1}>
							<div style={styles.qp.features.title}>Pure & Simple</div>
							<div style={styles.qp.features.text}>Everyone can come<br />in and play!</div>
						</div>
						<div style={styles.qp.features.wrapper2}>
							<div style={styles.qp.features.title}>Wireless</div>
							<div style={styles.qp.features.text}>No cables needed!<br />nor strings =P</div>
						</div>
						<div style={styles.qp.features.wrapper3}>
							<div style={styles.qp.features.title}>How to play?</div>
							<div style={styles.qp.features.text}>Visit URL<br />in your phone!</div>
						</div>
						<div style={styles.qp.features.wrapper4}>
							<div style={styles.qp.features.title}>Android</div>
							<div style={styles.qp.features.text}>Open up in<br />Chrome App!</div>
						</div>
						<QPUrl peerId={this.state.peerId} />
					</div>
				</div>
				<div style={styles.ghost}></div>
			</div>
		);
	}
});

export default Theater;
