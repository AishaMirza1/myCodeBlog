import styles from "./sideNavBar.module.css";
import { sideNavLinks } from "../../data";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <aside className={styles.sideNav}>
      <p>
        <NavLink to="">All Components</NavLink>
      </p>
      <nav>
        <ul>
          {sideNavLinks.map((link, i) => {
            return (
              <li key={i}>
                <NavLink to={link.href}>{link.title} </NavLink>
                <div></div>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
