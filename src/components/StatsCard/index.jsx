import React from "react";
import styles from "./styles.module.css";
import CalenderIcon from "../../assets/calendar.svg";
import ClockIcon from "../../assets/clock-blue.svg";
export default function StatsCard({ statsData, Stats }) {
  const { stats, date_time } = statsData;
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        {stats.map(({ score, name }) => (
            <Stats score={score} name={name} />
        ))}
      </div>
      <div className={styles.right}>
        <div className={styles.right_sec}>
          <h4 className={styles.start}> Start:</h4>
          <h4 className={styles.date_time}>
            <img src={CalenderIcon} className={styles.img} />{" "}
            {date_time.start.date}
          </h4>
          <h4 className={styles.date_time}>
            {" "}
            <img src={ClockIcon} className={styles.img} />{" "}
            {date_time.start.time}
          </h4>
        </div>
        <div className={styles.right_sec}>
          <h4 className={styles.start}> Due:</h4>
          <h4 className={styles.date_time}>
            <img src={CalenderIcon} className={styles.img} />{" "}
            {date_time.due.date}
          </h4>
          <h4 className={styles.date_time}>
            {" "}
            <img src={ClockIcon} className={styles.img} /> {date_time.due.time}
          </h4>
        </div>
      </div>
    </div>
  );
}
