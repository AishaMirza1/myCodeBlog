import styles from "./nav.module.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

import { useEffect, useState } from "react";
export default function Header() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
  }, [windowSize]);
  return (
    <header className={styles.header}>
      <p className={styles.logo}>
        A <span style={{ color: "#ff0055", fontSize: " 6rem" }}>.</span>
      </p>
      {windowSize > 670 && <Nav />}
      <AnimatePresence>{windowSize < 670 && <MobileNav />}</AnimatePresence>
    </header>
  );
}
