'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <p className='container' style={{fontSize: '12px', textAlign: 'right', marginTop: '2px'}}>India . United State . Bahamas</p>
      <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light`}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.navbarHeader}>
            <Link href="/" className="navbar-brand">
              <Image src="/assets/Logo.png" alt="Logo" width={150} height={50} />
            </Link>
            <button
              className={`navbar-toggler ${styles.navbarToggler}`}
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className={`${styles.navbarCollapse} ${isOpen ? styles.show : ''}`} id="navbarNav">
            <ul className={styles.navbarNav}>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink} onClick={toggleNavbar}>About</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink} onClick={toggleNavbar}>Solutions</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink} onClick={toggleNavbar}>Industries</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink} onClick={toggleNavbar}>Hire Developer</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink} onClick={toggleNavbar}>Blogs</Link>
              </li>
              <li className={styles.navItem} >
                <Link href="#" className={`${styles.navLink} ${styles.scheduleCall} ${styles.greenText}`} onClick={toggleNavbar}>
                | Schedule call
                  <ArrowUpRight className={styles.arrowIcon} size={18} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;