import React from "react";
import styles from "./AboutUs.module.css";
import HomeSubTitle from "../../components/HomeSubTitle/HomeSubTitle";
import HomeDesc from "../../components/HomeDesc/HomeDesc";

const AboutUs: React.FC = () => {
  return (
    <section className={`${styles.aboutUs} container`}>
      <img
        className={styles.aboutUsImage}
        src="./src/assets/AboutUsImg.jpg"
        alt="about us image"
      />
      <div className={styles.aboutUsAdventages}>
        <div className={styles.tenThousand}>
          <HomeSubTitle>10 000+</HomeSubTitle>
          <HomeDesc>
            Тисячі наших свічок уже знайшли своїх власників, наповнюючи домівки
            теплом, ароматом та затишком
          </HomeDesc>
        </div>
        <img
          className={styles.smallImgs}
          src="./src/assets/aboutUs/aboutUs1.jpg"
          alt="candles"
        />
        <div className={styles.fiveYears}>
          <HomeSubTitle>5 років досвіду</HomeSubTitle>
          <HomeDesc>
            Ми вже 5 років створюємо якісні ароматичні свічки, вдосконалюємо
            рецептуру та дизайн, щоб дарувати вам найкращі продукти для затишку
            і комфорту
          </HomeDesc>
        </div>
        <div className={styles.twentyFourGramm}>
          <HomeSubTitle>&lt;24г відправка</HomeSubTitle>
          <HomeDesc>
            Оформіть покупку до 17:00, і ми відправимо її сьогодні
          </HomeDesc>
        </div>
        <img
          className={styles.smallImgs}
          src="./src/assets/aboutUs/aboutUs2.jpg"
          alt="candles"
        />
        <img
          className={styles.smallImgs}
          src="./src/assets/aboutUs/aboutUs3.jpg"
          alt="candles"
        />
        <div className={styles.twentyFourHours}>
          <HomeSubTitle>24/7</HomeSubTitle>
          <HomeDesc>
            Cлужба підтримки завжди на зв’язку! Підкажемо з вибором та вирішимо
            будь-які питання
          </HomeDesc>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
