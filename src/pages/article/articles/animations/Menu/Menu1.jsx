import { useState } from "react";
import styles from "./menu1.module.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
export default function Menu1() {
  const [isActive, setIsActive] = useState(false);
  const variants = {
    open: { width: 480, height: 550, top: "-25px", right: "-25px" },
    closed: {
      width: 100,
      height: 40,
      top: 0,
      right: 0,
    },
  };
  return (
    <header className={`${styles.header}`}>
      <motion.menu
        animate={isActive ? "open" : "closed"}
        variants={variants}
        initial="closed"
        className={styles.menu}
      ></motion.menu>
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
