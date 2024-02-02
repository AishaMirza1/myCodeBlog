import styles from "./ui.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
export default function Paragraph({ paragraph }) {
  return (
    <motion.p
      variants={{
        initial: { y: "50%", opacity: 0 },
        enter: { y: 0, opacity: 1 },
      }}
      initial="initial"
      animate="enter"
      transition={{ duration: 0.35, ease: "linear" }}
      className={styles.p}
    >
      {paragraph}
    </motion.p>
  );
}
Paragraph.propTypes = {
  paragraph: PropTypes.string,
};
