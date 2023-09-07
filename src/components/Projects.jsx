import React, { useEffect, useState } from 'react'
import { projects } from '../data/data';

const Projects = () => {
  return (
    <section className='projects-container'>
      <Project />
    </section>
  )
}
const Project = () =>{
  return (
    <>
      {projects.map((project, index)  =>
      <div key={index}>
        <div className='text'>
          <h1><span>project</span> {project.id}</h1>
        </div>
   
        <div className='project-image'>
          <img src={project.images[0]} alt="project-cover" />
          <h4>{project.title}</h4>
          <p>{project.desc}</p>
          <div className='links'>
            <a href={project.webLink}>Live demo<img src="" alt="" /></a>
            <a href={project.codeLink}>Code<img src="" alt="" /></a>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

const ProjectImage =()=>{
  projects.forEach(picture)

}

export default Projects