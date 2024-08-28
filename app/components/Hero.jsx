"use client"

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { ArrowUpRight } from 'lucide-react';

const PartnerSection = () => {
  const [headerText, setHeaderText] = useState('');
  const texts = [
    "We are your next Product Development Partner",
    "We bring your ideas to life with expertise",
    "Innovative solutions for your business growth"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setHeaderText(texts[currentIndex].slice(0, index));
      index++;
      if (index > texts[currentIndex].length) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className={styles.partnerSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <h1 className={styles.heroTitle}>
              {headerText}
            </h1>
          </div>
          <div className="col-lg-3">
            <div className={`${styles.ctaBox} mb-3`}>
              <h5 className={styles.textGreen}>
                Do you want build a Project with Expert Team
                <span className="float-end"><ArrowUpRight size={18} /></span>
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
                <span className="float-end"><ArrowUpRight size={18} /></span>
              </h5>
              <p className="text-muted small">
                Are you ready to boost your company's technical capabilities
                with the help of AI developers?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src="assets/hero.svg" 
          alt="City buildings" 
          className={styles.fullWidthImage}
        />
      </div>
    </section>
  );
};

export default PartnerSection;