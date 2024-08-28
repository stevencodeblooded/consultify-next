import React from 'react';
import Image from 'next/image';
import styles from './GenAICards.module.css';

const GenAICards = () => {
  const cardData = [
    { imageSrc: "/assets/genAi3.svg" },
    { imageSrc: "/assets/genAi3.svg" },
    { imageSrc: "/assets/genAi2.svg" },
    { imageSrc: "/assets/genAi2.svg" },
    { imageSrc: "/assets/genAi2.svg" },
    { imageSrc: "/assets/genAi2.svg" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">
            <div className="col-lg-4 mb-4 mb-lg-0">
                <h1 className="fs-4 fw-bold lh-sm">
                 Revenues With Our Fintech Development Services
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
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className={styles.genCard}>
                <div className={styles.cardBodyData}>
                  <Image
                    src={card.imageSrc}
                    className={styles.cardImgLeft}
                    alt="AI Image"
                    width={150}
                    height={150}
                  />
                  <div>
                    <h5 className="card-title mb-2">
                      How can Gen AI accelerate and transform your SDLC?
                    </h5>
                    <p className="card-text">
                      The software development landscape is constantly evolving,
                      and the pressure...
                    </p>
                    <a href="#" className={styles.readMore}>Read more →</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenAICards;