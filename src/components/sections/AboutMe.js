import React, { Component } from 'react';
import src from '../../images/ProfilePic.JPG';

class AboutMe extends Component {
  render () {
    const text = 'I’m a full stack developer with experience primarily in JavaScript although Ruby and Python are also in my field of interest. I want to be a junior developer at a company where I can learn, grow, and continue to master my programming skills.';

    return (
      <div id="about-me" className="section">
        <h1 className="section-title">About Me</h1>
        <div className="about-me-sub-section">
          <div className="col-12 col-md-6">
            {text.split('\n').map((paragraph, index) => (
              <h5 key={index} className="mb-4">
                {paragraph}
              </h5>
            ))}
          </div>
          <div className="col-12 col-md-6">
            <img src={src} alt="" className="selfie" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
