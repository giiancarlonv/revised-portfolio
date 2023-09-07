import React from 'react'
import Projects from './Projects';
import About from './About';
import TechStack from './TechStack';
import Header from './Header';
import Banner from './Banner';

const Homepage = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Header />
        <main>
          <Banner />
          <Projects />
          <About />
          <TechStack />
        </main>

        <footer>
          <span>© copyright {year}</span> 
        </footer>
    </>
  )
}

export default Homepage