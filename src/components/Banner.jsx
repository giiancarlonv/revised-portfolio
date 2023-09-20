import React from 'react'
import heroImage from '../pictures/hero-image.webp'
import gmail from '../pictures/icons/gmail.png';
import linkedin from '../pictures/icons/linkedin.png';
import github from '../pictures/icons/github.png';
import behance from '../pictures/icons/behance.svg'
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
          <ul className='link mobile'>
            <li><a href="https://github.com/giiancarlonv"><img src={github} alt="github" /></a></li>
            <li><a href="https://www.linkedin.com/in/giancarlo-nava-41314a193/"><img src={linkedin} alt="linkedin" /></a></li>
            <li><a href="https://www.behance.net/giiancarlonv"><img src={behance} alt="gmail" /></a></li>
            <li><a href="mailto:navagiancarlo32@gmail.com"><img src={gmail} alt="gmail" /></a></li>
          </ul>  
          
          
        </div>
      </section>
    </>
  )
}

export default Banner