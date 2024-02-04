import Heading2 from "../../../../../ui/Heading2";
import styles from "./header1.module.css";
import PropTypes from "prop-types";
import images from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header1() {
  const [loading, setLoading] = useState(true);
  return (
    <section>
      <Heading2 text="Smooth Loading Transitions" />
      <div className={`${styles.headerContainer} flex`}>
        <AnimatePresence>
          {loading ? (
            <Loader setLoading={setLoading} />
          ) : (
            <>
              {!loading && (
                <div className={styles.transitionImageContainer}>
                  <motion.img
                    className={styles.transitionImage}
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.9],
                      duration: 1.6,
                    }}
                    src={images[4].src}
                    layoutId="main-image-1"
                  />
                </div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Loader({ setLoading }) {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3400);
  }, [setLoading]);
  const itemMain = {
    initial: { y: 200, x: "50%", opacity: 0 },
    show: {
      y: 100,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={styles.imgContainer}
      initial="initial"
      animate="show"
    >
      <ImgBlock srcId={1} /> {/* small-img */}
      <motion.img
        layoutId="main-image-1"
        className={`${styles.mainImg} ${styles.img}`}
        variants={itemMain}
        transition={{
          delay: 1.3,
          duration: 1.25,
          ease: "easeInOut",
        }}
        src={images[4].src}
        id="img-2"
        custom={2}
      />
      <ImgBlock srcId={3} /> {/* big-img */}
      <ImgBlock srcId={4} /> {/* small-img */}
      <ImgBlock srcId={5} /> {/* big-img */}
    </motion.div>
  );
}

function ImgBlock({ srcId, variants }) {
  return (
    <motion.img
      variants={variants}
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: "-15%",
        opacity: srcId * 0.7,
      }}
      exit={{
        opacity: 0,
        y: -200,
        transition: {
          ease: "easeInOut",
          duration: 0.8,
        },
      }}
      transition={{
        duration: 1.25,
        ease: "easeInOut",
        delay: srcId * 0.45,
      }}
      className={styles.img}
      src={`${images[srcId - 1].src}`}
      id={`img-${srcId}`}
    />
  );
}

ImgBlock.propTypes = {
  srcId: PropTypes.number,
  variants: PropTypes.object,
};

Loader.propTypes = {
  setLoading: PropTypes.function,
};
