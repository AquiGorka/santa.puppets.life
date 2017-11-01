# Santa @ Puppets

![Santa @ Puppets](/static/santa.png)

With the same technology that powers [Puppets](https://github.com/AquiGorka/puppets) this puppet sets a Christmas theme.

## Dev
```sh
# in one terminal
cd public
npm run start

#in another terminal
npm run watch
```

## Build
```sh
npm run build
```

### Notes
This uses PeerJS for WebRTC, to establish the connections a signaling servers is needed. If you want to use this with their public signaling server get your API key and set it up in `config.js`
