import React, { Component } from 'react'
import Typing, { Backspace } from 'react-typing-animation'

class BackgroundTextOverlay extends Component {
  render () {
    return (
      <div id="background-text-overlay">
        <span className="text-large">David Ko</span>
        <Typing startDelay={1000} loop>
          <span className="text-medium">Software Engineer</span>
          <Backspace count={17} delay={2000} />
          <span className="text-medium">Full Stack Web Developer</span>
          <Backspace count={24} delay={2000} />
          <span className="text-medium">Diamond II Ranked Conquest in Smite</span>
          <Backspace count={35} delay={2000}/>
        </Typing>
      </div>
    )
  }
}

export default BackgroundTextOverlay
