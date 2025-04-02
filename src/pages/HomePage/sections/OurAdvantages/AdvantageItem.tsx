import React from 'react';
import styles from './AdvantageItem.module.css';

interface AdvantageItemProps {
    title: string;
    description: string;
    subDescripton?: string;
    className?: string;
    backgroundImage?: string;
}

const AdvantageItem:React.FC<AdvantageItemProps> = ({title, description, subDescripton, className, backgroundImage}) => {
    const backgroundStyle = backgroundImage
    ? {
        background: `linear-gradient(0deg, rgba(25, 33, 61, 0.00) 47.5%, rgba(30, 32, 40, 0.80) 92%), url(${backgroundImage}) lightgray -217.842px 0.667px / 189.977% 100% no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : {};
  return (
    <div className={`${styles.wrapper} ${className || ''}`} 
    style={backgroundStyle}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      {subDescripton && <p className={styles.subDesc}>{subDescripton}</p>}
    </div>
  )
}

export default AdvantageItem
