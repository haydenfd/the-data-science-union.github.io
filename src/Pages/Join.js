import React from 'react'
import './index.css'
import Accordion from '../Components/Accordion';

const faqs = [
  {
    question: "What does DSU look for in their applicants?",
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    question: "What skills is DSU expecting? Do I need to take certain classes to be prepared?",
    answer:
      "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
  },
  {
    question: "How can I prepare for interviews?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
];

const Join = () => { 

  return (
    <div className="join-us-container">
      <section className="recruitment-container">
      <h1 className="join-title">
        Recruitment
      </h1>
      <p className="join-text">
        We have recently concluded the Spring 2022 cycle of recruitment. Our next cycle begins in Fall 2022. <a href='https://www.google.com/' target='_blank' rel='noreferrer'><br/>Interested in receiving more updates about this?</a>
        </p>
      </section>
      <section className="faq-container">
      <h1 className="join-title">
        FAQs
        </h1>
          {faqs.map((item, i) => (
            <Accordion
              question={item.question}
              answer={item.answer}
            />
          ))}
      </section>
    </div>
  )

}


export default Join;