import styles from "./accordian.module.css";
import Heading2 from "../../../../../ui/Heading2";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconContext } from "react-icons";
export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleClick(id) {
    console.log(id);
    id === selected ? setSelected(null) : setSelected(id);
  }
  console.log(selected);
  const btnVariants = {
    initial: { transform: "rotate(-90deg)" },
    enter: { backgroundColor: "#4a3aff", transform: "rotate(0deg)" },
    exit: { transform: "rotate(-90deg)" },
  };
  const answerVariants = {
    initial: { height: 0 },
    enter: { height: "fit-content" },
    exit: { height: 0 },
  };
  const answerParaVariants = {
    initial: { opacity: 0, top: "-35px" },
    enter: { opacity: 1, top: "0px", transition: { delay: 0.13 } },
    exit: { opacity: 0, top: "-35px" },
  };
  return (
    <div>
      <Heading2 text="Webflow Template Accordian" />
      <div className={`${styles.accordianContainerOuter}`}>
        <AnimatePresence>
          {items.map((item) => {
            return (
              <motion.div
                initial="initial"
                animate={selected === item.id ? "enter" : null}
                exit="exit"
                key={`faq-${item.id}`}
                className={`${styles.accordianItem} flex`}
                onClick={() => handleClick(item.id)}
              >
                <div className={`${styles.faqQuestionContainer}`}>
                  <h3>{item.title}</h3>
                  <motion.span className="flex" variants={btnVariants}>
                    <IconContext.Provider
                      value={
                        selected === item.id
                          ? { color: "#fff" }
                          : { color: "#4a3aff" }
                      }
                    >
                      <IoIosArrowDown />
                    </IconContext.Provider>
                  </motion.span>
                </div>

                <motion.div
                  variants={answerVariants}
                  className={styles.faqAnsContainer}
                >
                  <motion.p variants={answerParaVariants}>
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

const items = [
  {
    id: 1,
    title: "Why is BRIX Templates the best Webflow agency out there?",
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 2,
    title: "Why is BRIX Templates the best Webflow agency out there?",
    imgSrc:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 3,
    title: "Why is BRIX Templates the best Webflow agency out there?",
    imgSrc:
      "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 4,
    title: "Why is BRIX Templates the best Webflow agency out there?",
    imgSrc:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
];
