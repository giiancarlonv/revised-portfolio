import React from 'react'
import heroImage from '../pictures/hero-image.webp'
import pic1 from '../pictures/sample_pic/project1/pic1.webp';
import react from '../pictures/icons/react.webp';
import js from '../pictures/icons/js.webp';
import css from '../pictures/icons/css.webp';
import html from '../pictures/icons/html.webp';
import sass from '../pictures/icons/sass.webp';
import adobe from '../pictures/icons/adobePS.webp';
import gmail from '../pictures/icons/gmail.png';
import linkedin from '../pictures/icons/linkedin.png';
import github from '../pictures/icons/github.png';


const Homepage = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <header>
        <div className='header-design'></div>
        <div className='header-text'>
          <a href="#">giiancarlonvpoiuyt</a>
        </div>
      </header>
        <main>
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
                <li><img src={github} alt="github" /><a href="">github</a></li>
                <li><img src={linkedin} alt="linkedin" /><a href="">linkedin</a></li>
                <li><img src={gmail} alt="gmail" /><a href="mailto:navagiancarlo32@gmail.com">gmail</a></li>
              </ul>
            </div>
          </section>

          <section className='projects-container'>
            <div>
              <div className='text'>
                <h1><span>project</span> 01</h1>
              </div>

              <div className='project-image'>
                <img src={pic1} alt="project-cover" />
                <h4>aavocc cloco</h4>
                <p>Since one of my family member started to have a clothing line, I started to make this project to showcase layouts for his business.</p>
                <div className='links'>
                  <a href="">Live demo<img src="" alt="" /></a>
                  <a href="">Code<img src="" alt="" /></a>
                </div>
              </div>
            </div>
            
          </section>
          
          <section className='section2'>
            <h1>About <span>me</span></h1>
            <aside>
              <strong>Frontend developer and illustrator with a taste</strong> 
              <p>I'm a front-end developer passionate about building accessible app that is user friendly and I love to work in groups where everyone can voice their opinions and ideas</p>
            </aside>
          </section>
          <section className='tech-container'>
            <h1>Tech stack</h1>
            <ul>
              <li><img src={react} alt="" /></li>
              <li><img src={js} alt="" /></li>
              <li><img src={css} alt="" /></li>
              <li><img src={sass} alt="" /></li>
              <li><img src={html} alt="" /></li>
              <li><img src={adobe} alt="" /></li>
            </ul>
          </section>
        </main>

        <footer>
          <span>© copyright {year}</span> 
        </footer>
    </>
  )
}

export default Homepage