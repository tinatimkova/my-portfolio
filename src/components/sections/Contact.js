import React, { Component } from 'react'
import { icons } from './ContactData'

class Contact extends Component {
  renderIcons = ({ href, src }) => (
    <a className="" href={href} target="_blank" rel="noopener noreferrer">
      <img className="img-icon-big" src={src} alt="" />
    </a>
  )

  render () {
    const text =
    `Need help on a project? Looking for a new hire? Send me a message or email!
    I'd love to hear from you!`

    return (
      <div id="contact" className="section full-page">
        <h1 className="section-title">Contact</h1>

        <h2 className="text-center break">{text}</h2>

        <div id="contact-me-icons" className="d-flex justify-content-around">
          {icons.map(this.renderIcons)}
        </div>

      </div>
    )
  }
}

export default Contact
