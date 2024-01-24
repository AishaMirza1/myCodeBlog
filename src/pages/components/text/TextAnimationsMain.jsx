import styles from "./textAnimationsMain.module.css";
import MainComponentsHeader from "../../../ui/MainComponentsHeader";
import TextAnimations, {
  PopTextAnimation,
} from "./flickeringText/TextAnimations";
import { InclineTextAnimation } from "./flickeringText/TextAnimations";
export default function TextAnimationsMain() {
  return (
    <main className={styles.textAnimations}>
      <MainComponentsHeader heading="TextAnimations" />
      <InclineTextAnimation text="LONDON" />
      <PopTextAnimation text="MUMBAI" />
      <TextAnimations
        text="I'm your Text"
        variants={{
          initial: { opacity: 0, x: 100 },
          enter: { opacity: 1, x: 0 },
          exit: { opacity: 1, x: 0 },
        }}
      />
      <TextAnimations
        text="another text"
        variants={{
          initial: { opacity: 0, y: 4 },
          enter: { opacity: 1, y: 0 },
          exit: { opacity: 1, y: 0 },
        }}
      />
      <TextAnimations
        text="another text"
        variants={{
          initial: { opacity: 0, rotateX: 180 },
          enter: { opacity: 1, rotateX: 0 },
          exit: { opacity: 1, rotateX: 0 },
        }}
      />
    </main>
  );
}
