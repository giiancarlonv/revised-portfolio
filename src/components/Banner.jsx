import React from 'react'
import heroImage from '../pictures/hero-image.webp'
import gmail from '../pictures/icons/gmail.png';
import linkedin from '../pictures/icons/linkedin.png';
import github from '../pictures/icons/github.png';
const Banner = () => {
  return (
    <>
      <div className='banner-design'>
        <div className='firefly1'></div>
        <div className='firefly2'></div>
        <div className='firefly3'></div>
        <div className='lamp'></div>
      </div>
     <div className='hero-image'>
        <img src={heroImage} alt="image-hero" />
      </div>
      <section className='section1'>
        <div className='name'>
          <h2>Gian Carlo Nava</h2>
          <span>frontend developer / illustrator</span>
        </div>
        <div>
          <ul>
            <li><img src={github} alt="github" /><a href="https://github.com/giiancarlonv">github</a></li>
            <li><img src={linkedin} alt="linkedin" /><a href="">linkedin</a></li>
            <li><img src={gmail} alt="gmail" /><a href="mailto:navagiancarlo32@gmail.com">gmail</a></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Banner