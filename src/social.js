import React from 'react';
import Hover from './hover.js';

var styles = {
	wrapper: {
		background: 'rgba(255,255,255,0.99)',
		height: 150,
		display: 'flex',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5
	},
	share: {
		wrapper: {
			width: '60%',
			flexGrow: 1,
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column'
		},
		social: {
			width: 200,
			background: 'rgb(89, 202, 255)',
			padding: 10,
			margin: 'auto',
			borderRadius: 5
		},
		inner: {
			maxWidth: 150,
			display: 'flex',
			justifyContent: 'space-around',
			margin: 'auto'
		},
		icon: {
			fontSize: 30,
			color: '#FFF'
		},
		subscribe: {
			flexGrow: 1,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		form: {
			display: 'inline-flex',
			padding: 10,
			maxWidth: 400,
			border: '1px solid #CCC',
			borderRadius: 50
		},
		input: {
			padding: 10,
			border: 'none',
			width: 300,
			fontSize: 18,
			outline: 'none',
			color: '#AAA'
		}
	},
	like: {
		wrapper: {
			width: '40%',
			flexGrow: 1,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			fontFamily: 'Bangers',
			fontSize: 40
		},
		link: {
			color: '#EB1478',
			textDecoration: 'none'
		},
		hover: {
			textDecoration: 'underline'
		},
		indiegogo: {
			backgroundImage: 'url(img/Indiegogo_logo.png)',
			backgroundSize: 'contain',
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			width: 180,
			height: 70,
			margin: 'auto'
		}
	}
};

export default (props) => {
	return (
		<div style={styles.wrapper}>
			<div style={styles.share.wrapper}>
				<div style={styles.share.social}>
					<div style={styles.share.inner}>
						<div>
							<a className="addthis_button_facebook" title="Share on Facebook">
								<i style={styles.share.icon} className="fa fa-facebook"></i>
							</a>
						</div>
						<div>
							<a className="addthis_button_twitter" title="Share on Twitter">
								<i style={styles.share.icon} className="fa fa-twitter"></i>
							</a>
						</div>
						<div>
							<a className="addthis_button_email" title="Share by Email">
								<i style={styles.share.icon} className="fa fa-envelope"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div style={styles.like.wrapper}>
				<a style={styles.like.link} href="http://igg.me/at/puppets-life" target="_blank">
					<Hover style={{}} hover={styles.like.hover}>
						<div style={styles.like.indiegogo}></div>
						<div>Help us reach our goal!</div>
					</Hover>
				</a>
			</div>
		</div>
	)
};
