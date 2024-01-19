import styles from "./menu1.module.css";
import { data } from "./data";
import { motion } from "framer-motion";
export default function Nav() {
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateX: -20,
      translateY: 80,
    },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.65,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.5 + i * 0.1,
      },
      translateX: 0,
      translateY: 0,
    }),
    exit: {
      opacity: 0,
      transition: { ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <nav className={`${styles.nav} `}>
      <div className={`${styles.navBody}`}>
        {data.map((list, i) => {
          return (
            <div key={i} className={styles.perspectiveContainer}>
              <motion.div
                variants={perspective}
                animate="enter"
                initial="initial"
                exit="exit"
                custom={i}
              >
                <a href={list.href}>{list.title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
