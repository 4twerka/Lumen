import React from 'react';
import styles from './HomeTitle.module.css'

interface HomeTitleProps {
    children: React.ReactNode;
    className?: string;
    decor?: boolean;
}

const HomeTitle:React.FC<HomeTitleProps> = ({children, className = '', decor}) => {
  return (
    <h1 className={decor ? `${styles.title} ${styles.decor} ${className}` : `${styles.title} ${className}`}>{children}</h1>
  )
}

export default HomeTitle
