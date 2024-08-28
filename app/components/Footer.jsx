import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer border-top py-3">
        <div className="row">
          {/* Navigation Links */}
          <div className="col-md-8">
            <ul className="nav justify-content-start flex-column flex-md-row">
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">About</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Solutions</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Industries</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Hire Developer</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Blogs</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-body-secondary">Policy</Link></li>
            </ul>
          </div>
          {/* Copyright */}
          <div className="col-md-4 d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0">
            <span className="text-body-secondary">
              <Link href="mailto:info@companyname.com" className="text-body-secondary text-decoration-none">&copy; companyname.com</Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;