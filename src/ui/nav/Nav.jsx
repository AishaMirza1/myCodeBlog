import styles from "./nav.module.css";
import { navLinks } from "./data";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  function handleMobileNavClick() {
    setShowMobileNav((prev) => !prev);
  }
  return (
    <header className={styles.header}>
      <p className={styles.logo}>
        A <span style={{ color: "#ff0055", fontSize: " 6rem" }}>.</span>
      </p>
      <motion.nav
        variants={{
          close: {
            x: "140%",
            transition: { duration: 0.75, ease: "linear" },
          },
          open: {
            x: "0%",
            transition: { duration: 0.75, ease: "linear" },
          },
          exit: {
            x: "140%",
            transition: { duration: 0.75, ease: "linear" },
          },
        }}
        animate={showMobileNav ? "open" : "close"}
        className={styles.nav}
      >
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
      </motion.nav>
      <div className={styles.navMobileBtn} onClick={handleMobileNavClick}>
        <motion.span></motion.span>
        <motion.span></motion.span>
        <motion.span></motion.span>
      </div>
    </header>
  );
}
