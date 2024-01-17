import { useEffect, useState } from "react";
import styles from "./headerVoid.module.css";
import { AnimatePresence, motion } from "framer-motion";
export default function HeaderVoid() {
  const [noOfDivs, setNoOfDivs] = useState(0);
  const divsArray = [];
  const rowsArray = [];
  const variants = {
    initial: {
      backgroundColor: `rgba(129, 141, 248,0 )`,
    },
    enter: {
      backgroundColor: `rgba(129, 141, 248,1 )`,
    },
    exit: {
      backgroundColor: `rgba(129, 141, 248,0 )`,
      transition: {
        duration: 4,
        delay: 2,
      },
    },
  };
  for (let i = 0; i < noOfDivs; i++) {
    divsArray.push(
      <motion.div
        variants={variants}
        className={styles.void}
        key={i}
        initial="initial"
        whileHover="enter"
        exit="exit"
      ></motion.div>
    );
  }
  for (let j = 0; j <= 8; j++) {
    rowsArray.push(<div className={styles.voidRow}>{divsArray}</div>);
  }
  console.log(divsArray);
  useEffect(() => {
    function updateDivs() {
      let divs = window.innerWidth / 75;
      console.log(divs);
      setNoOfDivs(divs);
    }
    window.addEventListener("resize", updateDivs);
    updateDivs();
    return () => window.removeEventListener("resize", updateDivs);
  }, []);
  console.log(noOfDivs);
  return (
    <AnimatePresence mode="wait">
      <header className={styles.headerVoidContainer}>{rowsArray}</header>
    </AnimatePresence>
  );
}
