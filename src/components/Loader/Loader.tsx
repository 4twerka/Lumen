import React from 'react';
import styles from "./Loader.module.css";

interface LoaderProps {
    size?: string,
    color?: string,
}

const Loader: React.FC<LoaderProps> = ({size, color}) => {
  return (
    <div className={styles.loader} style={{height: size, width: size, color: color}} />
  )
}

export default Loader
