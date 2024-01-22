import styles from "./ui.module.css";
import PropTypes from "prop-types";
export default function Heading1({ text }) {
  return <h1 className={styles.heading1}>{text}</h1>;
}

Heading1.propTypes = {
  text: PropTypes.string,
};
