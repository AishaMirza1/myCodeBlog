import { useEffect, useRef, useState } from "react";
import styles from "./headerParallelScroll.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
export default function HeaderParallelScroll() {
  const [overlay, setOverlay] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start ", "end start"],
  });
  useEffect(() => {
    scrollYProgress.on("change", () => {
      scrollYProgress.current > 0.7 ? setOverlay(true) : setOverlay(false);
    });
  }, [scrollYProgress]);
  const img3Parallex = useTransform(scrollYProgress, [0, 2], ["43%", "-30%"]);
  const img4Parallex = useTransform(scrollYProgress, [0, 2], ["35%", "-30%"]);
  const img5Parallex = useTransform(scrollYProgress, [0, 2], ["100%", "25%"]);
  const img6Parallex = useTransform(scrollYProgress, [0, 2], ["100%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 1], ["0", "1.4"]);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      parallex: img3Parallex,
    },
    {
      src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      parallex: img4Parallex,
    },
    {
      src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      parallex: img5Parallex,
    },
    {
      src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      parallex: img6Parallex,
    },
  ];

  return (
    <>
      <section className={styles.section}>
        {overlay && (
          <motion.div
            className={styles.overlay}
            style={{ opacity: opacity }}
          ></motion.div>
        )}
        <motion.div ref={ref} className={styles.headerParallelScroll}>
          <div className={styles.stickyContent}>
            <h1>
              Welcome In My Kitchen where you can have Meals like your home.
            </h1>
            <div className={styles.callToAction}>
              <button>View Menu</button>
              <button>Make Reservation</button>
            </div>
          </div>

          <div className={styles.imgContainer}>
            {images.map(({ src, parallex }, i) => {
              return <Img key={i} src={src} parallex={parallex} id={i} />;
            })}
            <div>
              <div className={styles.imgOverlay}></div>
            </div>
          </div>
        </motion.div>
      </section>
      <section
        style={{
          height: "100vh",
          backgroundColor: "#7C3AED",
          position: "relative",
          zIndex: 9999,
          textAlign: "center",
          paddingTop: "18rem",
        }}
      >
        <h2 style={{ fontSize: "5rem", color: "#fff" }}>
          Rest of website!!!!!!!
        </h2>
      </section>
    </>
  );
}

function Img({ src, parallex }) {
  return (
    <motion.img
      style={{ top: parallex }}
      src={src}
      alt="headerImg"
      className={styles.img}
    />
  );
}

Img.propTypes = {
  src: PropTypes.string,
  parallex: PropTypes.object,
};
