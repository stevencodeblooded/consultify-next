import React from 'react';
import Marquee from "react-fast-marquee";
import styles from './InfiniteScroll.module.css';

const Rectangle = ({ color }) => (
  <div className={`${styles.rectangle} ${styles[color]}`}>
    <div className={styles.topHalf}></div>
    <div className={styles.bottomHalf}></div>
  </div>
);

const InfiniteScroll = () => {
  return (
    <div>
      <div className='container mt-5'>
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
      <div className={styles.marqueeContainer}>
        <Marquee gradient={false} speed={20} autoFill>
          <Rectangle color="gray" />
        </Marquee>
        <Marquee gradient={false} speed={20} autoFill direction="right">
          <Rectangle color="gray" />
        </Marquee>
      </div>
    </div>
  );
};

export default InfiniteScroll;