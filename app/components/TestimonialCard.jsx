import React from 'react';
import styles from './TestimonialCard.module.css'

const RatingDots = ({ score }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`${styles.ratingDot} ${i >= score ? styles.empty : ''}`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ name, position, content, ratings, tags }) => (
  <div className={`card mt-3 ${styles.testimonialCard}`}>
    <div className="card-body">
      <div className="row">
        <div className={`col-lg-8 mb-3 mb-lg-0 ${styles.contentColumn}`}>
          <h5 className="card-title">{name}</h5>
          <p className="card-subtitle mb-2 text-muted">{position}</p>
          <p className={`card-text ${styles.testimonialContent}`}>{content}</p>
        </div>
        <div className={`col-lg-4 ${styles.ratingsColumn}`}>
          <h6>Rating Breakdown</h6>
          {Object.entries(ratings).map(([category, score]) => (
            <div key={category} className="d-flex justify-content-between mb-1">
              <span>{category}</span>
              <RatingDots score={score} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className={styles.cardFooter}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>{tag}</span>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Williams",
      position: "Manager at ApneeCommunity",
      content: "Signity Solutions produces high-quality deliverables rapidly. They are highly accessible, responsive, and receptive to feedback. Their expertise and excellent communication make collaboration effortless.",
      ratings: {
        "Quality": 5,
        "Schedule & Timing": 3,
        "Communication": 4,
        "Overall Rating": 3
      },
      tags: ["Fintech", "Mobile Wallet Development", "Team Hiring"]
    },
    {
      name: "Emily Williams",
      position: "Manager at ApneeCommunity",
      content: "Signity Solutions produces high-quality deliverables rapidly. They are highly accessible, responsive, and receptive to feedback. Their expertise and excellent communication make collaboration effortless.",
      ratings: {
        "Quality": 5,
        "Schedule & Timing": 3,
        "Communication": 4,
        "Overall Rating": 3
      },
      tags: ["Fintech", "Mobile Wallet Development", "Team Hiring"]
    },
    {
      name: "Emily Williams",
      position: "Manager at ApneeCommunity",
      content: "Signity Solutions produces high-quality deliverables rapidly. They are highly accessible, responsive, and receptive to feedback. Their expertise and excellent communication make collaboration effortless.",
      ratings: {
        "Quality": 5,
        "Schedule & Timing": 3,
        "Communication": 4,
        "Overall Rating": 3
      },
      tags: ["Fintech", "Mobile Wallet Development", "Team Hiring"]
    },
   
    // Add more testimonials here
  ];

  return (
    <section className="py-5">
      <div className="container mb-3">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h1 className="fs-4 fw-bold lh-sm">
              Increase Your Business Revenues With Our Fintech Development
              Services
            </h1>
          </div>
          <div className="col-lg-8">
            <p className="fs-6">
              We offer comprehensive fintech software development services
              designed to elevate your business and increase your revenue. As a
              fintech software development agency, our expertise in end-to-end
              fintech application design and development ensures that your
              innovative ideas are transformed into agile and robust
              applications.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;