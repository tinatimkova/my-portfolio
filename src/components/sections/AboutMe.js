import React, { Component } from 'react';
import src from '../../images/selfie.webp';

class AboutMe extends Component {
  render () {
    const text = 'My text about me';

    return (
      <div id="about-me" className="section">
        <h1 className="section-title">About Me</h1>
        <div className="about-me-sub-section">
          <div className="col-12 col-sm-8">
            {text.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="col-12 col-sm-4">
            <img src={src} alt="" className="selfie" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
