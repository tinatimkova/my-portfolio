import React, { Component, Fragment } from 'react'
// import { Route } from 'react-router-dom'
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
      <Fragment>
        <Header />
        <Background />

        <AboutMe />
        <Skills />
        <Projects />
        <Code />
        <Resume />
        <Contact />

      </Fragment>
    )
  }
}

export default App
