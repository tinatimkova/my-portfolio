import React, { Component } from 'react'
import { icons } from './ContactData'

class Contact extends Component {
  renderIcons = ({ href, src }) => (
    <a className="" href={href} target="_blank" rel="noopener noreferrer" key={href}>
      <img className="img-icon-big" src={src} alt="" />
    </a>
  )

  render () {
    const text =
    `Need help on a project? Looking for a new hire? Send me a message or email!
    I'd love to hear from you!`

    return (
      <div id="contact" className="section">
        <div className="full-page">
          <h1 className="section-title mb-0">Contact Me</h1>
          <h3 className="text-center break mt-5">{text}</h3>

          <div id="contact-me-icons" className="d-flex justify-content-around mt-auto">
            {icons.map(this.renderIcons)}
          </div>

        </div>
      </div>
    )
  }
}

export default Contact
