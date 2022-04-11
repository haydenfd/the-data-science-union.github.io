import React from 'react'
import './index.css'

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    question: "Dignissimos sequi architecto?",
    answer:
      "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
  },
  {
    question: "Voluptas praesentium facere?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
];

const Join = () => { 

  return (
    <div>
      <section className="recruitment-container">
      <h1 className="join-title">
        Recruitment
      </h1>
      <p className="join-text">
        We have recently concluded the Spring 2022 cycle of recruitment. Our next cycle begins in Fall 2022. <a href='https://www.google.com/' target='_blank' rel='noreferrer'>Interested in receiving more updates about this?</a>
        </p>
      </section>
      <section className="faq-container">
      <h1 className="join-title">
        FAQs
        </h1>
        <div className="accordion">
          {faqs.map((item, i) => (
            <div className="item">
              <div className="title">
                <h2>{item.question}</h2>
              </div>
              <div className="content">
                {item.content}
              </div>
            </div>
  ))}
        </div>
      </section>
    </div>
  )

}


export default Join;