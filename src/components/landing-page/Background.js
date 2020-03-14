import React, { Component } from 'react';
import BackgroundTextOverlay from './BackgroundTextOverlay';
import image from '../../images/portfolioBackground.png';

class Background extends Component {
  render () {
    return (
      <div id="top" className="position-relative">
        <img src={image} alt="" className="background" />
        <BackgroundTextOverlay />
      </div>
    );
  }
}

export default Background;
