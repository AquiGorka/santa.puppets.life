import React from 'react';
import ReactDOM from 'react-dom';
import utils from './stage.utils.js';
import puppet from './kurt.js';
import nsa from './nsajs/index.js';
import $ from 'jquery';

var styles = {
    canvas: {
        flexGrow: 1
    }
};

var myReq,
  resizeTimeout = false,
  remoteDeviceData = {
        orientation: {
            alpha: 90,
            beta: 0,
            gamma: 0
        }
    };

var animate = function() {
    myReq = window.requestAnimationFrame(animate);
    utils.animate();
};

var resize = function() {
  if (!resizeTimeout) {
    resizeTimeout = true;
    setTimeout(() => {
      var parent = ReactDOM.findDOMNode(this.refs.canvas).parentElement,
        element = ReactDOM.findDOMNode(this.refs.canvas);
      $(element).width(parent.offsetWidth);
      $(element).height(parent.offsetHeight);
      utils.resize(ReactDOM.findDOMNode(this.refs.canvas));
      resizeTimeout = false;
    }, 250);
  }
};

var Stage = React.createClass({

  componentDidMount() {
    // nsa
    nsa.on('data', data => {
      const { orientation } = JSON.parse(data)
      remoteDeviceData.orientation = orientation
    })

    // stage
    utils.render({
      element: ReactDOM.findDOMNode(this.refs.canvas),
      resize: true
    });

      // puppet
      puppet.render({ utils: utils });

    // world loop
    setInterval(() => {
      // update world
      utils.step();
      // update puppet
      puppet.step(remoteDeviceData);
    }, 1000/60);

    // animate
    animate();

    // resizing
    window.addEventListener('resize', resize.bind(this));
  },

  componentWillUnmount() {
    if (myReq) {
      window.cancelAnimationFrame(myReq);
    };
    window.removeEventListener('resize', resize.bind(this));
  },

  render() {
    return <canvas ref="canvas" style={styles.canvas} />;
  }
});

export default Stage;
