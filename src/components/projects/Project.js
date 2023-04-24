import React from 'react';
import './Project.css';
import ProjectCard from '../projects/ProjectCard';
import {projectData} from '../projects/Projectdata';

const Project = () => {
  return (
    <section className='projectsSection'>
      <div className='projectsInformation'>
        <h3>Some of my works</h3>
        <div className='projects'>
          {projectData.map((project, index) => {
            return <ProjectCard project={project} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Project
