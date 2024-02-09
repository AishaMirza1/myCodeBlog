import Heading2 from "../../../../ui/Heading2";
import styles from "./loader.module.css";

export default function Loader1() {
  return (
    <section>
      <Heading2 text="Rainbow Loader" />
      <div className={`${styles.loader} flex`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
