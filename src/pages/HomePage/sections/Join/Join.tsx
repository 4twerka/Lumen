import React from "react";
import styles from "./Join.module.css";
import LogoIcon from "../../../../assets/Logo2.svg?react";
import InstaIcon from "../../../../assets/InstaIcon.svg?react";
import FBIcon from "../../../../assets/FacebookIcon.svg?react";
import TelegramIcon from "../../../../assets/TelegramIcon.svg?react";
import { IconButton } from "@mui/material";

const Join: React.FC = () => {
  return (
    <section className={`${styles.join} container`}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>
          Приєднуйся до <LogoIcon className={styles.logo} />
          <br /> у соцмережах
        </p>
        <div className={styles.socials}>
          <IconButton>
            <InstaIcon />
          </IconButton>
          <IconButton>
            <TelegramIcon />
          </IconButton>
          <IconButton>
            <FBIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default Join;
