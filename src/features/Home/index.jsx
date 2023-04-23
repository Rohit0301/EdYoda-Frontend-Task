import React from 'react'
import UpcomingCertifications from './UpcomingCertifications'
import styles from './styles.module.css';
import ContinueLearning from './ContinueLearning';
export default function HomeContainer() {
  return (
    <div className={styles.home}>
        <UpcomingCertifications />
        <ContinueLearning />
    </div>
  )
}
