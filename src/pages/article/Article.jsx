import styles from "./article.module.css";
import Heading1 from "../../ui/Heading1";
export default function Article() {
  return (
    <main className={styles.article}>
      <Heading1 heading="My Articles" />
    </main>
  );
}
