import React from 'react';
import './index.css';
import ProjectCard from '../Components/ProjectCard';
import OSU from '../Components/Images/osu-logo.jpeg';

const Projects = () => { 

  return (
    <div className="projects py-5">
    <h1 className="projects-title">
        Our Projects
      </h1>
      <section className="spring-21">
      <h2 className="quarter">Spring 2021</h2>
        <ProjectCard title="Refining Player Rankings in OSU" image={OSU} />
      </section>
      <section className="quarter-section">
        <h2 className="quarter">Winter 2021</h2>
        <ProjectCard title="Refining Player Rankings in OSU" image={OSU} />
      </section>
    </div>  
  )
}

export default Projects;