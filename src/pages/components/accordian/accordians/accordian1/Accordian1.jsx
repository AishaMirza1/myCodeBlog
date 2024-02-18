import { useState } from "react";
import Heading2 from "../../../../../ui/Heading2";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./accordian1.module.css";
import { AnimatePresence, motion } from "framer-motion";
export default function Accordian1() {
  const [quesOpen, setQuesOpen] = useState([]);
  function handleClick(id) {
    const cpyquesOpen = [...quesOpen];
    const indexOfSelectedQues = cpyquesOpen.indexOf(id);
    indexOfSelectedQues === -1
      ? cpyquesOpen.push(id)
      : cpyquesOpen.splice(indexOfSelectedQues, 1);

    setQuesOpen(cpyquesOpen);
  }
  const questionVariants = {
    initail: {
      color: "#031217",
    },
    open: {
      color: "#7c3aed",
    },
    close: { color: "#0e1703" },
  };
  const arrowVariants = {
    open: {
      transform: "rotate(180deg)",
    },
    close: {
      transform: "rotate(0deg)",
    },
  };
  const answerVariants = {
    initail: {
      height: 0,
      marginBottom: "0rem",
    },
    open: {
      height: "fit-content",
      marginBottom: "2rem",
    },
    close: { height: 0 },
    marginBottom: "0rem",
  };
  return (
    <div>
      <Heading2 text="Simple Accordian" />
      <div className={styles.accordian1}>
        <h3>Frequently Asked Questions</h3>
        <div className={styles.accordianContainer}>
          <AnimatePresence>
            {items.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  className={styles.accordianItem}
                  onClick={() => handleClick(item.id)}
                  animate={quesOpen.includes(item.id) ? "open" : "close"}
                  exit="close"
                  initial="initial"
                >
                  <motion.div
                    className={styles.questionContainer}
                    variants={questionVariants}
                  >
                    <p className={styles.title}>{item.title}</p>
                    <motion.span
                      variants={arrowVariants}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      <IoIosArrowDown />
                    </motion.span>
                  </motion.div>
                  <motion.div
                    variants={answerVariants}
                    className={styles.description}
                    transition={{
                      ease: "linear",
                      duration: 0.22,
                      x: { duration: 1 },
                    }}
                  >
                    {quesOpen.indexOf(item.id) !== -1 && (
                      <motion.p>{item.description}</motion.p>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    id: 1,
    title: "how to Earn more ?",
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 2,
    title: "How to Play more",
    imgSrc:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 3,
    title: "Keep track of your Skills",
    imgSrc:
      "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 4,
    title: "Grow faster but how?",
    imgSrc:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
];
