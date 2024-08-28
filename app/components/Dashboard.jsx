import React from 'react';
import Image from 'next/image';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className="container">
      <div className={styles.dashboardContainer}>
        <Image
          src="/assets/dashboard.svg" 
          alt="Dashboard"
          layout="fill"
          objectFit="contain"
          className={styles.dashboardImage}
        />
      </div>
    </div>    
  );
};

export default Dashboard;