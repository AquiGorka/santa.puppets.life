import Peer from 'simple-peer'
import { EventEmitter } from 'events'

class NSAJS extends EventEmitter {
	constructor() {
		super()
		this.signal = null
	}
	connect(data) {
		//console.log(data)
		this.peer.signal(data)
	}
	start() {
		return new Promise((resolve, reject) => {
			this.peer = new Peer({ initiator:true , trickle: false })
			this.peer.on('signal', data => resolve(data))
			this.peer.on('connect', () => this.emit('connect'))
			this.peer.on('data', data => this.emit('data', data))
		})
	}
}

export default new NSAJS