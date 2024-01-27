import { useState } from "react";
import styles from "./textAnimations.module.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
export default function TextAnimations({ text, variants }) {
  const [start, setStart] = useState(true);
  return (
    <div className={styles.textAnimationsContainer}>
      <div
        onMouseEnter={() => {
          setStart(true);
        }}
        onMouseLeave={() => {
          setStart(false);
        }}
        className={styles.textBox}
        style={{ flexDirection: "column" }}
      >
        <motion.p
          transition={{
            staggerChildren: 0.15,
            ease: "easeInOut",
          }}
          initial="initial"
          animate={start ? "enter" : ""}
        >
          {text.split("").map((char, i) => {
            return (
              <motion.span
                style={{ display: "inline-block" }}
                variants={variants}
                key={i}
                transition={{ ease: "linear" }}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.p>
        <p className={styles.hovermeText}>Hover Me</p>
      </div>
    </div>
  );
}

function InclineTextAnimation({ text }) {
  const [start, setStart] = useState(false);
  const variants = {
    initinal: { y: 0 },
    enter: (i) => ({
      y: "-5.8rem",
      transition: {
        duration: 0.4,
        delay: i * 0.05,
        ease: [0.5, 0.465, 0.87, 0.9],
      },
    }),
    exit: () => ({
      y: 0,
      transition: { duration: 0.3 },
    }),
  };
  return (
    <div className={styles.textAnimationsContainer}>
      <div
        className={styles.textBox}
        onMouseEnter={() => {
          setStart(true);
        }}
        onMouseLeave={() => {
          setStart(false);
        }}
      >
        <motion.p>
          {text.split("").map((char, i) => {
            return (
              <motion.span
                key={i}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  height: "5rem",
                  position: "relative",
                }}
              >
                <motion.span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  initial="initial"
                  animate={start ? "enter" : "exit"}
                  custom={i}
                  variants={variants}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "5rem",
                    }}
                  >
                    {char}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "5rem",
                    }}
                  >
                    {char}
                  </span>
                </motion.span>
              </motion.span>
            );
          })}
        </motion.p>
        <p className={styles.hovermeText}>Hover Me</p>
      </div>
    </div>
  );
}
function PopTextAnimation({ text }) {
  const [start, setStart] = useState(false);
  const variants = {
    initinal: { y: 0 },
    enter: (i) => ({
      scaleY: [1, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1],
      transition: { duration: 0.3, delay: i * 0.1 },
    }),
  };
  return (
    <div className={styles.textAnimationsContainer}>
      <div
        className={styles.textBox}
        onMouseEnter={() => {
          setStart(true);
        }}
        onMouseLeave={() => {
          setStart(false);
        }}
      >
        <motion.p>
          {text.split("").map((char, i) => {
            return (
              <motion.span
                key={i}
                style={{
                  display: "inline-block",
                  fontSize: "5rem",
                }}
                initial="initial"
                animate={start ? "enter" : ""}
                exit="exit"
                custom={i}
                variants={variants}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.p>
        <p className={styles.hovermeText}>Hover Me</p>
      </div>
    </div>
  );
}
TextAnimations.propTypes = {
  text: PropTypes.string,
  variants: PropTypes.object,
};
InclineTextAnimation.propTypes = {
  text: PropTypes.string,
};
PopTextAnimation.propTypes = {
  text: PropTypes.string,
};
export { InclineTextAnimation, PopTextAnimation };
