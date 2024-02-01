import Heading2 from "../../../../ui/Heading2";
import styles from "./button.module.css";
export default function Button() {
  return (
    <div>
      <Heading2 text="Neumorphism Button" />

      <div className={`${styles.buttonContainer} flex`}>
        <button className={styles.button}>hover me</button>
      </div>
    </div>
  );
}
