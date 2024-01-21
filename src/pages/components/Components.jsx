import { Outlet } from "react-router-dom";

import SideNav from "../../ui/sideNavBar/SideNavBar";
import styles from "./components.module.css";
export default function Components() {
  return (
    <div className={styles.componentsContainer}>
      <SideNav />
      <Outlet />
    </div>
  );
}
