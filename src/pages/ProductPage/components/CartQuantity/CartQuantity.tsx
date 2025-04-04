import React from "react";
import styles from "./CartQuantity.module.css";
import AddIcon from "../../../../assets/Plus.svg?react";
import RemoveIcon from "../../../../assets/Minus.svg?react";

interface CartQuantityProps {
  quantity: number;
}

const CartQuantity: React.FC<CartQuantityProps> = ({ quantity }) => {
  return (
    <div className={styles.cartQuantity}>
      <span onClick={() => console.log("add to cart")} className={styles.icon}>
        <RemoveIcon />
      </span>
      <span className={styles.orderQuantityCount}>{quantity}</span>
      <span
        onClick={() => console.log("remove from cart")}
        className={`${styles.add} ${styles.icon}`}
      >
        <AddIcon />
      </span>
    </div>
  );
};

export default CartQuantity;
