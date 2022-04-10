import React from 'react';
import './index.css'

const ProjectCard = (props) => { 
  return (
    <div className="project-card">
      <h1 className="project-card-title">
        {props.title}
      </h1>
      <img
        className="project-card-img"
        src={props.image}
        alt={props.title}
      />
    </div>
  )
}

export default ProjectCard;