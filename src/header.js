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
  github: {
    icon: {
      fontSize: 22,
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
    hover: {
      fontSize: 22,
      borderRadius: 30,
      background: '#FFF',
      width: 30,
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: '#24292E',
      border: '2px solid #24292E'
    }
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
      link: {
        color: '#CCC',
        textDecoration: 'none'
      },
      normal: {
        display: 'inline-block',
      },
      hover: {
        display: 'inline-block',
        textDecoration: 'underline'
      }
    }
  }
}

class Header extends Component {
  
  render() {
    return (
      <div style={styles.wrapper}>
        <div>
          Puppets.life
          <span style={styles.by.span}>
            by <Hover style={styles.by.link.normal} hover={styles.by.link.hover}>
              <a style={styles.by.link.link} href="https://www.AquiGorka.net" target="_blank">AquiGorka.net</a>
            </Hover>
          </span>
        </div>
        <div style={styles.social}>
          <a style={styles.link} href="http://igg.me/at/puppets-life" target="_blank" title="Puppets @ IndieGoGo">
            <Hover style={styles.icon} hover={styles.indiegogo}>
              <i className="fa fa-thumbs-up"></i>
            </Hover>
          </a>
          <a style={styles.link} href="https://github.com/AquiGorka/puppets" target="_blank" title="Puppets @ Github">
            <Hover style={styles.github.icon} hover={styles.github.hover}>
              <i className="fa fa-github"></i>
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
          <a
            style={styles.link}
            href="#"
            onClick={e => {
              e.preventDefault()
              this.props.onShowContact()
            }}
            target="_blank"
            title="Contact Us @ Puppets"
            >
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