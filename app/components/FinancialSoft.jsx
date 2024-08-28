'use client'

import React, { useState } from 'react';
import styles from './ServiceCardsLayout.module.css';

const ServiceCard = ({ title, description, isSelected, onClick }) => (
  <div 
    className={`${styles['service-card-finn']} w-100 ${isSelected ? styles.selected : ''}`}
    onClick={onClick}
  >
    <h3 className={`${styles['service-title']} ${isSelected ? 'text-success' : ''}`}>{title}</h3>
    <p className={styles['service-description']}>{description}</p>
    <span className={styles['arrow-icon']}>&rarr;</span>
  </div>
);

const ServiceCardsLayout = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const services = [
    {
      title: "Financial Software Development",
      description: "Our financial software development services provide extensive technical and strategic support to fintech companies. We ensure your business objectives are met with precision."
    },
    {
      title: "Mobile Banking Software Development",
      description: "As a leading fintech software development company, we assist tech vendors in planning and implementing sophisticated mobile banking solutions. Our approach ensures the creation of secure and user-friendly mobile banking applications."
    },
    {
      title: "Financial Software Development",
      description: "Our financial software development services provide extensive technical and strategic support to fintech companies. We ensure your business objectives are met with precision."
    },
    {
      title: "Mobile Banking Software Development",
      description: "As a leading fintech software development company, we assist tech vendors in planning and implementing sophisticated mobile banking solutions. Our approach ensures the creation of secure and user-friendly mobile banking applications."
    }
  ];

  return (
    <div className="container my-5">
      <div className="container mb-4">
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

      <div className="row g-4 align-items-stretch">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 d-flex">
            <ServiceCard
              title={service.title}
              description={service.description}
              isSelected={selectedCard === index}
              onClick={() => setSelectedCard(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCardsLayout;