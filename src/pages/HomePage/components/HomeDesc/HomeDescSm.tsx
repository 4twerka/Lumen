import React from "react";
import styles from "./HomeDesc.module.css";

interface HomeDescSmProps {
  children: React.ReactNode;
  className?: string;
}

const HomeDescSm: React.FC<HomeDescSmProps> = ({
  children,
  className = "",
}) => {
  return <p className={`${styles.descSm} ${className}`}>{children}</p>;
};

export default HomeDescSm;
