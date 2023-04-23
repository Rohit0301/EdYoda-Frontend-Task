import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import useCourse from "../../../hooks/useCourse";
import { programs } from "../../../constants";
export default function DropDown() {
  const {selectedProgram} = useCourse()
  return (
    <div className={styles.dropdown}>
      <div className={styles.select}>
        <p className={styles.title}>{selectedProgram}</p>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.drop}>
        <p className={styles.select_prog}>Select Program</p>
        <div className={styles.program_container}>
          {programs.map(({ id, name }) => (
            <p
              key={id}
              className={`${styles.program} ${
                name === selectedProgram ? styles.selected_program : ""
              }`}
            >
              {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
