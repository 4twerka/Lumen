import { useState } from "react";
import { Swiper as SwiperClass } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import styles from "./ProductSwiper.module.css";
import { IconButton } from "@mui/material";
import { SUPABASE_PRODUCT_URL_PART } from "../../../../constants";

interface ProductSwiperProps {
  productsImgs: string[];
}

export default function ProductSwiper({productsImgs}: ProductSwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  
  if (!productsImgs.length) {
    return <div className={styles.productSwiperWrapper}>No images available</div>;
  }

  return (
    <div className={styles.productSwiperWrapper}>
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiperImg}
      >
        {productsImgs.map((imgPath) => (
          <SwiperSlide key={imgPath}>
          <img
            className={styles.productImg}
            src={`${SUPABASE_PRODUCT_URL_PART}${imgPath}`}
            alt="candle"
          />
        </SwiperSlide>
        ))}
      </Swiper>
      <IconButton
        className={`custom-prev ${styles.customButton} ${styles.prev}`}
      >
        <ArrowBackIosNewRoundedIcon />
      </IconButton>
      <IconButton
        className={`custom-next ${styles.customButton} ${styles.next}`}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        spaceBetween={16}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiperSmallImgs}
      >
        {productsImgs.map((imgPath) => (
          <SwiperSlide
          key={imgPath}
          className={styles.swiperSlideWrapper}
          style={{ width: "fit-content" }}
        >
          <img
            className={styles.swiperSlideSmallImg}
            src={`${SUPABASE_PRODUCT_URL_PART}${imgPath}`}
            alt="candle"
          />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
