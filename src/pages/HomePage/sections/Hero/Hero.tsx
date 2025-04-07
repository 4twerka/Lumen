import React from "react";
import styles from "./Hero.module.css";
import FormButtonSubmit from "../../../../components/Forms/FormButtonSubmit";
import { useNavigate } from "react-router";
// import useIntersectionObserver from "../../../../utils/useIntersectionObserver";

const Hero: React.FC = () => {
  // const { ref: textRefDesktop, isVisible: isVisibleDesktop } = useIntersectionObserver();
  // const { ref: textRefMobile, isVisible: isVisibleMobile } = useIntersectionObserver();
  const navigate = useNavigate();
  return (
    <section className={`${styles.heroWrapper} container`}>
      {/* Десктопна версія */}
      <div className={styles.heroInner}>
        <div className={styles.leftBlock}>
          <div className={styles.leftBlockImgs}>
            <img src="./Img1.png" className={styles.images} />
            <img src="./Img2.png" className={styles.images} />
            <img src="./Img3.png" className={styles.images} />
          </div>
          <p className={styles.leftBlockText}>
            [Ми віримо в силу деталей, тому кожна свічка несе в собі історію,
            турботу та щирість. Lumen — це ваш вибір, якщо ви цінуєте якість,
            стиль і атмосферу.]
          </p>
          <FormButtonSubmit onClick={() => navigate('/catalog')} className={styles.button}>
            Переглянути каталог
          </FormButtonSubmit>
        </div>
        <img src="./HeroImg.png" className={styles.heroImg} />
        {/* <p
          ref={textRefDesktop}
          className={`${styles.textBackground} ${isVisibleDesktop ? styles.show : ""}`}
        >
          Запали затишок
        </p> */}
        <p className={`${styles.textBackground}`}>Запали затишок</p>
      </div>
      {/* Мобільна версія */}
      <div className={styles.heroInnerMobile}>
        <div className={styles.topInfoWrapper}>
          <div className={styles.leftBlockMobile}>
            <p className={styles.leftBlockText}>
              [Ми віримо в силу деталей, тому кожна свічка несе в собі історію,
              турботу та щирість.{" "}
            </p>
            <img src="./HeroImg.png" className={styles.heroImgMobile} />
          </div>
          <div className={styles.imgsWrapper}>
            <img src="./Img1.png" className={styles.images} />
            <img src="./Img2.png" className={styles.images} />
            <img src="./Img3.png" className={styles.images} />
          </div>
        </div>
        <div className={styles.leftBlockTextMobWrapper}>
          <p className={`${styles.leftBlockText} ${styles.leftBlockTextMob}`}>
            Lumen — це ваш вибір, якщо ви цінуєте якість, стиль і атмосферу.]{" "}
          </p>
        </div>
        {/* <p
            ref={textRefMobile}
            className={`${styles.textBackground} ${
              isVisibleMobile ? styles.show : ""
            }`}
          >
            Запали затишок
          </p> */}
        <p className={`${styles.textBackground}`}>Запали затишок</p>
        <FormButtonSubmit onClick={() => navigate('/catalog')}>Переглянути каталог</FormButtonSubmit>
      </div>
    </section>
  );
};

export default Hero;
