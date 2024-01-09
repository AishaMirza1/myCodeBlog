import styles from "./article.module.css";
import CardScroll from "./articles/animations/cardScroll/CardScroll";
// import GridArticle from "../article/articles/gridArticle/GridArticle";

export default function Article() {
  return (
    <main className={styles.article}>
      {/* <GridArticle /> */}
      <CardScroll />
    </main>
  );
}
