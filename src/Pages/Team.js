import React from 'react';
import './index.css'
import MemberCard from '../Components/MemberCard';
import { gen, exec } from './global';

const Team = () => { 
  return (
    <div>
      <section className="exec">
        <h1 className="team-title">
          Executive Board
        </h1>
        <p className="team-description">
          Our board members have diverse academic backgrounds and professional experiences, providing our club members with networking and mentorship opportunities in various industries. With an emphasis on collaboration and community, the DSU board works together with members to grow as a club.
        </p>
        <div className="exec-container">
        {exec.map((item, index) => {
          return (
            <div className="member-card-container">
            <MemberCard
              key={index}
              name={item.name}
              pos={item.pos}
              img={item.img}
              year={item.year}
              />
            </div>
          )
        })}
        </div>
      </section>
      <section className="gen">
        <h1 className="team-title">
          Members
        </h1>
        <p className="team-description">
          Members learn the data science process and apply that knowledge to internal and client projects. Each member has the chance to join a committee and work closely with a board member to influence the future of the club.
        </p>
        <div className="exec-container">
          {gen.map((item, index) => {
            return (
              <div className="member-card-container">
                <MemberCard
                  key={index}
                  name={item.name}
                  pos={item.pos}
                  img={item.img}
                  year={item.year}
                />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )




}

export default Team;