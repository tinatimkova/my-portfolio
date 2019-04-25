import React, { Component } from 'react'
import video from '../../videos/video-0.webm'

class Video extends Component {
  constructor () {
    super()

    this.state = {
      isPlaying: false
    }
  }

  handleClick = () => {
    const { isPlaying } = this.state

    if (!isPlaying) {
      this.play()
      this.setState({ isPlaying: !isPlaying })
    } else {
      this.pause()
      this.setState({ isPlaying: !isPlaying })
    }
  }

  play () { event.target.play() }
  pause () { event.target.pause() }

  render () {
    return (

      <video src={video} onClick={this.handleClick} />

    )
  }
}

export default Video
