import React from 'react';
import './ProjectCard.css';
import github from '../../assets/logo/github.svg';

const ProjectCard = ({ project }) => {
  return (
    <div className='projectsCard'>
      <img src={project.image} alt={project.title} />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <a href={project.gitLink} rel="noreferrer" target="_blank" className='projectsCardButton'>
        <img src={github} alt="github" />
        GitHub
      </a>
    </div>
  )
}

export default ProjectCard