import React from "react";
import styles from "./CartQuantity.module.css";
import AddIcon from "../../../../assets/Plus.svg?react";
import RemoveIcon from "../../../../assets/Minus.svg?react";
import { useAppDispatch } from "../../../../hooks";
import { addCart, decreaseCart, deleteCart } from "../../../../store/slices/productSlice";

interface CartQuantityProps {
  quantity: number;
  id: string;
}

const CartQuantity: React.FC<CartQuantityProps> = ({ quantity, id }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addCart(id))
  }
  const handleDecreaseCart = () => {
    if (quantity === 1) {
      dispatch(deleteCart(id))
    } else {
      dispatch(decreaseCart(id))
    }
  }
  return (
    <div className={styles.cartQuantity}>
      <span onClick={handleDecreaseCart} className={styles.icon}>
        <RemoveIcon />
      </span>
      <span className={styles.orderQuantityCount}>{quantity}</span>
      <span
        onClick={handleAddToCart}
        className={`${styles.add} ${styles.icon}`}
      >
        <AddIcon />
      </span>
    </div>
  );
};

export default CartQuantity;
