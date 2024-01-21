import styles from "./ui.module.css";
import PropTypes from "prop-types";
export default function Heading1({ text, spanText }) {
  return (
    <h1 className={styles.heading2}>
      {text}
      <span>{spanText}</span>
    </h1>
  );
}

Heading1.propTypes = {
  text: PropTypes.string,
  spanText: PropTypes.string,
};
