import React, { Component } from 'react'
import BackgroundTextOverlay from './BackgroundTextOverlay'
import src from '../images/background.webp'

class Background extends Component {
  render () {
    return (
      <div id="top" className="position-relative">
        <img src={src} alt="" className="background" />
        <BackgroundTextOverlay />
      </div>
    )
  }
}

export default Background
