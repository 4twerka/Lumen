import React, { useEffect } from "react";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router";
import ProductSwiper from "./components/ProductSwiper/ProductSwiper";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchProductById } from "../../store/slices/productSlice";
import BreadcrumbsProductPage from "./components/BreadcrumbsProductPage/BreadcrumbsProductPage";
// import Loader from "../../components/Loader/Loader";

const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { product, isLoading } = useAppSelector((state) => state.products);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);
  console.log("product", product);
  console.log("isLoading", isLoading);

  // if (isLoading) {
  //   return (
  //     <div style={{height: 'calc(100vh - 88px)', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  //       <Loader />
  //     </div>
  //   )
  // }

  return (
    <div className={`${styles.productContainer} container`}>
      <BreadcrumbsProductPage title={"Свічка Warm Essence"} />
      {/* десктопна версія */}
      <div className={styles.productInfo}>
        <div className={styles.imageWrapper}>
          <ProductSwiper />
        </div>
        <div className={styles.infoWrapper}>
          <ProductInfo />
        </div>
      </div>
      {/* мобільна версія */}
      <div className={styles.productInfoMob}>
        <h2 className={styles.productInfoMobTitle}>Свічка Warm Essence</h2>
        <ProductSwiper />
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductPage;
