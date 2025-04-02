import React from 'react';
import styles from "./CollectionCard.module.css";

interface CollectionCardProps {
    title: string;
    short_describe: string;
    price: number;
    backgroundImg?: string;
}

const CollectionCard:React.FC<CollectionCardProps> = ({title, short_describe, price, backgroundImg}) => {
    const backgroundStyle = backgroundImg
    ? {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 5.56%, rgba(13, 17, 32, 0.64) 29.5%, rgba(25, 33, 61, 0.00) 65.5%), url(${backgroundImg}) lightgray 0px -94.532px / 100% 124.2% no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : {};
  return (
    <div className={styles.cardWrapper} style={backgroundStyle}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{short_describe}</p>
      <p className={styles.price}>{price}</p>
    </div>
  )
}

export default CollectionCard
