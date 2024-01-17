import styles from "./article.module.css";
import Heading1 from "../../ui/Heading1";
import ArticleIntro from "./ArticleIntro";
import { introData } from "./articles/data";
import { navLinks } from "../../ui/nav/data";
export default function Article() {
  return (
    <main className={`${styles.article} container`}>
      <Heading1 heading="My Articles" color={navLinks[0].color} />
      {introData.map((data, i) => {
        return <ArticleIntro key={i} {...data} />;
      })}
    </main>
  );
}
