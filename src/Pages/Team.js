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
        <MemberCard
          name="Sean Tjoa"
          pos="President"
          src={sean}
          className="member-card"
        />
        <MemberCard
          name="Tristan Dewing"
          pos="Internal Vice-President"
          src={tristan}
          className="member-card"
        />
        <MemberCard
          name="Christine Hamakawa"
          pos="External Vice-President"
          src={christine}
          className="member-card"
        />
        <MemberCard
          name="Emily Gong"
          pos="Director Of Professional Outreach"
          src={emily}
          className="member-card"
        />
        <MemberCard
          name="Aimee Xu"
          pos="Director Of Finance"
          src={aimee}
          className="member-card"
        />
        <MemberCard
          name="Madison Kohls"
          pos="Executive Advisor"
          src={madison}
          className="member-card"
        />
        <MemberCard
          name="Hayden D'Souza"
          pos="Webmaster"
          src={hayden}
          className="member-card"
        />
        <MemberCard
          name="Vincent Front"
          pos="Director Of Membership"
          src={vince}
          className="member-card"
        />
      </section>
    </div>
  )




}

export default Team;