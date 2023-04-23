import React from "react";
import styles from "./styles.module.css";
import StatsCard from "../../../components/StatsCard";
import { assignmentStatsData } from "../../../constants";

export default function Assignment() {
  return (
    <div className={styles.quiz}>
      <div className={styles.head}>
        <div className={styles.head_container}>
          <h3 className={styles.heading}>Assignment-1: Operators | Loop</h3>
          <div className={styles.head_right}>
            {assignmentStatsData.stats.map(({ score, name }) => (
              <div className={styles.head_stats}>
                <h5 className={styles.head_stats_number}>{score}</h5>
                <h5 className={styles.head_stats_title}>{name}</h5>
              </div>
            ))}
          </div>
        </div>
        <h5 className={styles.sub_heading}>20 December 2021</h5>
      </div>
      <h4 className={styles.title}>Assignment Details</h4>
      <StatsCard statsData={assignmentStatsData} Stats={Stats} />
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