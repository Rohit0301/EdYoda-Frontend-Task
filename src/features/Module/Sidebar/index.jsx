import React from "react";
import styles from "./styles.module.css";
import { ModulesSidebarMenu } from "../../../constants";
import useCourse from "../../../hooks/useCourse";

export default function Sidebar() {
  const { selectedModule, handleSelectedModule } = useCourse();
  return (
    <div className={styles.sidebar}>
      {ModulesSidebarMenu.map(({ key, label, icon, activeIcon, path }) => (
        <div
          key={key}
          onClick={() => handleSelectedModule(key)}
          className={`${styles.menu} ${
            key === selectedModule ? styles.selected_menu : ""
          }`}
        >
          <img
            src={key === selectedModule ? activeIcon : icon}
            className={styles.menu_img}
          />
          <p className={styles.menu_text}>{label}</p>
        </div>
      ))}
    </div>
  );
}
