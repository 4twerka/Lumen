import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import styles from "./BreadcrumbsAdminPage.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BreadcrumbHome from "../../../../assets/BreadcrumbHome.svg?react";
import BreadcrumbUnion from "../../../../assets/Union.svg?react";

// interface BreadcrumbsAdminProductsProps {
//   title?: string;
// }

const BreadcrumbsAdminEditProduct: React.FC = () => {
  return (
    <Breadcrumbs
      sx={{ pb: { md: "24px", xs: "16px" } }}
      separator={<NavigateNextIcon sx={{ width: "16px", height: "16px" }} />}
      aria-label="breadcrumb"
    >
      <Link className={styles.link} to="/admin/main">
        <BreadcrumbHome />
        Головна
      </Link>
      <Link className={`${styles.link}`} to="/admin/products">
        <BreadcrumbUnion />
        Товари
      </Link>
      <Typography className={`${styles.link} ${styles.active}`}>
      <BreadcrumbHome />
        Редагування товару
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsAdminEditProduct;
