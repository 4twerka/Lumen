import React from "react";
import styles from "./Art.module.css";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeSubTitle from "../../components/HomeSubTitle/HomeSubTitle";
import HomeDesc from "../../components/HomeDesc/HomeDesc";
import LineIconLeft from "../../../../assets/LineLeft.svg?react";
import LineIconRightMD from "../../../../assets/LineRightMD.svg?react";
import LineIconRightSM from "../../../../assets/LineRightSM.svg?react";
import LineIconRightLG from "../../../../assets/LineRightLG.svg?react";

const Art:React.FC = () => {
  return (
    <section className={`${styles.artContainer} container`}>
      <div className={`${styles.artInfo} decorMob`}>
        <HomeTitle className={styles.artTitle}>Мистецтво<br/> в кожній деталі</HomeTitle>
        <div className={`${styles.subTitleInfo} ${styles.mobRight}`}>
          <div className={styles.subTitleWrapper}>
            <HomeSubTitle className={styles.subTitle}>
              Якісні матеріали
            </HomeSubTitle>
            <LineIconLeft className={styles.subTitleLine} />
          </div>
          <HomeDesc className={styles.artDesc}>чисте та рівномірне горіння без шкідливих домішок</HomeDesc>
        </div>
        <div className={`${styles.subTitleInfo} ${styles.mobLeft}`}>
          <div className={styles.subTitleWrapper}>
            <HomeSubTitle className={styles.subTitle}>
              Вишукані форми
            </HomeSubTitle>
            <LineIconLeft className={styles.subTitleLine} />
          </div>
          <HomeDesc className={styles.artDesc}>щоб дарувати естетику та затишну атмосферу</HomeDesc>
        </div>
      </div>
      <div className={styles.artCandleWrapper}>
        <img
          className={styles.artCandle}
          src="./ArtCandle.png"
          alt="art candle"
        />
      </div>
      <div className={`${styles.artInfo}`}>
        <div className={`${styles.subTitleInfo} ${styles.subTitleInfoRight} ${styles.mobLeft}`}>
          <div className={styles.subTitleWrapper}>
            <LineIconRightLG className={styles.subTitleLine} />
            <HomeSubTitle className={styles.subTitle}>
              Тривале горіння
            </HomeSubTitle>
          </div>
          <HomeDesc className={styles.artDesc}>
            завдяки натуральному віску та правильно підібраним гнотам
          </HomeDesc>
        </div>
        <div className={`${styles.subTitleInfo} ${styles.subTitleInfoRight} ${styles.mobLeft}`}>
          <div className={styles.subTitleWrapper}>
            <LineIconRightMD className={styles.subTitleLine} />
            <HomeSubTitle className={styles.subTitle}>
              Продумані кольори
            </HomeSubTitle>
          </div>
          <HomeDesc className={styles.artDesc}>підкреслять індивідуальність вашого простору</HomeDesc>
        </div>
        <div className={`${styles.subTitleInfo} ${styles.subTitleInfoRight} ${styles.mobRight}`}>
          <div className={styles.subTitleWrapper}>
            <LineIconRightSM className={styles.subTitleLine} />
            <HomeSubTitle className={styles.subTitle}>
              Різноманіття ароматів
            </HomeSubTitle>
          </div>
          <HomeDesc className={styles.artDesc}>тому кожен зможе знайти свій особливий аромат</HomeDesc>
        </div>
      </div>
    </section>
  );
};

export default Art;
