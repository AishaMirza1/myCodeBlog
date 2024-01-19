import styles from "./nav.module.css";
import { navLinks } from "./data";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <p className={styles.logo}>
        A <span style={{ color: "#ff0055", fontSize: " 6rem" }}>.</span>
      </p>
      <ul>
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
