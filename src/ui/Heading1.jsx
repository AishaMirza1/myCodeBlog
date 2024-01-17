import styles from "./headings.module.css";
import PropTypes from "prop-types";
export default function Heading1({ heading, color }) {
  console.log(color);
  return (
    <h1 style={{ color: color }} className={styles.heading1}>
      {heading}
    </h1>
  );
}
Heading1.propTypes = {
  heading: PropTypes.string,
  color: PropTypes.string,
};
