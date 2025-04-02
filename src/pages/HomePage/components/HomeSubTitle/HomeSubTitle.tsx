import React from 'react';
import styles from './HomeSubTitle.module.css'

interface HomeSubTitleProps {
    children: React.ReactNode;
    className?: string;
}

const HomeSubTitle:React.FC<HomeSubTitleProps> = ({children, className = ''}) => {
  return (
    <h3 className={`${styles.title} ${className}`}>{children}</h3>
  )
}

export default HomeSubTitle