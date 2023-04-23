import React from "react";
import styles from "./styles.module.css";
import TopicTabs from "./TopicTabs";
export default function Topic() {
  return (
    <div className={styles.quiz}>
      <div className={styles.head}>
        <h3 className={styles.heading}>Python Loops</h3>
        <h5 className={styles.sub_heading}>
          15 December 2021, Wednesday, 07:30 PM
        </h5>
      </div>
      <p className={styles.feedback}>Daily Feedback</p>
      <TopicTabs />
    </div>
  );
}


