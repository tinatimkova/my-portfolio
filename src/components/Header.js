import React from 'react'
import Scrollspy from 'react-scrollspy'
import $ from 'jquery'

const Header = () => {
  const sections = 'about-me skills projects code resume contact'.split(' ')
  const sectionsText = ['About Me', 'Skills', 'Projects', 'Code', 'Resume', 'Contact']

  const scrollSpyClassName = 'fixed-top d-flex bg-success justify-content-around'
  const anchorTagClassName = 'header-item'

  const scrollTo = element => $('html,body').animate({ scrollTop: $(`${element}`).offset().top }, 250)

  const handleClick = () => scrollTo(event.target.getAttribute('href'))

  return (
    <Scrollspy items={sections}
      currentClassName="is-current"
      className={scrollSpyClassName}>
      {sections.map((section, index) => (
        <a key={index}
          href={`#${section}`}
          className={anchorTagClassName}
          onClick={handleClick}>
          <h1 href={`#${section}`}>{sectionsText[index]}</h1>
        </a>
      ))}
    </Scrollspy>
  )
}

export default Header
