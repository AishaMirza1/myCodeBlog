import styles from "./ui.module.css";
import PropTypes from "prop-types";
export default function Heading2({ text }) {
  return <h2 className={styles.heading2}>{text}</h2>;
}

Heading2.propTypes = {
  text: PropTypes.string,
};
