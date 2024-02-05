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
      <div className={`${styles.headerContainer}  `}>
        <AnimatePresence>
          {loading && <Loader setLoading={setLoading} />}
        </AnimatePresence>

        {!loading && (
          <div className="flex">
            <Banner />
            <motion.img
              layoutId="img"
              src={images[4].src}
              className={styles.transitionImage}
            />
          </div>
        )}
      </div>
    </section>
  );
}
function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <div className={styles.bannerRow}>
        <div>
          <AnimatedLetters letter={"Brand"} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
          className="row-col"
        >
          <span className="row-message">
            We are specialised in setting up the foundation of your brand and
            setting you up for success.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function AnimatedLetters({ letter }) {
  return <div>{letter}</div>;
}
function Loader({ setLoading }) {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3800);
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
      exit="exit"
    >
      <ImgBlock srcId={1} /> {/* small-img */}
      <motion.img
        layoutId="img"
        className={`${styles.mainImg} ${styles.img}`}
        variants={itemMain}
        transition={{
          delay: 1.3,
          duration: 1.25,
          ease: "easeInOut",
        }}
        src={images[4].src}
        id="img-2"
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
        y: srcId == 1 || srcId == 4 ? -40 : -80,
        opacity: srcId * 0.7,
      }}
      exit={{
        opacity: 0,
        y: -200,
        transition: {
          ease: "easeInOut",
          duration: 0.5,
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

AnimatedLetters.propTypes = {
  letter: PropTypes.string,
};
