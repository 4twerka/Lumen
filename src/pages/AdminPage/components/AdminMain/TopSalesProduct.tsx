import { Box, Typography } from "@mui/material";
import React from "react";
import { SUPABASE_PRODUCT_URL_PART } from "../../../../constants";
import { useAppSelector } from "../../../../hooks";

interface TopSalesProductProps {
  productId: string;
  quantity: number;
}

const TopSalesProduct: React.FC<TopSalesProductProps> = ({
  productId,
  quantity,
}) => {
  const products = useAppSelector((state) => state.products.products);
  const currentProduct = products.find((product) => product._id === productId);
  return (
    <Box
      sx={{
        pb: "1rem",
        borderBottom: "1px solid #A3A3A3",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        "&:last-of-type": {
          borderBottom: "none",
        },
      }}
    >
      <Box
        component={"img"}
        src={`${SUPABASE_PRODUCT_URL_PART}${currentProduct?.image[0]}`}
        alt={currentProduct?.title}
        sx={{ width: "70px", height: "78px", borderRadius: "0.25rem" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          color: "#111111",
          flexGrow: 1,
        }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
          {currentProduct?.title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "0.75rem",
              color: "#A3A3A3",
              alignSelf: "end",
            }}
          >
            {quantity} шт.
          </Typography>
          <Typography
            sx={{
              fontWeight: { xs: 400, md: 500 },
              fontSize: { xs: "0.75rem", md: "1rem" },
            }}
          >
            {currentProduct?.price} UAH
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopSalesProduct;
