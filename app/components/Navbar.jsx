'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src="/assets/Logo.png" alt="Logo" width={150} height={50} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}  id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold">
            <li className="nav-item">
              <Link href="#" className="nav-link" onClick={toggleNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link" onClick={toggleNavbar}>Solutions</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link" onClick={toggleNavbar}>Industries</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link" onClick={toggleNavbar}>Hire Developer</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link" onClick={toggleNavbar}>Blogs</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link text-green" onClick={toggleNavbar}>Schedule call</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;