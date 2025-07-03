import { Box } from "@mui/material";
import React from "react";
import OrderDetailsTitle from "./OrderDetailsTitle";
import TableProducts from "./TableProducts";
import { useAppSelector } from "../../../../../hooks";
import { AdminOrder } from "../../../../../types";

const CustomerProducts: React.FC<AdminOrder> = ({ products }) => {
  const allProducts = useAppSelector((state) => state.products.products);

  const userProductsInfo = allProducts
    .filter((product) =>
      products.some((userProduct) => userProduct.productId === product._id)
    )
    .map((product) => {
      const userProduct = products.find((p) => p.productId === product._id);
      return {
        ...product,
        quantity: userProduct?.quantity || 0,
      };
    });

  return (
    <Box
      sx={{
        border: "1px solid #A3A3A3",
        borderRadius: "0.5rem",
        p: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <OrderDetailsTitle>Замовлені товари</OrderDetailsTitle>
      <Box>
        <TableProducts userProductsInfo={userProductsInfo} />
      </Box>
    </Box>
  );
};

export default CustomerProducts;
