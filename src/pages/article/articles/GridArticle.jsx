import Heading1 from "../../../ui/Heading1";
import Heading2 from "../../../ui/Heading2";
import styles from "./gridArticle.module.css";
import img1 from "./imgs/img.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
export default function GridArticle() {
  return (
    <div className={styles.articleContainer}>
      <Heading1 />
      <Heading2
        text="an easy way of making layouts with "
        spanText=" grid-template-areas"
      />
      <div className={styles.article}>
        <div className={styles.egContainer}>
          <div className={styles.gridLayout}>
            <div className={styles.card}>one</div>
            <div className={styles.card}>two</div>
            <div className={styles.card}>three</div>
            <div className={styles.card}>four</div>
          </div>
          <div className={styles.egText}>
            <p>.gridLayout &#123;</p>
            <p> grid-template-areas:</p>
            <p> &apos;... two ...&apos;</p>
            <p> &apos;one two four&apos;</p>
            <p> &apos;one three four&apos;</p>
            <p> &apos;... three ...&apos;</p>
            <p>&#125; </p>
          </div>
        </div>

        <div className={styles.egContainer}>
          <p>Step 1: Add display:grid property to container.</p>
          <img src={img1} alt="add display grid to container" />
        </div>
        <div className={styles.egContainer}>
          <p>Step 2: Draw your layout</p>
          <img src={img2} alt="add display grid to container" />
        </div>
        <div className={styles.egContainer}>
          <p>Step 3: Set grid-area of card these values are string values.</p>
          <img src={img3} alt="img3" />
        </div>
        <p>
          A row is created for every separate string listed, and a column is
          created for each cell in the string. Multiple cell tokens with the
          same name within and between rows create a single named grid area that
          spans the corresponding grid cells. Unless those cells form a
          rectangle, the declaration is invalid.
        </p>

        <p>
          for more info
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas"
            target="blank"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
