import React, { Component } from 'react';
import Stage from './stage.js';
import nsa from './nsajs/index.js';
import GoogleURL from 'google-url'

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
      backgroundImage: 'url(img/smartphone-clipart.jpg)',
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
        backgroundPosition: 'center center',
        color: '#FFF'
      }
    },
    input: {
      border: 'none',
      borderBottom: '1px solid #CCC',
      textAlign: 'center',
      fontSize: 18,
      padding: '2px 0',
      width: 150
    },
    connected: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      fontSize: 18,
      color: '#333',
      textShadow: '1px 1px 1px #EEE'
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

const googleUrl = new GoogleURL({ key: GOOGLE_APIKEY })
const kurtURL = __PROD__ ? 'https://kurt.puppets.life/' : KURT_URL

class QPUrl extends Component {
  constructor(props) {
    super(props)
    this.state = { shortURL: null, connected: false }
    nsa.on('connect', () => this.setState({ connected: true }))
  }

  componentWillReceiveProps(props) {
    const { signal } = props
    if (signal) {
      console.log('kurt url: ', kurtURL)
      googleUrl.shorten(`${kurtURL}?signal=${btoa(JSON.stringify(signal))}`, (err, res) => {
        if (err) {
          console.log('Error: ', err)
        }
        this.setState({ shortURL: res })
      })  
    }
  }

  render() {
    if (this.state.connected) {
      return <div style={styles.qp.connected}>Connected!</div>
    }

    if (!this.props.signal || !this.state.shortURL) {
      return <div style={styles.qp.url.spinner}>·</div>
    }

    return <div style={styles.qp.url.wrapper}>
      <span style={styles.qp.url.protocol}>{this.state.shortURL}</span>
      <div>
        <input
          style={styles.qp.input}
          placeholder="Enter ID here"
          type="text"
          onChange={e => this.setState({ id: e.currentTarget.value })}
          />
        <input
          type="button"
          value="Go"
          onClick={() => {
            googleUrl.expand(`https://goo.gl/${this.state.id}`, (err, longUrl) => {
              //console.log(longUrl)
              const data = JSON.parse(atob(longUrl.split('?signal=')[1]))
              nsa.connect(data)
            })
          }} />
      </div>
    </div>
  }
}

class Theater extends Component {
  constructor(props) {
    super(props)
    this.state = { signal: null }
  }

  componentDidMount() {
    nsa.start().then(signal => this.setState({ signal }))
  }

  render() {
    return <div style={styles.wrapper}>
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
              <div style={styles.qp.features.title}>Browser</div>
              <div style={styles.qp.features.text}>Open up in any<br />browser App!</div>
            </div>
            <QPUrl signal={this.state.signal} />
          </div>
        </div>
        <div style={styles.ghost}></div>
      </div>
  }
}

export default Theater;
