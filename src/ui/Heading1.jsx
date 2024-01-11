import styles from "./headings.module.css";
import PropTypes from "prop-types";
export default function Heading1({ heading }) {
  return <h1 className={styles.heading1}>{heading}</h1>;
}
Heading1.propTypes = {
  heading: PropTypes.string,
};
