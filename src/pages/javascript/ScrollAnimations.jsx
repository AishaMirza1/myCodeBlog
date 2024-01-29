import HeaderParallelScroll from "../components/hero/heroParallelScroll/HeaderParallelScroll";
import styles from "./scrollAnimation.module.css";
// import Lenis from "@studio-freight/lenis";

export default function Javascript() {
  // smooth scroll lenis
  // const lenis = new Lenis();
  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
  return (
    <div className={styles.scrollAnimationMain}>
      <HeaderParallelScroll />
    </div>
  );
}
