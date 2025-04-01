import React from "react";
import styles from "./Reviews.module.css";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeDescSm from "../../components/HomeDesc/HomeDescSm";
import ReviewCard from "./ReviewCard";
import { reviewers } from "./reviewers";
import ReviewSwiper from "./ReviewSwiper";

const Reviews: React.FC = () => {
  return (
    <section className={`container decor ${styles.review}`}>
      <div className={styles.infoWrapper}>
        <HomeTitle className={styles.reviewTitle}>Відгуки</HomeTitle>
        <HomeDescSm className={styles.reviewDesc}>
          Дякуємо, що обираєте Lumen! Ваші відгуки надихають нас створювати ще
          більше світла та тепла. Ми завжди відкриті до ваших думок і вражень,
          адже вони допомагають нам ставати краще
        </HomeDescSm>
      </div>
      <div className={styles.reviewsGrid}>
        {reviewers.map((reviewer) => (
            <ReviewCard key={reviewer.name} {...reviewer} />
        ))}
      </div>
      <div className={styles.reviewSwiper}>
        <ReviewSwiper reviews={reviewers} />
      </div>
    </section>
  );
};

export default Reviews;
