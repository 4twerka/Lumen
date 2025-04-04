import React from "react";
import styles from "./Inspiration.module.css";
// import useIntersectionObserver from "../../../../utils/useIntersectionObserver";

const Inspiration: React.FC = () => {

//   const {ref: textRef, isVisible} = useIntersectionObserver();

  return (
    <section className={`${styles.inspiration} container`}>
      <img
        className={styles.inspirationImg}
        src="./inspiration.jpg"
        alt="inpiration"
      />
      <img
        className={styles.inspirationImgMob}
        src="./inspirationMob.jpg"
        alt="inpiration"
      />
      <p className={styles.textBackground}>Запали натхнення</p>
      {/* <p ref={textRef} className={`${styles.textBackground} ${isVisible ? styles.show : ""}`}>Запали натхнення</p> */}
    </section>
  );
};

export default Inspiration;
