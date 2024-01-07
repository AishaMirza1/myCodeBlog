import styles from "./article.module.css";
import GridArticle from "./articles/GridArticle";

export default function Article() {
  return (
    <main className={styles.article}>
      <GridArticle />
    </main>
  );
}
