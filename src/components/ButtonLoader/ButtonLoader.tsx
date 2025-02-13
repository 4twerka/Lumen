import React from 'react';
import styles from "./ButtonLoader.module.css";

interface LoaderProps {
    size?: string,
    color?: string,
}

const ButtonLoader: React.FC<LoaderProps> = ({size, color}) => {
  return (
    <div className={styles.loader} style={{height: size, width: size, color: color}} />
  )
}

export default ButtonLoader;
