import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SUPABASE_PRODUCT_URL_PART } from "../../../../constants";
import { Link } from "react-router";

interface OrderSwiperProps {
  productsInfo: { productId: string; image: string }[];
}

const OrderSwiper: React.FC<OrderSwiperProps> = ({ productsInfo }) => {
  return (
    <Swiper
      style={{ width: "100%" }}
      spaceBetween={8}
      breakpoints={{
        320: {
          slidesPerView: 2.5,
        },
        480: {
          slidesPerView: 3.5,
        },
        640: {
          slidesPerView: 4.5,
        },
        768: {
          slidesPerView: 5.5,
        },
        1024: {
          slidesPerView: 6.5,
        },
        1280: {
          slidesPerView: 7.5,
        },
      }}
    >
      {productsInfo.map((item) => (
        <SwiperSlide key={item.productId}>
          <Link to={`/product/${item.productId}`}>
            <img
              src={`${SUPABASE_PRODUCT_URL_PART}${item.image}`}
              style={{
                height: "136px",
                width: "100%",
                borderRadius: "4px",
                objectFit: "cover",
              }}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OrderSwiper;
