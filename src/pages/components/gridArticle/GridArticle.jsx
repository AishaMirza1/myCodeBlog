import Heading2 from "../../../../ui/Heading2";
import styles from "./gridArticle.module.css";
import img1 from "./imgs/img.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import Paragraph from "../../../../ui/Paragraph";
export default function GridArticle() {
  return (
    <div className={styles.articleContainer}>
      <Heading2
        text="an easy way of making layouts with "
        spanText=" grid-template-areas"
      />
      <Paragraph paragraph="Creating layouts is fun with grid-tempelate-rows and columns but when you have to make slightly complex layouts then grid-tempelate-areas is an effective and easy wasy of doing that. you just need to make wordly drawing of your layout to get desired result." />
      <div className={styles.article}>
        <div className={styles.egContainer}>
          <div className={styles.gridLayout}>
            <div className={styles.card}>one</div>
            <div className={styles.card}>two</div>
            <div className={styles.card}>three</div>
            <div className={styles.card}>four</div>
          </div>
          <div className={styles.egText}>
            <Paragraph paragraph=".gridLayout &#123;" />
            <Paragraph paragraph="grid-template-areas:" />
            <Paragraph paragraph="'... two ...'" />
            <Paragraph paragraph=" 'one two four'" />
            <Paragraph paragraph=" 'one three four'" />
            <Paragraph paragraph="'... three ...'" />
            <Paragraph paragraph="&#125; " />
          </div>
        </div>

        <div className={styles.egContainer}>
          <Paragraph paragraph="Step 1: Add display:grid property to container." />
          <img src={img1} alt="add display grid to container" />
        </div>
        <div className={styles.egContainer}>
          <Paragraph paragraph="Step 2: Draw your layout" />
          <img src={img2} alt="add display grid to container" />
        </div>
        <div className={styles.egContainer}>
          <Paragraph paragraph="Step 3: Set grid-area of card these values are string values." />
          <img src={img3} alt="img3" />
        </div>
        <Paragraph
          paragraph="A row is created for every separate string listed, and a column is
          created for each cell in the string. Multiple cell tokens with the
          same name within and between rows create a single named grid area that
          spans the corresponding grid cells. Unless those cells form a
          rectangle, the declaration is invalid."
        />

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
