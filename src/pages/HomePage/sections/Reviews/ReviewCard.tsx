import React from "react";
import styles from "./ReviewCard.module.css";
import { Rating } from "@mui/material";
import HomeDescSm from "../../components/HomeDesc/HomeDescSm";

interface ReviewCardProps {
  name: string;
  img: string;
  date: string;
  review: string;
  rating: number;
  className?: string;
}

const ReviewCard:React.FC<ReviewCardProps> = ({className, img, date, rating, name, review}) => {
  return (
    <div className={`${styles.reviewCardWrapper} ${className || ''}`}>
      <div className={styles.reviewerInfo}>
        <img src={img} alt={name} />
        <div className={styles.reviewer}>
          <Rating
            size="small"
            sx={{
              "& .MuiRating-iconFilled": { color: "#73270D" },
            }}
            value={rating}
            readOnly
          />
          <p className={styles.reviewDate}>{date}</p>
          <p className={styles.reviewName}>{name}</p>
        </div>
      </div>
      <HomeDescSm className={styles.reviewText}>{review}</HomeDescSm>
    </div>
  );
};

export default ReviewCard;
