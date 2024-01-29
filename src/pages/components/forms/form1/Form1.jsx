import { useState } from "react";
import Heading2 from "../../../../ui/Heading2";
import styles from "./form1.module.css";
import img1 from "./img/individual.avif";
import img2 from "./img/company.avif";
import { motion } from "framer-motion";
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
    transition: { duration: 0.03 },
    initial: { y: -2 },
    enter: { y: 0 },
    exit: { y: -2 },
  };
  return (
    <div>
      <Heading2 text="Login / SignUp Form Transition" />
      <div className={styles.form1Container}>
        <div className={styles.form1ContainerInner}>
          <form
            style={
              isChecked
                ? { backgroundColor: "#4f46e5" }
                : { backgroundColor: "#7c3aed" }
            }
            className={styles.form1}
          >
            <h3>Contact Us</h3>
            <div className={styles.inputDiv}>
              <label htmlFor="name">Your Name</label>
              <input
                style={
                  isChecked
                    ? { backgroundColor: "#4338ca" }
                    : { backgroundColor: "#6d28d9" }
                }
                type="text"
                id="name"
                placeholder="your name.."
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="company-or-individual">You Are....</label>
              <div className={`${styles.switch}`}>
                <motion.span
                  variants={{
                    initial: { x: 0, transition: { duration: 0.25 } },
                    animate: { x: "100%", transition: { duration: 0.25 } },
                  }}
                  initial="initial"
                  animate={isChecked ? "animate" : "initial"}
                ></motion.span>
                <input
                  type="checkbox"
                  id="company-or-individual"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
            <motion.div
              style={{ position: "relative" }}
              variants={inputDivVariants}
              initial="initial"
              animate={isChecked ? "enter" : "initial"}
              exit="exit"
              transition={{ ease: "linear" }}
            >
              {isChecked && (
                <motion.div className={`${styles.inputDiv}`}>
                  <label htmlFor="company">Company Name</label>

                  <input
                    style={
                      isChecked
                        ? { backgroundColor: "#4338ca" }
                        : { backgroundColor: "#6d28d9" }
                    }
                    type="text"
                    id="company"
                    autoComplete="off"
                    spellCheck="false"
                    placeholder="your company"
                  />
                </motion.div>
              )}

              <div className={styles.inputDiv}>
                <label htmlFor="message">Any Message?</label>
                <textarea
                  style={
                    isChecked
                      ? { backgroundColor: "#4338ca" }
                      : { backgroundColor: "#6d28d9" }
                  }
                  id="message"
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="anything you want to ask or say"
                />
              </div>
              <button
                type="submit"
                style={isChecked ? { color: "#4338ca" } : { color: "#6d28d9" }}
              >
                Submit
              </button>
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
    </div>
  );
}
