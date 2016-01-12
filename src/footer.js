import React from 'react';

var styles = {
	wrapper: {
		padding: '5px 10px 5px 5px',
		fontSize: 16,
		background: 'rgba(255,255,255,0.99)',
		textAlign: 'right',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5
	},
	link: {
		fontFamily: 'Shadows Into Light',
		textDecoration: 'none',
		color: '#777',
	}
}

export default (props) => {
	return (
		<div style={styles.wrapper}>
			<a style={styles.link} href="http://AquiGorka.net" target="_blank">AquiGorka.net</a>
		</div>
	);
}