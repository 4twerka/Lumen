import { Box, Typography } from "@mui/material";
import React from "react";
import TopSalesProduct from "./TopSalesProduct";

interface TopSalesProps {
  topSalesProducts: {
    productId: string;
    quantity: number;
  }[];
}

const TopSales: React.FC<TopSalesProps> = ({ topSalesProducts }) => {
  return (
    <Box
      sx={{
        padding: "1rem 1.5rem",
        backgroundColor: "#F1F1F4",
        borderRadius: "0.5rem",
      }}
    >
      <Typography
        component={"h3"}
        sx={{
          fontWeight: { xs: 500, md: 600 },
          fontSize: { xs: "1rem", md: "1.5rem" },
          lineHeight: { xs: "100%", md: "150%" },
          paddingBottom: "1rem",
        }}
      >
        Топ-продажів
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {topSalesProducts.map((prod) => (
          <TopSalesProduct key={prod.productId} {...prod} />
        ))}
      </Box>
    </Box>
  );
};

export default TopSales;
