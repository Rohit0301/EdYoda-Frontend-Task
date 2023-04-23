import { progressOverViewData } from "../../../constants";
import ProgressOverviewBar from "./ProgressOverviewBar";
import styles from "./styles.module.css";
const ProgressOverviewCard = () => {
  return (
    <div className={styles.po_card}>
      <h4 className={styles.po_head}>Progress Overview</h4>
      {progressOverViewData.map(({ name, percent, id }) => (
        <ProgressOverviewBar name={name} percent={percent} key={id} />
      ))}

      <p className={styles.po_view_details}>view details progress</p>
    </div>
  );
};
export default ProgressOverviewCard;
