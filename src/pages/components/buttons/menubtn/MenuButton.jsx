import { useState } from "react";
import { useAnimate } from "framer-motion";
import Heading2 from "../../../../ui/Heading2";
import styles from "./menuButton.module.css";
export default function MenuButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerMenuScope, animate] = useAnimate();
  const handleClickOpen = async () => {
    animate("#span1", { top: "48%" }, { duration: 0.35 });
    animate("#span3", { top: "48%" }, { duration: 0.35 });
    animate("#span1", { rotate: "45deg" }, { duration: 0.35, delay: 0.35 });
    animate("#span2", { rotate: "-45deg" }, { duration: 0.35, delay: 0.35 });
    animate("#span3", { opacity: 0 });
  };
  const handleClickClose = async () => {
    animate("#span1", { rotate: "0deg" }, { duration: 0.35 });
    animate("#span2", { rotate: "0deg" }, { duration: 0.35 });
    animate("#span3", { rotate: "0deg" }, { duration: 0.35 });
    animate("#span1", { top: "35%" }, { duration: 0.35, delay: 0.35 });
    animate(
      "#span3",
      { top: "60%", opacity: 1 },
      { duration: 0.35, delay: 0.35 }
    );
  };
  if (isOpen) handleClickOpen();
  if (!isOpen) handleClickClose();
  return (
    <div>
      <Heading2 text="Hamburger Menu" />
      <div ref={hamburgerMenuScope} className={`flex ${styles.menuButton}`}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <div>
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
