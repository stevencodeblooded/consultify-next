'use client'

import React from 'react';

const CompanyInfoGrid = () => {
  const companyData = [
    { location: 'USA', name: 'Company name', email: 'info@companyname.com', phone: '+01 38293 22343' },
    { location: 'India', name: 'Company name', email: 'info@companyname.com', phone: '+01 38293 22343' },
    { location: 'India', name: 'Company name', email: 'info@companyname.com', phone: '+01 38293 22343' },
    { location: 'USA', name: 'Company name', email: 'info@companyname.com', phone: '+01 38293 22343' },
    { location: 'India', name: 'Company name', email: 'info@companyname.com', phone: '+01 38293 22343' },
    { location: 'India', name: 'Company name', email: 'info@companyname.com', phone: '+01 38293 22343' },
  ];

  return (
    <div className="container my-4">
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

      <div className="row g-3">
        {companyData.map((company, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="company-card h-100 d-flex flex-column justify-content-between">
              <div>
                <p className="company-location fw-bold">{company.location}</p>
                <p>{company.name}</p>
                <p>The software development landscape is constantly evolving, and the pressure...</p>
              </div>
              <div>
                <p>{company.email}</p>
                <p>{company.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfoGrid;