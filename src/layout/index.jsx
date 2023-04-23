import CourseProvider from "../context";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MessageIcon from '../assets/message.svg'
import styles from "./styles.module.css";
export default function Layout({ children }) {
  return (
    <CourseProvider>
      <div className={styles.paper}>
        <Navbar />
        <Header />
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.main}>{children}</div>
        </div>
        <div className={styles.message}>
          <img src={MessageIcon} className={styles.msg_img}/>
        </div>
      </div>
    </CourseProvider>
  );
}
