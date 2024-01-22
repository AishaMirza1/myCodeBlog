import { useEffect, useRef, useState } from "react";
import styles from "./headerVoid.module.css";

import anime from "animejs";
import Heading2 from "../../../../ui/Heading2";
export default function HeaderVoid() {
  const [noOfDivs, setNoOfDivs] = useState(0);
  const ref = useRef(null);
  const divsArray = [];
  const rowsArray = [];
  function handleMouseEnter(e) {
    anime.remove(e.target);
    anime({
      targets: e.target,
      backgroundColor: [
        { value: `#818df8`, easing: "easeOutSine", duration: 100 },
      ],
    });
  }
  function handleMouseLeave(e) {
    anime.remove(e.target);
    anime({
      targets: e.target,
      backgroundColor: [
        {
          value: `rgba(129, 141, 248, 0)`,
          easing: "easeOutSine",
          duration: 1500,
        },
      ],
    });
  }

  for (let i = 0; i < noOfDivs; i++) {
    divsArray.push(
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.void}
        key={`col-${Date.now()}-${i}`}
      ></div>
    );
  }
  for (let j = 0; j <= 8; j++) {
    rowsArray.push(
      <div className={styles.voidRow} key={`row-${Date.now()}-${j}`}>
        {divsArray}
      </div>
    );
  }
  useEffect(() => {
    function updateDivs() {
      let divs = ref.current.clientWidth / 75;
      setNoOfDivs(divs);
    }
    window.addEventListener("resize", updateDivs);
    updateDivs();
    return () => window.removeEventListener("resize", updateDivs);
  }, []);
  return (
    <>
      <Heading2 text="Void Grid Header" />
      <header ref={ref} className={styles.headerVoidContainer}>
        <div className={styles.voidContainer}>{rowsArray}</div>
        <div className={styles.headerContent}>
          <h1>The Void Header</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            expedita veritatis consequatur, ex cumque quo architecto error,
            iste.
          </p>
          <button>Join Team</button>
        </div>
      </header>
    </>
  );
}
