import { useState } from "react";
import styles from "./textAnimations.module.css";
import { motion } from "framer-motion";
export default function TextAnimations() {
  const text = "I'm your Text";
  const [start, setStart] = useState(false);
  return (
    <div className={styles.textAnimationsContainer}>
      <div className={styles.textBox}>
        {start && (
          <motion.p
            transition={{
              staggerChildren: 0.05,
              repeat: "infinity",
              ease: "easeInOut",
            }}
            initial="initial"
            animate={start && "enter"}
          >
            {text.split("").map((char, i) => {
              return (
                <motion.span
                  style={{ display: "inline-block" }}
                  variants={{
                    initial: { opacity: 0, x: 100 },
                    enter: { opacity: 1, x: 0 },
                  }}
                  key={i}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.p>
        )}
        <button
          className={styles.animationBtn}
          onClick={() => setStart((prev) => !prev)}
        >
          Start
        </button>
      </div>
    </div>
  );
}
