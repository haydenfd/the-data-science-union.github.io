import React from 'react';
import './index.css';
import ProjectCard from '../Components/ProjectCard';
import OSU from '../Components/Images/osu.jpeg';
import Weight from '../Components/Images/weight.png';
import Personality from '../Components/Images/personality.png';
import NBA from '../Components/Images/nba.png';
import Music from '../Components/Images/music.png';
import Baseball from '../Components/Images/baseball.png';
import Age from '../Components/Images/movie.png';

const PROJECTS = {
  s21: {
    stocks: {
      title: 'Forecasting Stock Prices',
    },
    osu: {
      title: 'Refining Player Rankings in OSU',
    },
  },
  w21: {
    weight: {
      title: 'Tracking Weight Loss',
    },
    personality: {
      title: 'Predicting Personality Traits',
    },
  },
  f20: {
    nba: {
      title: 'Predicting NBA Players\' Salaries',
    },
    age: {
      title: 'Building an Age Guesser using Transfer Learning',
    },
  },
  s20: {
    music: {
      title: 'Music Festivals Impact on DJ Popularity',
    },
    mlb: {
      title: 'MLB Hit Predictor',
    },
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
          title={PROJECTS.s21.stocks.title}
          image='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202107/share_1200x675_092019020355_2-sixteen_nine.jpg?size=1200:675}'
        />
        <ProjectCard
          title={PROJECTS.s21.osu.title}
          image={OSU}
        />
      </section>
      <section className="quarter-section">
        <h2 className="quarter-title">Winter 2021</h2>
        <ProjectCard
          title={PROJECTS.w21.weight.title}
          image={Weight}
        />
        <ProjectCard
          title={PROJECTS.w21.personality.title}
          image={Personality}
        />
      </section>
      <section className="quarter-section">
        <h2 className="quarter-title">Fall 2020</h2>
        <ProjectCard
          title={PROJECTS.f20.nba.title}
          image={NBA}
        />
        <ProjectCard
          title={PROJECTS.f20.age.title}
          image={Age}
        />
      </section> 
      <section className="quarter-section">
        <h2 className="quarter-title">Spring 2020</h2>
        <ProjectCard
          title={PROJECTS.s20.music.title}
          image={Music}
        />
        <ProjectCard
          title={PROJECTS.s20.mlb.title}
          image={Baseball}
        />
      </section>
    </div>  
  )
}

export default Projects;