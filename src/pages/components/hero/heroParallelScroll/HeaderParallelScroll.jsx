import { useRef } from "react";
import styles from "./headerParallelScroll.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeaderParallelScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start ", "end end"],
  });

  const img3Parallex = useTransform(scrollYProgress, [0, 1], ["39%", "0%"]);
  const img4Parallex = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const img5Parallex = useTransform(scrollYProgress, [0, 1], ["100%", "75%"]);
  const img6Parallex = useTransform(scrollYProgress, [0, 1], ["100%", "65%"]);

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.headerParallelScroll}>
        <h1>Welcome In My Kitchen where you can have Meals like your home.</h1>
        <div>
          <motion.img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="headerImg"
            className={styles.img}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="headerImg"
            className={styles.img}
          />
          <motion.img
            style={{ top: img3Parallex }}
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="headerImg"
            className={styles.img}
          />
          <motion.img
            style={{ top: img4Parallex }}
            src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="headerImg"
            className={styles.img}
          />
          <motion.img
            style={{ top: img5Parallex }}
            src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="headerImg"
            className={styles.img}
          />
          <motion.img
            style={{ top: img6Parallex }}
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="headerImg"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}
