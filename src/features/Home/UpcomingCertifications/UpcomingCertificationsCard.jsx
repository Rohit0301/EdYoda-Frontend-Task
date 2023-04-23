import styles from "./styles.module.css";
import DataAnalysisIcon from "../../../assets/Data-Analysis.png";
import { examStructureData } from "../../../constants";
import ExamRound from "./ExamRound";
const UpcomingCertificationsCard = () => {
  return (
    <div className={styles.card}>
      <img src={DataAnalysisIcon} className={styles.img} />
      <div className={styles.sec_1}>
        <div className={styles.attempt}>
          <small className={styles.attempt_lft}>certification</small>
          <small className={styles.attempt_rgt}>Attempt 1</small>
        </div>
        <h4 className={styles.name}>Data Analysis Certification</h4>
        <div className={styles.completed}>
          <small className={styles.completed_lft}>Completed</small>
          <small className={styles.completed_rgt}>21 march 2022</small>
        </div>
      </div>
      <div className={styles.sec_2}>
        <h6 className={styles.structure}>Exam Structure</h6>
        {examStructureData.map(({ id, name, tests }) => (
          <ExamRound key={id} name={name} tests={tests} />
        ))}
      </div>
      <button className={styles.btn}>view Exam Details</button>
    </div>
  );
};

export default UpcomingCertificationsCard;
