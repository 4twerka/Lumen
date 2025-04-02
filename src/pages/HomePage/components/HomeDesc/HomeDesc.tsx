import React from 'react';
import styles from './HomeDesc.module.css'

interface HomeDescProps {
    children: React.ReactNode;
    className?: string;
}

const HomeDesc:React.FC<HomeDescProps> = ({children, className = ''}) => {
  return (
    <p className={`${styles.desc} ${className}`}>{children}</p>
  )
}

export default HomeDesc
