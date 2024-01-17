import styles from "./article.module.css";
import Heading2 from "../../ui/Heading2";
import Paragraph from "../../ui/Paragraph";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
export default function ArticleIntro({ text, paragraph, spanText }) {
  return (
    <div className={`  ${styles.articleIntroContainer}`}>
      <Heading2 text={text} spanText={spanText} />
      <Paragraph paragraph={paragraph} />
      <Button />
    </div>
  );
}
ArticleIntro.propTypes = {
  text: PropTypes.string,
  paragraph: PropTypes.string,
  spanText: PropTypes.string,
};
