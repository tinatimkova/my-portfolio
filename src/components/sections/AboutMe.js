import React, { Component } from 'react'

class AboutMe extends Component {
  render () {
    const text = `I started my programming journey with an intro Java class in college. I thought that the idea of programming to solve problems was really cool. A few years later while trying to become a professional video gamer for a MOBA called Smite, I had came across a problem that I knew programming knowledge would help handle.

The problem involved solving pick and bans. My idea was to create a web application that can measure a team's performance based on character's traits such as damage output, crowd control, sustain, siege performance and so on. The result of this project would help us decide our playstyle and game plan for that specific match.

The result of embarking on this project was a discovery for my passion for problem solving, collaborating with others for newer ideas, and continuous learning to become a better programmer.`
    return (
      <div id="about-me" className="section">
        <h1 className="section-title">My Story</h1>
        {text.split('\n').map((paragraph, index) => <h2 key={index}><span className="mx-4"></span>{paragraph}</h2>)}
      </div>
    )
  }
}

export default AboutMe
