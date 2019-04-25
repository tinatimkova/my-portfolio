import React, { Component } from 'react'
import { projects } from './ProjectsData'
import Video from './Video'

class Projects extends Component {
  constructor () {
    super()

    this.state = {
      isPlaying: false
    }
  }

  handleClick = () => {
    console.log(this.state)
    const { isPlaying } = this.state

    if (isPlaying) {
      this.play()
      this.setState({ isPlaying: !isPlaying })
    } else {
      this.pause()
      this.setState({ isPlaying: !isPlaying })
    }
  }

  play () { event.target.play() }
  pause () { event.target.pause() }

  renderProject = ({ focus, title, tags, deployed, repo, description, video }, index) => (
    <div className="project" key={index + focus}>
      <h3 className="mt-1">{title}</h3>
      <h4>Focus: {focus}</h4>

      <div className="project-info">
        <div className="d-flex flex-column col-6 p-0">
          <div className="d-flex flex-wrap">
            {tags.split(' ').map((tag, index) => <p key={index} className="bg-dark text-light mr-1 px-2 py-1 rounded">{tag}</p>)}
          </div>
          <ul>
            {description.map((item, index) => <li key={index} className="mb-1">{item}</li>)}
          </ul>
        </div>
        <div className="col-6">
          <Video video={video}/>
          <div className="d-flex justify-content-around">
            <button className="btn btn-info">
              <a className="no-decoration" href={repo} target="_blank" rel="noopener noreferrer" >
                <span className="text-light">Github Codebase Link</span>
              </a>
            </button>
            <button className="btn btn-info">
              <a className="no-decoration" href={deployed} target="_blank" rel="noopener noreferrer" >
                <span className="text-light">Live Demo Link</span>
              </a>
            </button>
          </div>
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
