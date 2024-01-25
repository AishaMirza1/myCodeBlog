import Heading2 from "../../../../ui/Heading2";
import styles from "./form1.module.css";
// import img1 from "./img/individual.webp";
import img2 from "./img/company.avif";
export default function Form1() {
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
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                autoComplete="off"
                spellCheck="false"
                placeholder="your company"
              />
            </div>
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
          </form>
          <div>
            <img src={img2} />
          </div>
        </div>
      </div>
    </section>
  );
}
