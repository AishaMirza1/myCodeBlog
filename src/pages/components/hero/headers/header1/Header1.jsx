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
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
function Banner() {
  return (
    <motion.div className={`${styles.bannerContainer}`} variants={banner}>
      <div className={`${styles.bannerRow} flex`}>
        <AnimatedLetters letter={"Brand"} />

        <motion.div className="row-col">
          <motion.span
            className={styles.rowMessage}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.4,
            }}
          >
            We are specialised in setting up the foundation of your brand and
            setting you up for success.
          </motion.span>
        </motion.div>
      </div>
      <div className={`${styles.bannerRow} flex`}>
        <AnimatedLetters letter={"experience"} />
        <AnimatedLetters letter={"experience"} />
      </div>
      <div className={`${styles.bannerRow} flex`}>
        <motion.div className={styles.rowCol}>
          <motion.span
            className={`${styles.rowMessage} ${styles.scroll}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          >
            scroll
          </motion.span>
        </motion.div>
        <AnimatedLetters letter={"studio"} />
      </div>
    </motion.div>
  );
}

function AnimatedLetters({ letter }) {
  return (
    <motion.span variants={banner} initial="initial" animate="animate">
      {[...letter].map((letter, i) => (
        <motion.span
          key={`letter-${i}`}
          className={styles.rowLetter}
          variants={letterAni}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
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
