import React from "react";
import styles from "./styles.module.css";
import ContinueLearningCard from "./ContinueLearningCard";
import ProgressOverviewCard from './ProgressOverviewCard'
export default function ContinueLearning() {
  return (
    <div className={styles.container}>
      <h3 className={styles.head}>Continue Learning</h3>
      <div className={styles.learning}>
        <ContinueLearningCard />
        <ProgressOverviewCard />
      </div>
    </div>
  );
}


