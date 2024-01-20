import styles from "./nav.module.css";
import { navLinks } from "./data";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.perspectiveContainer}>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <NavLink to={link.href} activeclasscame="active">
                {link.title}
                <span className={styles.linkDecoration} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
