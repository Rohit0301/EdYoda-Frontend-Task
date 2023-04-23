import { courseProgressData, profileIcon } from "../../../constants";
import ProgressBar from "./ProgressBar";
import styles from "./styles.module.css";
import DataWranglingIcon from "../../../assets/Data Wrangling.png";
const ContinueLearningCard = () => {
    return (
      <div className={styles.card_container}>
        <p className={styles.view_module}>view module details</p>
        <div className={styles.card}>
          <div className={styles.sec_1}>
            <div className={styles.left}>
              <div className={styles.left_head}>
                <img src={DataWranglingIcon} className={styles.left_img} />
                <div className={styles.left_text}>
                  <h4 className={styles.left_name}>
                    Data Wrangling & visualization
                  </h4>
                  <div className={styles.left_profile}>
                    <img src={profileIcon} className={styles.left_profile_img} />
                    <h5 className={styles.left_profile_name}>Test Instuctor</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              {courseProgressData.map(({ name, min, max, id }) => (
                <ProgressBar key={id} min={min} max={max} name={name} />
              ))}
            </div>
          </div>
          <div className={styles.sec_2}>
            <h4 className={styles.plan}>Today's plan</h4>
            <h4 className={styles.date}>21 March 2022</h4>
            <p className={styles.sec_2_title}>
              Data transformation using pandas - 3
            </p>
            <div className={styles.feedback}>
              <h5 className={styles.feedback_text}>Daily Feedback</h5>
              <span className={styles.feedback_time}>opens at 07: 30 PM</span>
            </div>
            <button className={styles.join_btn}>Join Live session</button>
            <h6 className={styles.join_time}>Begins At 07:30 PM</h6>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default ContinueLearningCard;