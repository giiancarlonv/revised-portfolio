import React from 'react'
import react from '../pictures/icons/react.webp';
import js from '../pictures/icons/js.webp';
import css from '../pictures/icons/css.webp';
import html from '../pictures/icons/html.webp';
import sass from '../pictures/icons/sass.webp';
import adobe from '../pictures/icons/adobePS.webp';
const TechStack = () => {
  return (
    <section className='tech-container'>
      <h1>Tech stack</h1>
      <ul>
        <li><img src={react} alt="react" className='react'/></li>
        <li><img src={js} alt="js" /></li>
        <li><img src={css} alt="css" /></li>
        <li><img src={sass} alt="sass" /></li>
        <li><img src={html} alt="html" /></li>
        <li><img src={adobe} alt="adobe" /></li>
      </ul>
    </section>
  )
}

export default TechStack