import React from "react";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ProductSwiper from "./components/ProductSwiper/ProductSwiper";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className={`${styles.productContainer} container`}>
      <Breadcrumbs
        sx={{ pb: "24px" }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          onClick={() => console.log("navigate to homepage")}
        >
          Головна
        </Link>
        ,
        <Typography sx={{ color: "text.primary" }}>
          Свічка Warm Essence
        </Typography>
      </Breadcrumbs>
      <div className={styles.productInfo}>
        <div className={styles.imageWrapper}>
          <ProductSwiper />
        </div>
        <div className={styles.infoWrapper}></div>
      </div>
    </div>
  );
};

export default ProductPage;
