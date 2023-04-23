import styles from './styles.module.css';
const ProgressOverviewBar = ({ percent, name }) => {
    return (
      <div className={styles.po_stats_card}>
        <div className={styles.po_sec}>
          <h5 className={styles.po_percent}>{percent}%</h5>
          <h5 className={styles.po_text}>{name}</h5>
        </div>
        <div className={styles.po_bar}></div>
      </div>
    );
  };
  
  export default ProgressOverviewBar