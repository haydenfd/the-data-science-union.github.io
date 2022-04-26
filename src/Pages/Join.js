import React from 'react'
import './index.css'
import Accordion from '../Components/Accordion';

const faqs = [
  {
    question: "What does DSU look for in their applicants?",
    answer:
      "For prospective members, we are looking for students who are passionate about developing their technical skills alongside like-minded peers and want to answer questions about our world through an evidence-based, data-driven method.",
  },
  {
    question: "What skills is DSU expecting? Do I need to take certain classes to be prepared?",
    answer:
      "We recommend that prospective members have some experience with data analysis or statistical programming. However, we don't expect you to know everything because we will train you in preparation for data projects!",
  },
  {
    question: "How can I prepare for interviews?",
    answer:
      "Be yourself, and please bring your personality! Think about who you are, your values, your principles, and your goals.",
  },
  {
    question:"Can I apply if I am an incoming freshman? Are there any major restrictions for applying?",
    answer:"No! We welcome people in difference years and from different backgrounds as long as they want to pursue a future in a data-related field.",
  },
  {
    question:"I have some experience doing data-related projects. Can I skip the curriculum track and directly join the project teams?",
    answer:"If you’re interested in skipping the curriculum, let us know during your interview! We’ll follow up with you to determine whether you’re a good fit for the project teams.",
  }
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