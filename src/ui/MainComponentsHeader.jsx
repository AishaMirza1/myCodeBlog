import { useNavigate } from "react-router-dom";
import Heading1 from "./Heading1";
import styles from "./ui.module.css";
import PropTypes from "prop-types";
export default function MainComponentsHeader({ heading }) {
  const navigate = useNavigate();
  return (
    <div className={styles.mainComponentsHeader}>
      <button onClick={() => navigate("/components")}>Components </button>{" "}
      <span>/ {heading}</span>
      <Heading1 text={heading} />
    </div>
  );
}
MainComponentsHeader.propTypes = {
  heading: PropTypes.string,
};
