import React, { Component } from 'react'
import Hover from './hover.js'

const styles = {
	wrapper: {
		fontFamily: 'Love Ya Like A Sister',
		padding: '20px 10px 10px 20px',
		fontSize: 35,
		borderBottom: '3px solid orange',
		background: 'rgba(255,255,255,0.99)',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		display: 'flex'
	},
	social:{
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	icon: {
		fontSize: 16,
		border: '2px solid #CCC',
		borderRadius: 30,
		background: '#FFF',
		color: '#CCC',
		width: 30,
		height: 30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer'
	},
	facebook: {
		fontSize: 16,
		borderRadius: 30,
		background: '#FFF',
		width: 30,
		height: 30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		color: '#3A5795',
		border: '2px solid #3A5795'
	},
	twitter:{
		fontSize: 16,
		borderRadius: 30,
		background: '#FFF',
		width: 30,
		height: 30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		border: '2px solid #55ACEE',
		color: '#55ACEE'
	},
	contact:{
		fontSize: 16,
		borderRadius: 30,
		background: '#FFF',
		width: 30,
		height: 30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		border: '2px solid orange',
		color: 'orange'
	},
	indiegogo: {
		fontSize: 16,
		borderRadius: 30,
		background: '#FFF',
		width: 30,
		height: 30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		border: '2px solid #EB1478',
		color: '#EB1478'
	},
	link: {
		textDecoration: 'none',
		marginRight: 10
	},
	by: {
		span: {
			color: '#CCC',
			fontSize: 20,
			marginLeft: 15
		},
		link: {
			color: '#CCC',
			textDecoration: 'none'
		}
	}
}

class Header extends Component {
	
	onClickContact(e) {
		e.preventDefault()
		this.props.onShowContact()
	}
	
	render() {
		return (
			<div style={styles.wrapper}>
				<div>Puppets.life<span style={styles.by.span}>by <a style={styles.by.link} href="https://www.AquiGorka.net" target="_blank">AquiGorka.net</a></span></div>
				<div style={styles.social}>
					<a style={styles.link} href="http://igg.me/at/puppets-life" target="_blank" title="Puppets @ IndieGoGo">
						<Hover style={styles.icon} hover={styles.indiegogo}>
							<i className="fa fa-thumbs-up"></i>
						</Hover>
					</a>
					<a style={styles.link} href="https://www.facebook.com/puppets.life/" target="_blank" title="Puppets @ Facebook">
						<Hover style={styles.icon} hover={styles.facebook}>
							<i className="fa fa-facebook"></i>
						</Hover>
					</a>
					<a style={styles.link} href="https://twitter.com/Puppets_Life" target="_blank" title="Puppets @ Twitter">
						<Hover style={styles.icon} hover={styles.twitter}>
							<i className="fa fa-twitter"></i>
						</Hover>
					</a>
					<a style={styles.link} href="#" onClick={this.onClickContact} target="_blank" title="Contact Us @ Puppets">
						<Hover style={styles.icon} hover={styles.contact}>
							<i className="fa fa-envelope"></i>
						</Hover>
					</a>
				</div>
			</div>
		)
	}
}

export default Header