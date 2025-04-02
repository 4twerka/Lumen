import React from "react";
import styles from "./OurAdvantages.module.css";
import AdvantageItem from "./AdvantageItem";
import ButtonOutline from "../../../../components/Buttons/ButtonOutline";
import OurAdvantagesSwiper from "./OurAdvantagesSwiper";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeDesc from "../../components/HomeDesc/HomeDesc";

const OurAdvantages: React.FC = () => {
  return (
    <section className={`${styles.ourAdvantagesContainer} container`}>
      <div className={`${styles.grid} decor`}>
        <div className={styles.ourAdvantages}>
          <div className={styles.ourAdvantagesInfo}>
            <HomeTitle>Наші переваги</HomeTitle>
            <HomeDesc className={styles.ourAdvantagesDesc}>
              Головні цінності, які ми постійно удосконалюємо
            </HomeDesc>
          </div>
          <div className={styles.ourAdvantagesSwiper}>
            <OurAdvantagesSwiper />
          </div>
          <div>
            <ButtonOutline className={styles.btn}>Про нас</ButtonOutline>
          </div>
        </div>
        <AdvantageItem
          className={styles.natural}
          title="Натуральні матеріали"
          description="Ми використовуємо тільки 100% натуральний віск, який не виділяє шкідливих речовин при горінні. Це безпечний вибір для вас, ваших близьких і довкілля"
        />
        <AdvantageItem
          className={styles.design}
          title="Естетичний дизайн"
          description="Стильні баночки й мінімалістичний дизайн чудово доповнять ваш інтер’єр і стануть ідеальним подарунком для будь-якого випадку"
          subDescripton="Якісні матеріали, плавні лінії, теплі кольори свічок не лише наповнять ваш дім світлом, а й стануть його душею"
        />
        <AdvantageItem
          className={styles.history}
          title="Унікальні аромати з історією"
          description="Ми детально описуємо кожен аромат, щоб ви могли легко знайти ідеальний варіант для себе"
        />
        <AdvantageItem
          className={styles.loyalty}
          title="Програма лояльності"
          description="Lumen цінує своїх клієнтів. Ми пропонуємо кешбек за покупки, спеціальні знижки та бонуси для постійних клієнтів"
        />
      </div>
    </section>
  );
};

export default OurAdvantages;
