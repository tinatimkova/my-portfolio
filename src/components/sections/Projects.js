import React, { Component } from 'react'
import { projects } from '../../data/ProjectsData'
import { Project } from './Project'

class Projects extends Component {
  constructor () {
    super()

    this.state = {
      tags: 'Filter by tags: , Animations, jQuery, Rails, Algorithms, Express.js'.split(','),
      focusedTag: ''
    }
  }

  handleClick = () => {
    this.setState({ focusedTag: event.target.textContent })
  }

  filterProjects = projects => {
    const { focusedTag } = this.state

    if (focusedTag === 'Filter by tags: ') { return this.allProjects(projects) }

    return projects.filter(project => project.tags.includes(focusedTag)).map(project => <Project key={project + Math.random()} project={project} />)
  }

  allProjects = projects => {
    return projects.map(project => <Project key={project + Math.random()} project={project} />)
  }

  render () {
    const { tags, focusedTag } = this.state
    const button = tag => <button key={tag + Math.random()} className="btn btn-warning mx-2" onClick={this.handleClick}>{tag}</button>

    return (
      <div id="projects" className="section">
        <h1 className="section-title">Projects</h1>
        <div className="d-flex justify-content-center">{tags.map(button)}</div>
        {focusedTag ? this.filterProjects(projects) : this.allProjects(projects)}
      </div>
    )
  }
}

export default Projects
