import { Box } from "@mui/material";
import React from "react";

interface ProductCardWrapperProps {
  children: React.ReactNode;
  image: string[];
}

const ProductCardWrapper: React.FC<ProductCardWrapperProps> = ({
  children,
  image,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        height: "395px",
        borderRadius: "0.75rem",
        position: "relative",
        display: "flex",
        gap: "0.25rem",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "1rem",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 5.56%, rgba(13, 17, 32, 0.64) 23.69%, rgba(25, 33, 61, 0.00) 100%), url(${image[0]})`,
        backgroundColor: "lightgray",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Box>
  );
};

export default ProductCardWrapper;
