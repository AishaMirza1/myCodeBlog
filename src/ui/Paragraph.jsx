import styles from "./ui.module.css";
import PropTypes from "prop-types";
export default function Paragraph({ paragraph }) {
  return <p className={styles.paragraph}>{paragraph}</p>;
}
Paragraph.propTypes = {
  paragraph: PropTypes.string,
};
