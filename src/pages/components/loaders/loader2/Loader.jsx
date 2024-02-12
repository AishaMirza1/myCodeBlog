import { useEffect, useState } from "react";
import Heading2 from "../../../../ui/Heading2";
import styles from "./loader.module.css";
import { useAnimate, useInView, motion } from "framer-motion";

export default function Loader2() {
  const [animateScope, animate] = useAnimate();
  const isInView = useInView(animateScope);
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    const handleAnimate = async () => {
      if (isInView) {
        // sequence 1
        await animate([
          [`#span1`, { top: "30px" }, { duration: 0.45 }],
          [`#span5`, { top: "-30px" }, { at: "<" }, { duration: 0.45 }],
        ]);
        await animate([
          [`#span1`, { left: `128px` }],
          [`#span5`, { left: `-128px` }, { at: "<" }],
        ]);
        await animate([
          [`#span1`, { top: "0px" }, { duration: 0.45 }],
          [`#span5`, { top: "0px" }, { at: "<" }, { duration: 0.45 }],
        ]);
        // sequence 2
        await animate([
          [`#span2`, { top: "30px" }],
          [`#span4`, { top: "-30px" }, { at: "<" }],
        ]);
        await animate([
          [`#span2`, { left: `64px` }],
          [`#span4`, { left: `-64px` }, { at: "<" }],
        ]);
        await animate([
          [`#span2`, { top: "0px" }],
          [`#span4`, { top: "0px" }, { at: "<" }],
        ]);
        // sequence 3
        await animate([
          [`#span4`, { top: "30px" }],
          [`#span1`, { top: "-30px" }, { at: "<" }],
        ]);
        await animate([
          [`#span4`, { left: `32px` }],
          [`#span1`, { left: `32px` }, { at: "<" }],
        ]);
        await animate([
          [`#span4`, { top: "0px" }],
          [`#span1`, { top: "0px" }, { at: "<" }],
        ]);
        // sequence 4
        await animate([
          [`#span3`, { top: "30px" }],
          [`#span5`, { top: "-30px" }, { at: "<" }],
        ]);
        await animate([
          [`#span3`, { left: `-64px` }],
          [`#span5`, { left: `-64px` }, { at: "<" }],
        ]);
        await animate([
          [`#span3`, { top: "0px" }],
          [`#span5`, { top: "0px" }, { at: "<" }],
        ]);
        // sequence 5
        await animate([
          [`#span1`, { top: "30px" }],
          [`#span5`, { top: "-30px" }, { at: "<" }],
        ]);
        await animate([
          [`#span1`, { left: `64px` }],
          [`#span5`, { left: `-96px` }, { at: "<" }],
        ]);
        await animate([
          [`#span1`, { top: "0px" }],
          [`#span5`, { top: "0px" }, { at: "<" }],
        ]);
        setAnimationComplete(!animationComplete);
      }
    };
    handleAnimate();
  }, [animate, isInView, animationComplete]);

  return (
    <section>
      <Heading2 text="Shuffle Loader" />

      <motion.div ref={animateScope} className={`${styles.loader} flex`}>
        {isInView && !animationComplete && (
          <>
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            <span id="span5"></span>
          </>
        )}{" "}
        {animationComplete && (
          <>
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            <span id="span5"></span>
          </>
        )}
      </motion.div>
    </section>
  );
}
