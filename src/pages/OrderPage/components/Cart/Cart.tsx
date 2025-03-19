import React from "react";
import styles from "./Cart.module.css";
import OrderItem from "./CartItem";
import { Typography } from "@mui/material";
import { cartProduct } from "../../../../types";

interface CartProps {
  filteredCartProducts: cartProduct[];
  totalPrice: number;
}

const Cart: React.FC<CartProps> = ({ filteredCartProducts, totalPrice }) => {
  return (
    <div className={styles.orderWrapper}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>
          Ваше замовлення
          {filteredCartProducts.length > 0 && (
            <span className={styles.count}>{filteredCartProducts.length}</span>
          )}
        </p>
      </div>
      <div className={styles.ordersWrapper}>
        {filteredCartProducts.length > 0 ? (
          filteredCartProducts.map((product) => (
            <OrderItem key={product._id} {...product} />
          ))
        ) : (
          <Typography>Ваш кошик порожній</Typography>
        )}
      </div>
      <div className={styles.summaryPriceWrapper}>
        <p className={styles.summaryPriceTitle}>Загальна сума</p>
        <p className={styles.summaryPrice}>{totalPrice.toFixed(2)} uah</p>
      </div>
    </div>
  );
};

export default Cart;
