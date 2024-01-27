import { useState } from "react";
import Heading2 from "../../../../ui/Heading2";
import styles from "./form1.module.css";
import img1 from "./img/individual.avif";
import img2 from "./img/company.avif";
import { AnimatePresence, motion } from "framer-motion";
export default function Form1() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const imgVariants = {
    initial: { x: 0 },
    enter: { x: ["-20%", "52%"] },
  };
  const inputDivVariants = {
    transition: { duration: 0.1 },
    initial: { y: -10 },
    enter: { y: 0 },
    exit: { y: -10 },
  };
  const fadeInOut = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { ease: "linear" },
    },
  };
  return (
    <section>
      <Heading2 text="Login / SignUp Form Transition" />
      <div className={styles.form1Container}>
        <div className={styles.form1ContainerInner}>
          <form className={styles.form1}>
            <h3>Contact Us</h3>
            <div className={styles.inputDiv}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="your name.."
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="company-or-individual">You Are</label>
              <input
                type="checkbox"
                id="company-or-individual"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <motion.div
              style={{ position: "relative" }}
              variants={inputDivVariants}
              initial="initial"
              animate={isChecked ? "enter" : "initial"}
              exit="exit"
              transition={{ duration: 0.35, ease: "linear" }}
            >
              <AnimatePresence>
                {isChecked && (
                  <motion.div
                    className={styles.inputDiv}
                    variants={fadeInOut}
                    initial="initial"
                    animate={isChecked && "enter"}
                    exit="exit"
                  >
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="your company"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={styles.inputDiv}>
                <label htmlFor="message">Any Message?</label>
                <textarea
                  id="message"
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="anything you want to ask or say"
                />
              </div>
              <button type="submit">Submit</button>
            </motion.div>
          </form>
          <motion.div
            variants={imgVariants}
            animate={isChecked ? "enter" : "initial"}
            initial="initial"
            transition={{
              type: "spring",
              damping: 8,
              stiffness: 50,
              restDelta: 0.001,
            }}
            className={styles.formImgContainer}
          >
            <img src={img2} alt="img1" />
            <img src={img1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
