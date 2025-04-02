import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import './OurAdvantagesSwiper.css'
import { advantages } from "./advantages";
import AdvantageItem from "./AdvantageItem";

const OurAdvantagesSwiper: React.FC = () => {
  return (
    <Swiper
      className="customSwiper"
      spaceBetween={0}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true, type: 'fraction' }}
      modules={[Scrollbar, Pagination]}
    >
      {advantages.map((item) => (
        <SwiperSlide key={item.title}>
          <AdvantageItem title={item.title} description={item.description} className={"advantageItem"} backgroundImage={item.backgroundImg} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OurAdvantagesSwiper;
