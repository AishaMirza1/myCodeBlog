import styles from "./ui.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
export default function Heading1({ text }) {
  return (
    <motion.h1
      className={styles.h1}
      transition={{ staggerChildren: 0.03 }}
      initial="initial"
      animate="enter"
    >
      {text.split(" ").map((word, i) => {
        const notOfWords = text.split("").length;
        console.log(notOfWords);
        return (
          <span key={i} style={{ display: "inline" }}>
            {word.split("").map((char, i) => {
              var j = 0;
              j = j + 1;
              console.log(j);
              return (
                <motion.span
                  style={{ display: "inline-block" }}
                  variants={{
                    initial: {
                      y: "30%",
                      opacity: 0,
                    },
                    enter: { opacity: 1, y: 0 },
                  }}
                  key={`char-${i}`}
                  transition={{ duration: 0.24, ease: "linear" }}
                >
                  {char}
                </motion.span>
              );
            })}
            <span>&nbsp;</span>
          </span>
        );
      })}
    </motion.h1>
  );
}

Heading1.propTypes = {
  text: PropTypes.string,
};
