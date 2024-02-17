import { NavLink } from "react-router-dom";
import { sideNavLinks as cardsData } from "../../data";
import { motion } from "framer-motion";
import styles from "./components.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Heading1 from "../../ui/Heading1";
import Paragraph from "../../ui/Paragraph";
export default function AllComponentsCardsContainer() {
  return (
    <main className={styles.allComponentsCardContainer}>
      <div className={styles.allComponentsCardContainerHeader}>
        <Heading1 text="All Components" />
        <Paragraph
          paragraph={
            "  Components are built with React, CSS, and some combination of Framer Motion, vanilla JS animations, keyframes animations, or another popular, stable JavaScript animation library."
          }
        />
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
    <motion.div
      variants={{
        initial: { y: "50%", opacity: 0 },
        enter: { y: 0, opacity: 1 },
      }}
      initial="initial"
      animate="enter"
      transition={{ duration: 0.5, ease: "linear" }}
    >
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
        <motion.span
          animate={hovered ? { color: "#fff" } : { color: "#0f172a" }}
        >
          {card.title}
        </motion.span>
      </NavLink>
    </motion.div>
  );
}

Card.propTypes = {
  card: PropTypes.object,
};
