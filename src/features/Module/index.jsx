import React from "react";
import styles from "./styles.module.css";
import Sidebar from "./Sidebar";
import Quiz from "./Quiz";
import Assignment from "./Assignment";
import Topic from "./Topic";
import useCourse from "../../hooks/useCourse";
export default function ModuleContainer() {
  const { selectedModule } = useCourse();
  return (
    <div className={styles.module}>
      <Sidebar />
      <div className={styles.module_main}>
        {selectedModule === "quiz" ? (
          <Quiz />
        ) : selectedModule === "assignment" ? (
          <Assignment />
        ) : (
          <Topic />
        )}
      </div>
    </div>
  );
}
