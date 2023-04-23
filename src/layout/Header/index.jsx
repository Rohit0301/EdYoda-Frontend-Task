import React from "react";
import styles from "./styles.module.css";
import DropDown from "./DropDown";
import { useLocation } from "react-router-dom";
import useCourse from "../../hooks/useCourse";
export default function Header() {
  const {pathname} = useLocation();
  const {selectedProgram} = useCourse();
  const course = pathname === '/' ? '' : selectedProgram;
  return (
    <div className={styles.header}>
      {course ? <p className={styles.title}>{course}</p> : <DropDown />}
      <h2 className={styles.course}>Data Scientist Program</h2>
    </div>
  );
}
