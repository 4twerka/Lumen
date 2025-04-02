import React from "react";
import styles from "./Questions.module.css";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeDesc from "../../components/HomeDesc/HomeDesc";
import ButtonOutline from "../../../../components/Buttons/ButtonOutline";
import QuestionsAcordions from "./QuestionsAcordions";

const Questions: React.FC = () => {
  return (
    <section className={`${styles.questions} container decor`}>
      <div className={styles.questionsInfo}>
        <div className={styles.questionsTitle}>
          <HomeTitle>Залишились питання?</HomeTitle>
          <HomeDesc className={styles.questionsDesc}>
            Якщо у вас є додаткові питання – ми завжди готові допомогти!
          </HomeDesc>
        </div>
        <ButtonOutline className={styles.btn}>Показати контакти</ButtonOutline>
      </div>
      <div className={styles.questionsAccordions}>
        <QuestionsAcordions />
      </div>
      <ButtonOutline className={styles.btnMob}>Показати контакти</ButtonOutline>
    </section>
  );
};

export default Questions;
