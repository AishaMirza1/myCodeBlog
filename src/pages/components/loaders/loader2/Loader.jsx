import { useEffect } from "react";
import Heading2 from "../../../../ui/Heading2";
import styles from "./loader.module.css";
import { useAnimate } from "framer-motion";

export default function Loader2() {
  const [animateScope, animate] = useAnimate();
  useEffect(() => {
    const handleAnimate = async () => {
      var numberOne = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      var numberTwo = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      console.log(numberOne, numberTwo);
      if (numberOne === numberTwo) {
        console.log("1==2");
        do {
          numberTwo = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        } while (numberTwo === numberOne);
      }
      const sequence1 = [
        [`#span${numberOne}`, { top: "30px" }],
        [`#span${numberTwo}`, { top: "-30px" }, { at: "<" }],
      ];
      await animate(sequence1);
      if (numberOne > numberTwo) {
        const left = (numberOne - numberTwo) * 30 + (numberOne - numberTwo) * 2;
        await animate([
          [`#span${numberOne}`, { left: `-${left}px` }],
          [`#span${numberTwo}`, { left: `${left}px` }, { at: "<" }],
        ]);
      } else {
        const left = (numberTwo - numberOne) * 30 + (numberTwo - numberOne) * 2;
        await animate([
          [`#span${numberOne}`, { left: `${left}px` }],
          [`#span${numberTwo}`, { left: `-${left}px` }, { at: "<" }],
        ]);
      }
      await animate([
        [`#span${numberOne}`, { top: "0px" }],
        [`#span${numberTwo}`, { top: "0px" }, { at: "<" }],
      ]);
    };
    handleAnimate();
  }, [animate]);

  return (
    <section>
      <Heading2 text="Shuffle Loader" />
      <div ref={animateScope} className={`${styles.loader} flex`}>
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
        <span id="span5"></span>
      </div>
    </section>
  );
}
