import { profileIcon } from '../../constants';
import styles from './styles.module.css';
export default function Navbar() {
  return (
    <div className={styles.nav}>
        <h1 className={styles.title}>Edyoda</h1>
        <div className={styles.right_section}>
            <p className={styles.text}>Hi Test Learner!</p>
            <img src={profileIcon} className={styles.img}/>
        </div>
    </div>
  )
}
