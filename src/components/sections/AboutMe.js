import React, { Component } from 'react';
import src from '../../images/ProfilePic.JPG';

class AboutMe extends Component {
  render () {
    const text = 'I\'m a full-stack developer with a passion for problem-solving and attention to detail. I strongly believe technologies can make the world a better place if we want them to.\n I have experience in customer service, teaching, and digital marketing. The key skills I can transfer to web development from my previous experience include critical thinking, customer orientation, and adaptability.\n I\'m resourceful, persevering, always demonstrating enthusiasm and commitment to my work. In others, I value integrity, modesty, curiosity, and a sense of humor.\n My goal is to build a career in web development. My current fields of interest are React-related development, back-end development with Ruby on Rails and Express. My other interests include outdoor activities (hiking, biking, skiing) and social media.';

    return (
      <div id="about-me" className="section">
        <h1 className="section-title">About Me</h1>
        <div className="about-me-sub-section">
          <img src={src} alt="" className="selfie" />
          {text.split('\n').map((paragraph, index) => (
            <p key={index} className="about-me-text mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default AboutMe;
