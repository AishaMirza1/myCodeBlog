import PropTypes from "prop-types";
import styles from "./cardScroll.module.css";
import Heading2 from "../../../../../ui/Heading2";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
export default function CardScroll() {
  return (
    <div className={styles.articleContainer}>
      <Heading2
        text="Build a Smooth Scroll Cards Parallax with "
        spanText="Framer Motion"
      />
      <Heading2
        text="Build a Smooth Scroll Cards Parallax with "
        spanText="Framer Motion"
      />
      <Heading2
        text="Build a Smooth Scroll Cards Parallax with "
        spanText="Framer Motion"
      />
      <Heading2
        text="Build a Smooth Scroll Cards Parallax with "
        spanText="Framer Motion"
      />
      <Heading2
        text="Build a Smooth Scroll Cards Parallax with "
        spanText="Framer Motion"
      />
      <Heading2
        text="Build a Smooth Scroll Cards Parallax with "
        spanText="Framer Motion"
      />
      <Heading2
        text="Build a Smooth Scroll Cards Parallax with "
        spanText="Framer Motion"
      />
      <motion.div className={styles.cardScroll}>
        <Card color="#ffb5b5" id={1} />
        <Card color="#bf3131" id={2} />
        <Card color="#dc84f3" id={3} />
        <Card color="#86a789" id={4} />
        <Card color="#ff6f3c" id={5} />
      </motion.div>
      <Heading2
        text="Build a Smooth Scroll Cards Parallax with "
        spanText="Framer Motion"
      />
    </div>
  );
}

function Card({ color, id }) {
  const cardContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div
      ref={cardContainerRef}
      className={`${styles.cardContainer} flex `}
    >
      <motion.div
        style={{
          scale: { scrollYProgress },
          backgroundColor: `${color}`,
          top: `calc(-10% + ${id * 25}px)`,
        }}
        className={`${styles.card} flex alignCenter`}
      >
        {id}
      </motion.div>
    </motion.div>
  );
}

Card.propTypes = {
  color: PropTypes.string,
  id: PropTypes.number,
  scrollYProgress: PropTypes.object,
};
