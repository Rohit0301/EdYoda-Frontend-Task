import React from "react";
import styles from "./styles.module.css";
import { SidebarMenu } from "../../constants";
import { Link, useLocation } from "react-router-dom";
export default function Sidebar() {
  const { pathname } = useLocation();
  let selectedMenu = pathname.substring(1);
  if(!selectedMenu) selectedMenu='home'
  return (
    <div className={styles.sidebar}>
      {SidebarMenu.map(({ key, label, path, Icon }) => (
        <Menu
          key={key}
          Icon={Icon}
          label={label}
          path={path}
          isSelected={selectedMenu === key}
        />
      ))}
    </div>
  );
}

const Menu = ({ label, isSelected, path, Icon }) => {
  return (
    <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className={`${styles.menu_item} ${
          isSelected ? styles.selected_menu : ""
        }`}
      >
        <Icon isSelected={isSelected} />
        <p className={styles.menu_label}>{label}</p>
      </div>
    </Link>
  );
};
