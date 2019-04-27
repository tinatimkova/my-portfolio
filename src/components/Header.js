import React from 'react'
import Scrollspy from 'react-scrollspy'
import $ from 'jquery'

const Header = () => {
  const sections = [
    { href: 'top',
      text: 'David Ko' },
    { href: 'about-me',
      text: 'About Me' },
    { href: 'skills',
      text: 'Skills' },
    { href: 'projects',
      text: 'Projects' },
    { href: 'contact',
      text: 'Contact' }
  ]

  const scrollTo = element => {
    if (element === '#top') {
      return $('html,body').animate({ scrollTop: $(`${element}`).offset().top }, 500)
    }
    $('html,body').animate({ scrollTop: $(`${element}`).offset().top + 1 }, 500)
  }
  const handleClick = () => scrollTo(event.target.getAttribute('href'))

  const generateHeaderText = (sections, className) => sections.map((section, index) => (
    <a key={index}
      href={`#${section.href}`}
      className={'header-item px-2 ' + className}
      onClick={handleClick}>
      <h3 className="header-item-text" href={`#${section.href}`}>{section.text}</h3>
    </a>
  ))

  return (
    <Scrollspy items={sections.map(section => section.href)} currentClassName="is-current" className='header'>
      {generateHeaderText([sections[0]], 'mr-auto')}
      {generateHeaderText(sections.slice(1))}
    </Scrollspy>
  )
}

export default Header
