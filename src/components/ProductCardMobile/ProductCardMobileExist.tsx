import { Box, Typography } from "@mui/material";
import React from "react";

const ProductCardMobileExist:React.FC = () => {
  
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
        В наявності
      </Typography>
    </Box>
  );
};

export default ProductCardMobileExist;
