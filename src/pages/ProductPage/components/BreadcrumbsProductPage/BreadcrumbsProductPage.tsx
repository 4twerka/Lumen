import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'
import styles from './BreadcrumbsProductPage.module.css'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface BreadcrumbsProductPageProps {
  title: string;
}

const BreadcrumbsProductPage:React.FC<BreadcrumbsProductPageProps> = ({title}) => {
  
  return (
    <Breadcrumbs
        sx={{ pb: { md: "24px", xs: "16px" } }}
        separator={<NavigateNextIcon sx={{ width: "16px", height: "16px" }} />}
        aria-label="breadcrumb"
      >
        <Link
          className={styles.link}
          to="/"
        >
          Головна
        </Link>
        ,
        <Typography sx={{ color: "#2E2E2E", fontSize: "0.875rem" }}>
          {title}
        </Typography>
      </Breadcrumbs>
  )
}

export default BreadcrumbsProductPage
