import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./menu1.module.css";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Heading2 from "../../../../ui/Heading2";
export default function Menu1() {
  const [isActive, setIsActive] = useState(false);
  const variants = {
    open: {
      width: 480,
      height: 350,
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 100,
      height: 40,
      top: 0,
      right: 0,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <section>
      <Heading2 text="side menu" />
      <div className={styles.menuContainer}>
        <header className={`${styles.header}`}>
          <motion.menu
            animate={isActive ? "open" : "closed"}
            variants={variants}
            initial="closed"
            className={styles.menu}
          >
            <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
          </motion.menu>

          <button
            onClick={() => setIsActive(!isActive)}
            className={`${styles.button}`}
          >
            <motion.div
              animate={{ top: isActive ? "-100%" : "0" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className={styles.slider}
            >
              <div className={`${styles.el} `}>
                <PerspectiveText label="Menu" />
              </div>
              <div className={`${styles.el}`}>
                <PerspectiveText label="close" />
              </div>
            </motion.div>
          </button>
        </header>
      </div>
    </section>
  );
}
function PerspectiveText({ label }) {
  return (
    <div className={`${styles.perspectiveText} flex`}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

PerspectiveText.propTypes = {
  label: PropTypes.string,
};
