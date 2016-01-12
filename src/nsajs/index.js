import Peer from 'peerjs';
import config from '../config.js';
import Events from 'events';

var connection,
	randomString = function(length) {
	    var mask = '';
	    mask += 'abcdefghijkmnopqrstuvwxyz';
	    var result = '';
	    for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
	    return result;
	},
	nsajs = {
		connect() {},
		start() {
			if (__DEV_iOS__) {
				return new Promise((resolve, reject) => {
					var io = require('socket.io-client');
					var host = 'nsa.local:6677';
					var socket = io.connect(host);
					//
					socket.on('puppet', (data) => {
						this.emit('data', data);
					});
					socket.on('connect', () => {
						resolve('ios-dev');
					});
				});
			}
			if (__DEV__ || __PROD__) {
				return new Promise((resolve, reject) => {
					var peer = new Peer( randomString(3), { key: config.peerjs.key } );
					//
					peer.on('open', (id) => {
						//
						peer.on('connection', (conn) => {
							// peer connected
							if (!connection) {
								connection = conn;
								//
								connection.on('close', function () {
									// peer left
									connection = null;
									//
									this.emit('disconnected');
								});
								//
								this.emit('connected');
							}
							//
							conn.on('data', (data) => {
								this.emit('data', data);
							});
						});
						//
						resolve(id);
					});
				});
			}
		}
	};
Object.assign(nsajs, Events.EventEmitter.prototype);
Events.EventEmitter.call(nsajs);

export default nsajs;