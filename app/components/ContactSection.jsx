import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section className={`${styles.contactContainer} py-5`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 contact-section">
            <h2 className="fs-4">
              Increase Your Business Revenues With Our Fintech Development
              Services
            </h2>

            <div className={styles.contactInfoSection}>
              <div className={`${styles.contactInfo} mt-5`}>
                <h4 className="fs-5">USA</h4>
                <p>Company name</p>
                <p>
                  The software development landscape is constantly evolving, and
                  the pressure...
                </p>
                <p>info@companyname.com</p>
                <p>+01 38293 22343</p>
              </div>

              <div className={styles.contactInfo}>
                <h4 className="fs-5">India</h4>
                <p>Company name</p>
                <p>
                  The software development landscape is constantly evolving, and
                  the pressure...
                </p>
                <p>info@companyname.com</p>
                <p>+01 38293 22343</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <p>
              We offer comprehensive fintech software development services
              designed to elevate your business and increase your revenue. As a
              fintech software development agency, our expertise in end-to-end
              fintech application design and development ensures that your
              innovative ideas are transformed into agile and robust
              applications.
            </p>

            <div className={styles.formSection}>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className={`form-control marginMobile ${styles.formControl}`}
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className={`form-control ${styles.formControl}`}
                      id="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <input
                      type="email"
                      className={`form-control ${styles.formControl}`}
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className={`form-control ${styles.formControl}`}
                      id="company"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className={`form-control ${styles.formControl}`}
                      id="location"
                      placeholder="Location"
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12">
                    <textarea
                      className={`form-control ${styles.formControl}`}
                      id="requirement"
                      rows="4"
                      placeholder="High-Level Requirement"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;