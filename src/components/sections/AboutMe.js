import React, { Component } from 'react'
import src from '../../images/selfie.webp'

class AboutMe extends Component {
  render () {
    const text =
    `I started my web development journey after seriously trying to make my way as professional video gamer. The game I play is Smite and at my peak, I reached Diamond II (top 1% of all players). Playing at the highest level required enormous amounts of commitment, individual skill, teamwork, and constructive criticism. My role as ADC was to communicate clearly and concisely with my team regarding how my opposition was behaving, what immediate plans we could make to gain an advantage in the short term, and plan out long term goals on the fly.

    Embarking on this path as a web developer is one of the best decisions I've ever made because it allows me to learn at an accelerated rate, collaborate with others for new problem solving techniques, and display my work to anyone willing to look at it.`

    return (
      <div id="about-me" className="section">
        <h1 className="section-title">My Story</h1>
        <div className="d-flex">
          <div className="col-9">
            {text.split('\n').map((paragraph, index) => <p key={index}><span className="mx-4"></span>{paragraph}</p>)}
          </div>
          <div className="col-3">
            <img src={src} alt="" className="selfie"/>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
