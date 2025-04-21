import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import styles from "./BreadcrumbsProfilePage.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BreadcrumbHome from "../../../../assets/BreadcrumbHome.svg?react";

interface BreadcrumbsProfilePageProps {
  title?: string;
}

const BreadcrumbsProfilePage: React.FC<BreadcrumbsProfilePageProps> = ({
  title,
}) => {
  return (
    <Breadcrumbs
      sx={{ pb: { md: "24px", xs: "16px" } }}
      separator={<NavigateNextIcon sx={{ width: "16px", height: "16px" }} />}
      aria-label="breadcrumb"
    >
      <Link className={styles.link} to="/">
        <BreadcrumbHome />
        Головна
      </Link>
      <Link className={`${styles.link} ${title === '' ? styles.active : ''}`} to="/profile">
        <BreadcrumbHome />
        Мій профіль
      </Link>
      {title && (
        <Typography
        sx={{
          color: "#111111",
          fontSize: "0.875rem",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          "& path": { fillOpacity: 1 },
        }}
      >
        <BreadcrumbHome />
        {title}
      </Typography>
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsProfilePage;
