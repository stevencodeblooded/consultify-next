import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer border-top py-3">
        <div className="row  fw-bold">
          {/* Navigation Links */}
          <div className="col-md-8">
            <ul className="nav justify-content-start flex-column flex-md-row">
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-black">About</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-black">Solutions</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-black">Industries</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-black">Hire Developer</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-black">Blogs</Link></li>
              <li className="nav-item"><Link href="#" className="nav-link px-2 text-black">Policy</Link></li>
            </ul>
          </div>
          {/* Copyright */}
          <div className="col-md-4 d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0">
            <span className="text-body-secondary">
              <Link href="mailto:info@companyname.com" className="text-black text-decoration-none">Copryright&copy;companyname.com</Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;