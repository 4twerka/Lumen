import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface ProductCardMobileInfoProps {
  price: number;
}

const ProductCardMobileInfo: React.FC<ProductCardMobileInfoProps> = ({
  price,
}) => {
  const discount = 30;
  const discountPrice = price - price * (discount / 100);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "#A3A3A3",
            textDecoration: "line-through",
            fontSize: "0.625rem",
            fontWeight: 400,
          }}
        >
          {discountPrice.toFixed(2)}₴
        </Typography>
        <Typography
          sx={{ color: "#111111", fontSize: "1rem", fontWeight: 500 }}
        >
          {price}₴
        </Typography>
      </Box>
      <IconButton
        onClick={() => {
          console.log("added to shopping cart");
        }}
      >
        <ShoppingCartOutlinedIcon color="primary" />
      </IconButton>
    </Box>
  );
};

export default ProductCardMobileInfo;
