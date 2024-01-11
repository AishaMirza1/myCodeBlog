import styles from "./nav.module.css";
import { navLinks } from "./data";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <a
                style={{ color: link.color }}
                className={styles.a}
                href={link.href}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
