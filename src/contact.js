import React from 'react';
import $ from 'jquery';

var styles = {
	wrapper: {
		position: 'absolute',
		zIndex: 3,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		background: 'rgba(0,0,0,0.9)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'none'
	},
	form: {
		background: '#FFF',
		padding: 40,
		height: 300,
		width: 300,
		fontSize: 14,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	name: {
		border: '1px solid #DDD',
		padding: '0.9em',
		width: '100%',
		fontSize: 14
	},
	email: {
		border: '1px solid #DDD',
		padding: '0.9em',
		marginTop: 20,
		width: '100%',
		fontSize: 14
	},
	message: {
		border: '1px solid #DDD',
		padding: '0.9em',
		marginTop: 20,
		width: '100%',
		fontSize: 14
	},
	gotcha: {
		display: 'none'
	},
	submit: {
		cursor: 'pointer',
		background: '#FFF',
		fontSize: '1em',
		textTransform: 'uppercase',
		fontWeight: 600,
		border: '2px solid orange',
		color: 'orange',
		padding: 5,
		width: 100,
		marginTop: 20
	},
	sent: {
		background: '#FFF',
		padding: 40,
		height: 300,
		width: 300,
		fontSize: 14,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 26,
		textAlign: 'center',
		color: '#777'
	}
};

var Contact = React.createClass({
	onFormClick(e) {
		e.stopPropagation();
	},
	onHideContact() {
		$(this.refs.contact).fadeOut('fast', () => {
			this.props.onHideContact();	
		});
	},
	onSubmit(e) {
		e.preventDefault();
		//
		var name = this.refs.name.value,
			email = this.refs.email.value,
			message = this.refs.message.value
		if (!(name.trim() && email.trim() && message.trim())) {
			alert('Please fill out all fields.');
		} else {
			this.setState({
				sent: true
			});
			//
			$.ajax({
				url: "//formspree.io/gorka@aquigorka.net", 
				method: "POST",
				data: {
					name: name,
					email: email,
					message: message
				},
				dataType: "json",
				success: () => { setTimeout(() => { this.onHideContact(); }, 1000); },
				error: () => { setTimeout(() => { this.onHideContact(); }, 1000); }
			});
		}
	},
	//
	componentDidMount() {
		$(this.refs.contact)
			.css('display', 'flex')
			.hide()
			.fadeIn('fast');
	},
	getInitialState() {
		return {
			sent: false
		};
	},
	//
	render() {
		var content = (
			<form method="POST" style={styles.form} onSubmit={this.onSubmit} onClick={this.onFormClick}>
				<input required="true" type="text" name="name" placeholder="Your name" style={styles.name} ref="name" />
				<input required="true" type="email" name="_replyto" placeholder="Your email" style={styles.email} ref="email" />
				<textarea required="true" name="message" rows="5" placeholder="Your message" style={styles.message} ref="message"></textarea>
				<input type="text" name="_gotcha" style={styles.gotcha} />
				<input type="submit" value="Send" style={styles.submit} />
			</form>
		);
		if (this.state.sent) {
			content = (
				<div style={styles.sent}>
					Thank you. We'll get back to you as soon as possible.
				</div>
			);
		}
		return (
			<div style={styles.wrapper} onClick={this.onHideContact} ref="contact">
				{content}
			</div>
		);
	}
});

export default Contact;

