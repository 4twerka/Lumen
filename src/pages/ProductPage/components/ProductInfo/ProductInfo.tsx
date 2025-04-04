import React from "react";
import styles from "./ProductInfo.module.css";
import ColorRound from "../ColorRound/ColorRound";
import CharactericticsInfo from "../CharactericticsInfo/CharactericticsInfo";
import QuestionAcordion from "../../../HomePage/sections/Questions/QuestionAcordion";
import CartQuantity from "../CartQuantity/CartQuantity";
import ProductInfoButton from "./ProductInfoButton";

const ProductInfo: React.FC = () => {
  const isInCart = false;

  return (
    <>
      <h2 className={styles.productTitle}>Свічка Warm Essence</h2>
      <div className={styles.priceAvailabilityWrapper}>
        <p className={styles.availability}>в наявності</p>
        <p className={styles.price}>950₴</p>
      </div>
      <div className={styles.quantityColorWrapperMob}>
        <CartQuantity quantity={2} />
        <p className={`${styles.subTitle} ${styles.color}`}>
          Колір <ColorRound color="#2E2E2E" />
        </p>
      </div>
      <div className={styles.btnMobWrapper}>
        <ProductInfoButton isInCart={isInCart} />
      </div>
      <p className={styles.desc}>
        Чашка гарячого чаю у ваших руках, улюблена книга на колінах, а поруч —
        рівне, тепле полум'я свічки. Тепла нота ванілі і меду нагадає про
        домашню випічку в неділю вранці, коли весь дім наповнювався солодким
        запахом і очікуванням.{" "}
      </p>
      <p
        className={`${styles.subTitle} ${styles.color} ${styles.subTitleDesctop}`}
      >
        Колір <ColorRound color="#2E2E2E" />
      </p>
      <div className={styles.btnWrapper}>
        <CartQuantity quantity={2} />
        <ProductInfoButton isInCart={isInCart} />
      </div>
      <h3 className={styles.characteristicsTitle}>Характеристики</h3>
      <div className={styles.characteristicsInfoWrapper}>
        <CharactericticsInfo
          title="Верхні ноти"
          desc="апельсинова цедра, стиглі яблука, медовий нектар"
        />
        <CharactericticsInfo
          title="Серцеві ноти"
          desc="золотистий мед, ваніль, кориця"
        />
        <CharactericticsInfo
          title="Базові ноти"
          desc="мускатний горіх, амбра, деревні відтінки кедра"
        />
      </div>
      <div className={styles.accordionsWrapper}>
        <QuestionAcordion
          number="01/"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
          title="Час горіння"
        />
        <QuestionAcordion
          number="02/"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
          title="Склад"
        />
        <QuestionAcordion
          number="03/"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
          title="Догляд"
        />
      </div>
    </>
  );
};

export default ProductInfo;
