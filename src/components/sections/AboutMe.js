import React, { Component } from 'react'

class AboutMe extends Component {
  render () {
    const text =
    `I started my web development journey after seriously trying to make my way as professional video gamer. The game I play is Smite and at my peak, I reached Diamond II (top 1% of all players). Playing at the highest level required enormous amounts of commitment, individual skill, teamwork, and constructive criticism. My role as ADC was to communicate clearly and concisely with my team regarding how my opposition was behaving, what immediate plans we could make to gain an advantage in the short term, and plan out long term goals on the fly.

    One of the main ideas of playing this game is how to draft a cohesive team and how to play around each of our strengths and weaknesses. With 100+ characters, there are so many different combinations and some characters fit people's playstyles better than others. My first web development project attempted to quantify a character's strengths into their ability to initiate, crowd control, clear waves, siege, and deal objective damage. The result of this project would help us visualize where our composition's strengths lie and how we should approach the early, mid, and end game.

    Along the way, I discovered my passion for web development, programming, and solving problems. A few months later, I attended General Assembly's Web Development Immersive program (now rebranded as Software Engineering Immersive). I learned how to absorb information at a lightning pace with the support of my instructors, mentors, and peers. My past experience working at a very high level in Smite helped me throughout the program because I was able to be a complete team player and share my ideas and knowledge with others. After 12 weeks, I became a Full Stack Developer with four major projects as well as a number of smaller, personal side projects.

    Embarking on this path as a web developer is one of the best decisions I've ever made because it allows me to learn at an accelerated rate, collaborate with others for new problem solving techniques, and display my work to anyone willing to look at it.`
    return (
      <div id="about-me" className="section">
        <h1 className="section-title">My Story</h1>
        {text.split('\n').map((paragraph, index) => <h5 key={index}><span className="mx-4"></span>{paragraph}</h5>)}
      </div>
    )
  }
}

export default AboutMe
