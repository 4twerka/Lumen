import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

interface ReviewCardProps {
  name: string;
  img: string;
  date: string;
  review: string;
  rating: number;
  className?: string;
}

interface ReviewSwiperProps {
  reviews: ReviewCardProps[];
}

const ReviewSwiper: React.FC<ReviewSwiperProps> = ({ reviews }) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.5}
    >
      {reviews.map((review) => (
        <SwiperSlide key={`${review.name}-${review.date}`}>
          <ReviewCard {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSwiper;
