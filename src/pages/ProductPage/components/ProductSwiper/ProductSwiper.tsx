import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ProductSwiper.module.css";

const ProductSwiper = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={styles.productSwiper}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
};

export default ProductSwiper;
