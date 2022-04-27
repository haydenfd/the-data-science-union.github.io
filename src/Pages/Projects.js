import React from 'react';
import './index.css';
import { projects } from './global';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => { 

  return (
    <div className="projects py-5">
    <h1 className="projects-title">
        Our Projects
      </h1>
      <section className="quarter-section">
      <h2 className="quarter-title">Spring 2021</h2>
        <ProjectCard
          title={projects.s21.stocks.title}
          image={projects.s21.stocks.image}
        />
        <ProjectCard
          title={projects.s21.osu.title}
          image={projects.s21.osu.image}
        />
      </section>
      <section className="quarter-section">
        <h2 className="quarter-title">Winter 2021</h2>
        <ProjectCard
          title={projects.w21.weight.title}
          image={projects.w21.weight.image}
        />
        <ProjectCard
          title={projects.w21.personality.title}
          image={projects.w21.personality.image}
        />
      </section>
      <section className="quarter-section">
        <h2 className="quarter-title">Fall 2020</h2>
        <ProjectCard
          title={projects.f20.nba.title}
          image={projects.f20.nba.image}
        />
        <ProjectCard
          title={projects.f20.age.title}
          image={projects.f20.age.image}
        />
      </section> 
      <section className="quarter-section">
        <h2 className="quarter-title">Spring 2020</h2>
        <ProjectCard
          title={projects.s20.music.title}
          image={projects.s20.music.image}
        />
        <ProjectCard
          title={projects.s20.mlb.title}
          image={projects.s20.mlb.image}
        />
      </section>
    </div>  
  )
}

export default Projects;