import styles from "./ui.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
export default function Heading1({ text }) {
  const variants = {
    initial: {
      opacity: 0,
      y: -5,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.h1
      className={styles.heading1}
      transition={{ staggerChildren: 0.1 }}
      initial="initial"
      animate="enter"
    >
      {text?.split("").map((char, i) => {
        return (
          <motion.span variants={variants} key={i}>
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

Heading1.propTypes = {
  text: PropTypes.string,
};
