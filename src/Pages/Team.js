import React from 'react';
import './index.css'
import MemberCard from '../Components/MemberCard';
import aimee from '../Components/Images/Members/aimee-xu.jpg';
import christine from '../Components/Images/Members/christine-hamakawa.jpg';
import emily from '../Components/Images/Members/emily-gong.jpeg';
import hayden from '../Components/Images/Members/hayden-dsouza.jpeg';
import madison from '../Components/Images/Members/madison-kohls.jpeg';
import sean from '../Components/Images/Members/sean-tjoa.jpg';
import tristan from '../Components/Images/Members/tristan-dewing.jpg';
import vince from '../Components/Images/Members/vince-front.jpg';

const exec = [
  {
    name: 'Sean Tjoa',
    pos: 'President',
    year: "'24",
    img: sean,
  },
  {
    name: 'Christine Hamakawa',
    pos: 'External Vice-President',
    year: "'24",
    img: christine,
  },
  {
    name: 'Tristan Dewing',
    pos: 'Internal Vice-President',
    year: "'24",
    img: tristan,
  },
  {
    name: 'Madison Kohls',
    pos: 'Executive Advisor',
    year: "'24",
    img: madison,
  },
  {
    name: 'Emily Gong',
    pos: 'Director Of Professional Outreach',
    year: "'24",
    img: emily,
  },
  {
    name: 'Aimee Xu',
    pos: 'Director Of Finance',
    year: "'24",
    img: aimee,
  },
  {
    name: 'Vincent Front',
    pos: 'Director Of Membership',
    year: "'24",
    img: vince,
  },
  {
    name: "Hayden D'Souza",
    pos: 'Webmaster',
    year: "'24",
    img: hayden,
  },
]

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
        <div className="profiles-container">
        {exec.map((item, index) => {
          return (
            <MemberCard
              key={index}
              name={item.name}
              pos={item.pos}
              img={item.img}
              year={item.year}
              className="member-card"
            />
          )
        })}
        </div>
      </section>
    </div>
  )




}

export default Team;