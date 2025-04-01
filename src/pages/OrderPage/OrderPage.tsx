import { Box } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import Form from "./components/Form/Form/Form";
import Cart from "./components/Cart/Cart";
import styles from "./OrderPage.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchProducts } from "../../store/slices/productSlice";

const OrderPage: React.FC = () => {
  const products = useAppSelector((state) => state.products.products);
  const cartProducts = useAppSelector((state) => state.products.carts);
  const dispatch = useAppDispatch();
  const cartMap = useMemo(() => {
    return new Map(cartProducts.map((item) => [item.productId, item.quantity]));
  }, [cartProducts]);

  const filteredCartProducts = useMemo(() => {
    return products
      .filter((product) => cartMap.has(product._id))
      .map((product) => ({
        ...product,
        quantity: cartMap.get(product._id) || 0,
      }));
  }, [products, cartMap]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const totalPrice = filteredCartProducts.reduce((total, cartItem) => {
    total += cartItem.price * cartItem.quantity;
    return total;
  }, 0);
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        display: "flex",
        width: "100%",
        padding: { xs: "16px 16px", md: "80px 80px" },
        gap: "1.25rem",
        backgroundColor: "#FCFCFC",
      }}
    >
      <div className={styles.formWrapper}>
        <Form />
      </div>
      <div className={styles.orderWrapper}>
        <Cart
          totalPrice={totalPrice}
          filteredCartProducts={filteredCartProducts}
        />
      </div>
    </Box>
  );
};

export default OrderPage;
