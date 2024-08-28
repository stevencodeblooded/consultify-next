import React from 'react';
import Image from 'next/image';
import styles from './BlogCards2.module.css';

const BlogCards = () => {
  const cardData = [
    {
      imageSrc: "/assets/genAi.svg",
      imageAlt: "AI Image 1",
      title: "How can Gen AI accelerate and transform your SDLC?",
      text: "The software development landscape is constantly evolving, and the pressure...",
    },
    {
      imageSrc: "/assets/genAi2.svg",
      imageAlt: "AI Image 2",
      title: "How can Gen AI accelerate and transform your SDLC?",
      text: "The software development landscape is constantly evolving, and the pressure...",
    },
    {
      imageSrc: "/assets/genAi3.svg",
      imageAlt: "AI Image 3",
      title: "How can Gen AI accelerate and transform your SDLC?",
      text: "The software development landscape is constantly evolving, and the pressure...",
    },
  ];

  return (
    <section>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h1 className="fs-4 fw-bold lh-sm">
              Increase Your Business Revenues With Our Fintech Development Services
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

      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cardData.map((card, index) => (
            <div key={index} className="col">
              <div className={`h-100 ${styles.card}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.imageSrc}
                    className={styles.cardImage}
                    alt={card.imageAlt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>{card.title}</h5>
                  <p className={styles.cardText}>{card.text}</p>
                  <a href="#" className={styles.readMore}>Read more →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;