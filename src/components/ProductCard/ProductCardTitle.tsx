import { Typography } from "@mui/material";
import React from "react";

interface ProductCardTitleProps {
  children: string;
}

const ProductCardTitle: React.FC<ProductCardTitleProps> = ({ children }) => {
  return (
    <Typography
      sx={{
        color: "#FDF5ED",
        fontSize: { xs: "1rem", md: "1.5rem" },
        fontWeight: { xs: 500, md: 600 },
        lineHeight: "36px",
        textAlign: "center",
        textDecoration: 'none'
      }}
    >
      {children}
    </Typography>
  );
};

export default ProductCardTitle;
