import React from "react";
import styles from "./styles.module.css";
import StatsCard from "../../../components/StatsCard";
import { quizStatsData } from "../../../constants";
export default function Quiz() {
  
  return (
    <div className={styles.quiz}>
      <div className={styles.head}>
        <h3 className={styles.heading}>Quiz-1 Data Types</h3>
        <h5 className={styles.sub_heading}>16 December 2021, Thrusday</h5>
      </div>
      <h4 className={styles.title}>Quiz Details</h4>
      <StatsCard statsData={quizStatsData} Stats={Stats} />
    </div>
  );
}


function Stats({score, name}) {
  return(
    <div className={styles.stats}>
          <h5 className={styles.stats_number}>{score}</h5>
          <h5 className={styles.stats_title}>{name}</h5>
    </div>
  )
}
