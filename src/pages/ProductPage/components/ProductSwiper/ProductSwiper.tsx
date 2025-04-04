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

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

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
        <SwiperSlide>
          <img
            className={styles.productImg}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.productImg}
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.productImg}
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
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
        <SwiperSlide
          className={styles.swiperSlideWrapper}
          style={{ width: "fit-content" }}
        >
          <img
            className={styles.swiperSlideSmallImg}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlideWrapper}>
          <img
            className={styles.swiperSlideSmallImg}
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlideWrapper}>
          <img
            className={styles.swiperSlideSmallImg}
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
