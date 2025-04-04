import React from 'react';
import styles from './CharactericticsInfo.module.css';

interface CharactericticsInfoProps {
    title: string;
    desc: string
}

const CharactericticsInfo:React.FC<CharactericticsInfoProps> = ({title, desc}) => {
  return (
    <div className={styles.characteristicsInfo}>
        <p className={styles.characteristicsTitle}>{title}:</p>
        <p className={styles.characteristicsDesc}>{desc}</p>
      </div>
  )
}

export default CharactericticsInfo
