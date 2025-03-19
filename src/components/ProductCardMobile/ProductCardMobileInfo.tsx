import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addCart } from "../../store/slices/productSlice";

interface ProductCardMobileInfoProps {
  price: number;
  id: string;
}

const ProductCardMobileInfo: React.FC<ProductCardMobileInfoProps> = ({
  price,
  id,
}) => {
  const discount = 30;
  const discountPrice = price - price * (discount / 100);
  const dispatch = useAppDispatch();
  const carts = useAppSelector((state) => state.products.carts);
  const isInCart = carts.some((item) => item.productId === id);

  const addToCart = () => dispatch(addCart(id));
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
        onClick={addToCart}
        sx={{
          backgroundColor: isInCart ? "#73270D" : "inherit",
          color: isInCart ? "#FDF5ED" : "#73270D",
          "&:hover": {
            backgroundColor: isInCart ? "#5a1f0a" : "#f5f5f5",
          },
        }}
      >
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default ProductCardMobileInfo;
