import React, { Component } from 'react'
import { projects } from '../../data/ProjectsData'
import { Project } from './Project'

class Projects extends Component {
  constructor () {
    super()

    this.state = {
      popular: 'React.js Rails Algorithms'
    }
  }

  render () {
    return (
      <div id="projects" className="section">
        <h1 className="section-title">Projects</h1>
        {projects.map(project => <Project key={project} project={project} />)}
      </div>
    )
  }
}

export default Projects
