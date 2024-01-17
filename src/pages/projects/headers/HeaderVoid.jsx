import { useEffect, useState } from "react";
import styles from "./headerVoid.module.css";

import anime from "animejs";
export default function HeaderVoid() {
  const [noOfDivs, setNoOfDivs] = useState(0);
  const divsArray = [];
  const rowsArray = [];
  function handleMouseEnter(e) {
    anime({
      targets: e.target,
      backgroundColor: [
        { value: `#818df8`, easing: "easeOutSine", duration: 100 },
      ],
    });
  }
  function handleMouseLeave(e) {
    anime({
      targets: e.target,
      backgroundColor: [
        {
          value: `rgba(129, 141, 248, 0)`,
          easing: "easeOutSine",
          duration: 2400,
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
        key={i}
      ></div>
    );
  }
  for (let j = 0; j <= 8; j++) {
    rowsArray.push(<div className={styles.voidRow}>{divsArray}</div>);
  }
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
  return (
    <header className={styles.headerVoidContainer}>
      <div className={styles.voidContainer}>{rowsArray}</div>
      <div className={styles.headerContent}>
        <h1>The Void Header</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          expedita veritatis consequatur, ex cumque quo architecto error, iste,
          asperiores reprehenderit quas voluptatum explicabo. Explicabo,
          corporis qui asperiores suscipit est eum.
        </p>
        <button>Join Team</button>
      </div>
    </header>
  );
}
