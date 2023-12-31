import Heading1 from "../../../ui/Heading1";
import styles from "./gridArticle.module.css";
export default function GridArticle() {
  return (
    <>
      <Heading1 />
      <div className={styles.gridLayout}>
        <div className={styles.card}>card1</div>
        <div className={styles.card}>card2</div>
        <div className={styles.card}>card3</div>
        <div className={styles.card}>card4</div>
      </div>
    </>
  );
}
