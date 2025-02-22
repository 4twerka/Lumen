import { Typography } from "@mui/material";
import React from "react";

interface ProductCardPriceProps {
  children: number;
}

const ProductCardPrice: React.FC<ProductCardPriceProps> = ({ children }) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: "1rem", md: "1.5rem" },
        fontWeight: { xs: 500, md: 600 },
        lineHeight: "36px",
        color: "#FFFFFF",
      }}
    >
      ${children}
    </Typography>
  );
};

export default ProductCardPrice;
