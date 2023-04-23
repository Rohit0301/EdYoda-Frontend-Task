import styles from './styles.module.css';
const ProgressBar = ({ name, min, max }) => {
    return (
      <div className={styles.complete}>
        <small className={styles.complete_title}>{name}</small>
        <div className={styles.bar_container}>
          <small className={styles.complete_text}>
            {min}/{max}
          </small>
          <div className={styles.complete_bar}></div>
        </div>
      </div>
    );
  };

  export default ProgressBar
  