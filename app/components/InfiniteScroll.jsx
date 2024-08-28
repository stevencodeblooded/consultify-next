// InfiniteScroll.js
import React from 'react';
import styles from './InfiniteScroll.module.css';

const InfiniteScroll = () => {
  return (
    <div className="container-fluid">
      <div className="container mb-5">
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

      {/* Upper Row */}
      <div className={`${styles.scrollingWrapper} ${styles.scrollingWrapperUpper}`}>
        <div className={styles.scrollingContent}>
          {[...Array(12)].map((_, index) => (
            <div key={index} className={styles.scrollingItem}>
              <img src={`/api/placeholder/150/150`} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Lower Row */}
      <div className={`${styles.scrollingWrapper} ${styles.scrollingWrapperLower} mt-3`}>
        <div className={styles.scrollingContent}>
          {[...Array(12)].map((_, index) => (
            <div key={index} className={styles.scrollingItem}>
              <img src={`/api/placeholder/150/150`} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;