import styles from "./mobileNav.module.css";
import { navLinks } from "../../data";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function MoboleNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  function handleMobileNavClick() {
    setShowMobileNav((prev) => !prev);
  }
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateX: -20,
      translateY: -20,
    },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.65,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.5 + i * 0.2,
      },
      translateX: 0,
      translateY: 0,
    }),
    exit: {
      opacity: 0,
      transition: { ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <>
      <motion.nav
        variants={{
          close: {
            height: "0px",
            transition: { duration: 0.35, ease: "linear" },
          },
          open: {
            height: "250px",
            transition: { duration: 0.35, ease: "linear" },
          },
          exit: {
            height: "0px",
            transition: { duration: 0.21, delay: 0.3, ease: "linear" },
          },
        }}
        animate={showMobileNav ? "open" : "exit"}
        initial="close"
        className={`${styles.nav} ${styles.mobileNav}`}
      >
        <AnimatePresence>
          {showMobileNav && (
            <motion.ul className={styles.perspectiveContainer}>
              {navLinks.map((link, i) => {
                return (
                  <motion.li
                    onClick={() => setShowMobileNav(false)}
                    key={i}
                    variants={perspective}
                    animate={showMobileNav && "enter"}
                    initial="initial"
                    exit="exit"
                    custom={i}
                  >
                    <NavLink to={link.href} activeclasscame="active">
                      {link.title}
                    </NavLink>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>

      <motion.div
        className={styles.navMobileBtn}
        onClick={handleMobileNavClick}
      >
        <motion.span
          variants={{
            open: { rotate: "0" },
            close: { rotate: "45deg", y: 8 },
          }}
          transition={{ duration: 0.15, ease: "linear" }}
          animate={showMobileNav ? "close" : "open"}
        ></motion.span>
        <motion.span
          variants={{
            open: { display: "inline-block" },
            close: { display: "none" },
          }}
          transition={{ duration: 0.15, ease: "linear" }}
          animate={showMobileNav ? "close" : "open"}
        ></motion.span>
        <motion.span
          variants={{
            open: { rotate: "0" },
            close: { rotate: "-45deg" },
          }}
          transition={{ duration: 0.15, ease: "linear" }}
          animate={showMobileNav ? "close" : "open"}
        ></motion.span>
      </motion.div>
    </>
  );
}
