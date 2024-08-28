"use client"
import React, { useEffect, useRef } from 'react';
import styles from './FintechServices.module.css';

const FintechServices = () => {
  const stickyColumnRef = useRef(null);
  const stickyWrapperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateSticky = () => {
      if (window.innerWidth >= 992) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const stickyWrapperRect = stickyWrapperRef.current.getBoundingClientRect();
        const stickyColumnRect = stickyColumnRef.current.getBoundingClientRect();

        if (stickyWrapperRect.top <= 20) {
          stickyColumnRef.current.classList.add(styles.fixed);
          stickyColumnRef.current.style.width = `${stickyWrapperRect.width}px`;
          if (containerRect.bottom <= stickyColumnRect.bottom + 20) {
            stickyColumnRef.current.style.top = `${containerRect.bottom - stickyColumnRect.height}px`;
          } else {
            stickyColumnRef.current.style.top = "20px";
          }
        } else {
          stickyColumnRef.current.classList.remove(styles.fixed);
          stickyColumnRef.current.style.width = "";
          stickyColumnRef.current.style.top = "";
        }
      } else {
        stickyColumnRef.current.classList.remove(styles.fixed);
        stickyColumnRef.current.style.width = "";
        stickyColumnRef.current.style.top = "";
      }
    };

    window.addEventListener("scroll", updateSticky);
    window.addEventListener("resize", updateSticky);
    updateSticky();

    return () => {
      window.removeEventListener("scroll", updateSticky);
      window.removeEventListener("resize", updateSticky);
    };
  }, []);

  const services = [
    {
      title: "Financial Software Development",
      description: "Our financial software development services provide extensive technical and strategic support to fintech companies. We ensure your business objectives are met with precision.",
    },
    {
      title: "Mobile Banking Software Development",
      description: "As a leading fintech software development company, we assist tech vendors in planning and implementing sophisticated mobile banking solutions. Our approach ensures the creation of secure and user-friendly mobile banking applications.",
    },
    {
      title: "Financial Software Development",
      description: "Our financial software development services provide extensive technical and strategic support to fintech companies. We ensure your business objectives are met with precision.",
    },
    {
      title: "Wealth Management Software Development",
      description: "As a leading fintech software development company, we assist tech vendors in planning and implementing sophisticated mobile banking solutions. Our approach ensures the creation of secure and user-friendly mobile banking applications.",
    },
    {
      title: "Financial Software Development",
      description: "Our financial software development services provide extensive technical and strategic support to fintech companies. We ensure your business objectives are met with precision.",
    },
    {
      title: "Mobile Banking Software Development",
      description: "As a leading fintech software development company, we assist tech vendors in planning and implementing sophisticated mobile banking solutions. Our approach ensures the creation of secure and user-friendly mobile banking applications.",
    },
    {
        title: "Mobile Banking Software Development",
        description: "As a leading fintech software development company, we assist tech vendors in planning and implementing sophisticated mobile banking solutions. Our approach ensures the creation of secure and user-friendly mobile banking applications.",
      },
      {
        title: "Financial Software Development",
        description: "Our financial software development services provide extensive technical and strategic support to fintech companies. We ensure your business objectives are met with precision.",
      },
  ];

  return (
    <section className="py-5">
      <div className={`container ${styles.stickyPart}`} ref={containerRef}>
        <div className="row">
          <div className="col-lg-4 sticky-wrapper" ref={stickyWrapperRef}>
            <div className={styles.stickyColumn} ref={stickyColumnRef}>
              <h1 className="display-4 fs-4 fw-bold">
                Increase Your Business Revenues With Our Fintech Development
                Services
              </h1>
            </div>
          </div>
          <div className="col-lg-8">
            <p className="mb-5">
              We offer comprehensive fintech software development services
              designed to elevate your business and increase your revenue. As a
              fintech software development agency, our expertise in end-to-end
              fintech application design and development ensures that your
              innovative ideas are transformed into agile and robust
              applications.
            </p>
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className={`${styles.serviceCard} h-100 d-flex flex-column`}>
                    <h3 className="fs-5 fw-bold">{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="mt-auto">
                      <a href="#" className={styles.readMore}>Read more →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FintechServices;