import React from "react";
import styles from "./TopSales.module.css";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeDesc from "../../components/HomeDesc/HomeDesc";
import CollectionSwiper from "../Collection/CollectionSwiper";
import FormButtonSubmit from "../../../../components/Forms/FormButtonSubmit";
import { collectionProducts } from "../../collectionProducts";

const TopSales: React.FC = () => {
  return (
    <section className={`${styles.topSales} container topSalesContainer decor`}>
      <div className={styles.topSalesTitle}>
        <HomeTitle>Топ-продажів</HomeTitle>
        <HomeDesc className={styles.topSaleDesc}>
          Познайомся з найпопулярнішими ароматами та дизайнами, які обирають
          знову і знову. Обери свою ідеальну свічку серед наших бестселерів
        </HomeDesc>
      </div>
      <CollectionSwiper name="top-sales" products={collectionProducts} />
      <div className={styles.buttonWrapper}>
        <FormButtonSubmit className={styles.button}>
          Переглянути каталог
        </FormButtonSubmit>
      </div>
    </section>
  );
};

export default TopSales;
