// PartnerSection.js
import React from 'react';
import styles from './Hero.module.css';

const PartnerSection = () => {
  return (
    <section className="partner-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <h1 className={styles.heroTitle}>
              We are your next Product Development Partner
            </h1>
          </div>
          <div className="col-lg-3">
            <div className={`${styles.ctaBox} mb-3`}>
              <h5 className={styles.textGreen}>
                Do you want build a Project with Expert Team
                <span className="float-end">→</span>
              </h5>
              <p className="text-muted small">
                Are you ready to boost your company's technical capabilities
                with the help of AI developers?
              </p>
            </div>
            <hr />
            <div className={styles.ctaBox}>
              <h5 className={styles.textGreen}>
                Looking for Expert Fintech Developer
                <span className="float-end">→</span>
              </h5>
              <p className="text-muted small">
                Are you ready to boost your company's technical capabilities
                with the help of AI developers?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;