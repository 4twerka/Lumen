import { Box, Typography } from "@mui/material";
import React from "react";

interface ProductCardMobileExistProps {
  stock: number;
}

const ProductCardMobileExist:React.FC<ProductCardMobileExistProps> = ({ stock }) => {
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontWeight: 400, fontSize: "0.75rem", color: "#0E402D" }}
      >
        { stock > 0 ? "В наявності" : "Немає в наявності"}
      </Typography>
    </Box>
  );
};

export default ProductCardMobileExist;
