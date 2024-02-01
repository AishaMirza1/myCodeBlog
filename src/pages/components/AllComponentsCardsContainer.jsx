import { NavLink } from "react-router-dom";
import { sideNavLinks as cardsData } from "../../data";
import { motion } from "framer-motion";
import styles from "./components.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
export default function AllComponentsCardsContainer() {
  return (
    <main className={styles.allComponentsCardContainer}>
      <div className={styles.allComponentsCardContainerHeader}>
        <h1>All Components</h1>
        <p>
          Components are built with React, CSS, and some combination of Framer
          Motion, vanilla JS animations, keyframes animations, or another
          popular, stable JavaScript animation library.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        {cardsData.map((card, i) => {
          return <Card card={card} key={i} />;
        })}
      </div>
    </main>
  );
}

function Card({ card }) {
  const [hovered, setIsHovered] = useState(false);
  return (
    <NavLink
      className={styles.card}
      to={card.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(!true)}
    >
      <motion.div
        animate={hovered ? { top: 0 } : { top: 100 }}
        className={styles.cardOverlay}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      ></motion.div>
      <img src={card.svg} />
      <motion.span animate={hovered ? { color: "#fff" } : { color: "#0f172a" }}>
        {card.title}
      </motion.span>
      <motion.img
        transition={{ duration: 0.35, ease: "easeInOut" }}
        animate={
          hovered
            ? { transform: "rotate(30deg)" }
            : { transform: "rotate(0deg)" }
        }
        src={card.svg}
        className={styles.bigsvg}
      />
    </NavLink>
  );
}
Card.propTypes = {
  card: PropTypes.obj,
};
