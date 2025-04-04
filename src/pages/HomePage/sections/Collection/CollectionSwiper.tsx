import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination, Navigation } from "swiper/modules";
import "./CollectionSwiper.css";
import CollectionCard from "./CollectionCard";
import { mokProduct } from "../../collectionProducts";

interface CollectionSwiperProps {
  position?: "left" | "right";
  name: string;
//   products: Product[];
  products: mokProduct[];
}

const CollectionSwiper: React.FC<CollectionSwiperProps> = ({
  position = "left",
  products,
  name
}) => {
  return (
    <div className="collection-swiper-wrapper">
      <Swiper
        className="collection-swiper"
        spaceBetween={24}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 2.3 },
          768: { slidesPerView: 3.5 },
        }}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true, type: "fraction" }}
        modules={[Scrollbar, Pagination, Navigation]}
      >
        {products.map((item) => (
          <SwiperSlide key={`${name}-${item._id}`}>
            <CollectionCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={position === "right" ? "swiper-button-prev swiper-button-prev-right" : "swiper-button-prev"}></button>
      <button className={position === "right" ? "swiper-button-next swiper-button-next-right" : "swiper-button-next"}></button>
    </div>
  );
};

export default CollectionSwiper;
