import React, { Component } from 'react';
import { icons } from '../../data/ContactData';

class Contact extends Component {
  renderIcons = ({ href, src }) => (
    <a
      className=""
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      key={href}
    >
      <img className="img-icon-big" src={src} alt="" />
    </a>
  );

  render () {
    const text = 'Thank you for visiting my site. Please see further contact info below, and feel free to reach out!';

    return (
      <div id="contact" className="section">
        <div className="full-page">
          <h1 className="section-title mb-0">Contact Me</h1>
          <div className="full-page-sub-section">
            <h5 className="text-center break my-5">{text}</h5>
            <div
              id="contact-me-icons"
              className="d-flex justify-content-around"
            >
              {icons.map(this.renderIcons)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
