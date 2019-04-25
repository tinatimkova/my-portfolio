import React, { Component } from 'react'
import Header from './Header'
import Background from './Background'
import AboutMe from './sections/AboutMe'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Code from './sections/Code'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

class App extends Component {
  render () {
    return (
      <div id="app">
        <Header />
        <Background />

        <div id="sections">
          <AboutMe />
          <Skills />
          <Projects />
          <Code />
          <Resume />
          <Contact />
        </div>

      </div>
    )
  }
}

export default App
