import React from "react";
import styles from "./CartItem.module.css";
import AddIcon from "../../../../assets/Plus.svg?react";
import RemoveIcon from "../../../../assets/Minus.svg?react";
import CancelIcon from "../../../../assets/Cancel.svg?react";
import { SUPABASE_PRODUCT_URL_PART } from "../../../../constants";
import { useAppDispatch } from "../../../../hooks";
import { addCart, decreaseCart, deleteCart } from "../../../../store/slices/productSlice";

interface CartItemProps {
  image: string[];
  title: string;
  price: number;
  quantity: number;
  _id: string
}

const CartItem: React.FC<CartItemProps> = ({ image, title, price, quantity, _id }) => {

    const dispatch = useAppDispatch();

  return (
    <div className={styles.orderItemWrapper}>
      <img
        className={styles.orderImg}
        src={`${SUPABASE_PRODUCT_URL_PART}${image[0]}`}
        alt={title}
      />
      <div className={styles.orderInfoWrapper}>
        <p className={styles.orderTitle}>{title}</p>
        <div className={styles.orderInfoBottom}>
          <p className={styles.orderPrice}>{price} UAH</p>
          <div className={styles.orderQuantity}>
            <span onClick={() => dispatch(decreaseCart(_id))} className={styles.icon}>
              <RemoveIcon />
            </span>
            <span className={styles.orderQuantityCount}>{quantity}</span>
            <span onClick={() => dispatch(addCart(_id))} className={`${styles.add} ${styles.icon}`}>
              <AddIcon />
            </span>
          </div>
        </div>
      </div>
      <CancelIcon onClick={() => dispatch(deleteCart(_id))} className={styles.cencelBtn} />
    </div>
  );
};

export default CartItem;
