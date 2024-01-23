import styles from "./textAnimationsMain.module.css";
import MainComponentsHeader from "../../../ui/MainComponentsHeader";
import TextAnimations from "./flickeringText/TextAnimations";
export default function TextAnimationsMain() {
  return (
    <main className={styles.textAnimations}>
      <MainComponentsHeader heading="TextAnimations" />
      <TextAnimations />
    </main>
  );
}
