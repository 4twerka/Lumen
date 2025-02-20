import { Typography } from "@mui/material";
import React from "react";

interface ProductCardDescProps {
  children: string;
}

const ProductCardDesc: React.FC<ProductCardDescProps> = ({ children }) => {
  return (
    <Typography
      sx={{
        minHeight: "42px",
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "21px",
        color: "#FFFFFF",
        textAlign: "center",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        WebkitLineClamp: 2, // обмежує до двох рядків
        textOverflow: "ellipsis",
      }}
    >
      {children}
    </Typography>
  );
};

export default ProductCardDesc;
