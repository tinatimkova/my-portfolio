import React, { Component } from 'react'
import src from '../../images/resume-preview.png'

class Resume extends Component {
  render () {
    return (
      <div id="resume" className="section">
        <h1 className="section-title">Resume</h1>
        <a className="d-flex justify-content-center" href="https://davidholyko.github.io/resume" target="_blank" rel="noopener noreferrer">
          <img src={src} alt="" className="img-resume" />
        </a>
      </div>
    )
  }
}

export default Resume
