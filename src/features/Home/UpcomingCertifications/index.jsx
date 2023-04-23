import React from 'react'
import styles from './styles.module.css';
import UpcomingCertificationsCard from './UpcomingCertificationsCard';
export default function UpcomingCertifications() {
  return (
    <div className={styles.container}>
        <h3 className={styles.head}>Upcoming Certifications</h3>
        <UpcomingCertificationsCard />
    </div>
  )
}


