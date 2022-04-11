import React from 'react';
import './index.css';
import ProjectCard from '../Components/ProjectCard';
import OSU from '../Components/Images/osu.jpeg';
import Weight from '../Components/Images/weight.png';
import Personality from '../Components/Images/personality.png';

const PROJECTS = {
  stocks: {
    title: 'Forecasting Stock Prices',
  },
  osu: {
    title: 'Refining Player Rankings in OSU',
  },
  weight: {
    title: 'Tracking Weight Loss',
    image: '../Components/Images/weight.png',
  },
  personality: {
    title: 'Predicting Personality Traits',
    image: '../Components/Images/personality.png',
  },
};

const Projects = () => { 

  return (
    <div className="projects py-5">
    <h1 className="projects-title">
        Our Projects
      </h1>
      <section className="quarter-section">
      <h2 className="quarter-title">Spring 2021</h2>
        <ProjectCard
          title={PROJECTS.stocks.title}
          image='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202107/share_1200x675_092019020355_2-sixteen_nine.jpg?size=1200:675}'
        />
        <ProjectCard
          title={PROJECTS.osu.title}
          image={OSU}
        />
      </section>
      <section className="quarter-section">
        <h2 className="quarter-title">Winter 2021</h2>
        <ProjectCard
          title={PROJECTS.weight.title}
          image={Weight}
        />
        <ProjectCard
          title={PROJECTS.personality.title}
          image={Personality}
        />
      </section>
    </div>  
  )
}

export default Projects;