import React from 'react'
import Scrollspy from 'react-scrollspy'
import $ from 'jquery'

const Header = () => {
  const sections = 'top about-me skills projects code resume contact'.split(' ')
  const sectionsText = ['Top', 'About Me', 'Skills', 'Projects', 'Code', 'Resume', 'Contact']

  const scrollTo = element => {
    if (element === '#top') {
      return $('html,body').animate({ scrollTop: $(`${element}`).offset().top }, 500)
    }

    console.log(element)

    $('html,body').animate({ scrollTop: $(`${element}`).offset().top + 1 }, 500)
  }
  const handleClick = () => scrollTo(event.target.getAttribute('href'))

  return (
    <Scrollspy items={sections} currentClassName="is-current" className='header'>

      {sections.map((section, index) => (
        <a key={index}
          href={`#${section}`}
          className='header-item'
          onClick={handleClick}>
          <h1 className="header-item-text" href={`#${section}`}>{sectionsText[index]}</h1>
        </a>
      ))}

    </Scrollspy>
  )
}

export default Header
