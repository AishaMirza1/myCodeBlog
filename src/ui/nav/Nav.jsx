import styles from "./nav.module.css";
import { navLinks } from "./data";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <NavLink
                style={{ color: link.color }}
                className={styles.a}
                to={link.href}
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
