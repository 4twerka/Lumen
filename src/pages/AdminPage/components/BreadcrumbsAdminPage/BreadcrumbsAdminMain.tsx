import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import styles from "./BreadcrumbsAdminPage.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BreadcrumbHome from "../../../../assets/BreadcrumbHome.svg?react";

const BreadcrumbsAdminMaim: React.FC = () => {
  return (
    <Breadcrumbs
      sx={{
        pb: { md: "24px", xs: "16px" },
        display: { xs: "block", md: "none" },
      }}
      separator={<NavigateNextIcon sx={{ width: "16px", height: "16px" }} />}
      aria-label="breadcrumb"
    >
      <Link className={`${styles.link} ${styles.active}`} to="/admin">
        <BreadcrumbHome />
        Головна
      </Link>
    </Breadcrumbs>
  );
};

export default BreadcrumbsAdminMaim;
