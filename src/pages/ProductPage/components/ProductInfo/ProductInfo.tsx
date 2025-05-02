import React from "react";
import styles from "./ProductInfo.module.css";
import ColorRound from "../ColorRound/ColorRound";
import CharactericticsInfo from "../CharactericticsInfo/CharactericticsInfo";
import QuestionAcordion from "../../../HomePage/sections/Questions/QuestionAcordion";
import CartQuantity from "../CartQuantity/CartQuantity";
import ProductInfoButton from "./ProductInfoButton";
import { Product } from "../../../../types";
import { useAppSelector } from "../../../../hooks";
import { productColor } from "../../../../utils/productColor";

interface ProductInfoProps {
   product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const carts = useAppSelector((state) => state.products.carts);
  const isInCart = carts.some((item) => item.productId === product._id);
  const cartProduct = carts.find((item) => item.productId === product._id);
    
  return (
    <>
      <h2 className={styles.productTitle}>{product.title}</h2>
      <div className={styles.priceAvailabilityWrapper}>
        <p className={styles.availability}>{product.stock > 0 ? "в наявності" : "немає в наявності"}</p>
        <p className={styles.price}>{product.price}₴</p>
      </div>
      <div className={styles.quantityColorWrapperMob}>
        {cartProduct && <CartQuantity id={product._id} quantity={cartProduct?.quantity} />}
        <p className={`${styles.subTitle} ${styles.color}`}>
          Колір <ColorRound color={productColor[product.color.toLowerCase()]} />
        </p>
      </div>
      <p className={`${styles.aromaSizeMob} ${styles.aromaSizeMobPadding}`}>Аромат: {product.aroma}</p>
      <p className={styles.aromaSizeMob}>Розмір: {product.size} см</p>
      <div className={styles.btnMobWrapper}>
        <ProductInfoButton stock={product.stock} id={product._id} isInCart={isInCart} />
      </div>
      <p className={styles.desc}>
        {product.short_describe}
      </p>
      <p
        className={`${styles.subTitle} ${styles.color} ${styles.subTitleDesctop}`}
      >
        Колір <ColorRound color={productColor[product.color.toLowerCase()]} />
      </p>
      <p className={`${styles.aromaSize} ${styles.aromaSizePadding}`}>Аромат: {product.aroma}</p>
      <p className={styles.aromaSize}>Розмір: {product.size} см</p>
      <div className={styles.btnWrapper}>
        {cartProduct && <CartQuantity id={product._id} quantity={cartProduct?.quantity} />}
        <ProductInfoButton stock={product.stock} id={product._id} isInCart={isInCart} />
      </div>
      <h3 className={styles.characteristicsTitle}>Характеристики</h3>
      <div className={styles.characteristicsInfoWrapper}>
        <CharactericticsInfo
          title="Верхні ноти"
          desc={product.characteristics?.topNotes || ""}
        />
        <CharactericticsInfo
          title="Серцеві ноти"
          desc={product.characteristics?.heartNotes || ""}
        />
        <CharactericticsInfo
          title="Базові ноти"
          desc={product.characteristics?.baseNotes || ""}
        />
      </div>
      <div className={styles.accordionsWrapper}>
        <QuestionAcordion
          number="01/"
          text={product.burning_time}
          title="Час горіння"
        />
        <QuestionAcordion
          number="02/"
          text={product.composition}
          title="Склад"
        />
        <QuestionAcordion
          number="03/"
          text={product.care}
          title="Догляд"
        />
      </div>
    </>
  );
};

export default ProductInfo;
