import React, { Component } from 'react'
import video from '../../videos/video-0.webm'
import $ from 'jquery'
import { projects } from './ProjectData'

class Projects extends Component {
  handleMouseEnter = function () { $('video', this)[0].play() }
  // handleMouseLeave = function () { $('video', this)[0].pause() }

  renderProject = ({ focus, title, tags, deployed, repo, description }, index) => (
    <div className="project" key={index + focus}>
      <h3>{title}</h3>
      <h4>Focus: {focus}</h4>

      <div className="project-info">
        <div className="d-flex flex-column col-6">
          <div className="d-flex flex-wrap">
            {tags.split(' ').map((tag, index) => <p key={index} className="bg-dark text-light mx-1 px-2 py-1 rounded">{tag}</p>)}
          </div>
          {description.map((item, index) => <p key={index} className="mb-1">{item}</p>)}
        </div>
        <div className="col-6">
          <video src={video} onMouseEnter={this.handleMouseEnter} controls loop />
        </div>
      </div>
    </div>

  )
  render () {
    return (
      <div id="projects" className="section">
        <h1 className="section-title">Projects</h1>
        {projects.map((project, index) => this.renderProject(project, index))}
      </div>
    )
  }
}

export default Projects
