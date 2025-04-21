import React, { useState } from "react";
import styles from "./Order.module.css";
import OrderStatus from "./OrderStatus";
import OrderSwiper from "./OrderSwiper";
import { Button, Link } from "@mui/material";
import PlusIcon from "../../../../assets/PlusOrder.svg?react";
import MinusIcon from "../../../../assets/MinusOrder.svg?react";
import { useAppSelector } from "../../../../hooks";

interface OrderProduct {
  productId: string;
  quantity: number;
  _id?: string;
}

interface OrderProps {
  amountOrder: number;
  deliveryCompanyId: string | null;
  firstName: string;
  phoneNumber: string;
  status: string;
  paymentMethod: string;
  products: OrderProduct[];
  lastName: string;
}

const Order: React.FC<OrderProps> = ({
  amountOrder,
  deliveryCompanyId,
  firstName,
  lastName,
  phoneNumber,
  status,
  products,
  paymentMethod,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowInfo = () => {
    setShowInfo((prev) => !prev);
  };
  const allProducts = useAppSelector((state) => state.products.products);
  const productsInfo = products
    .map((product) => {
      const foundProduct = allProducts.find(
        (item) => item._id === product.productId
      );
      if (!foundProduct) return null;
      return { productId: foundProduct?._id, image: foundProduct?.image[0] };
    })
    .filter(
      (item): item is { productId: string; image: string } => item !== null
    );

  return (
    <>
      <div className={`${styles.orderWrapper} ${styles.orderDesctop}`}>
        <div className={styles.orderTitle}>
          <h3 className={styles.order}>Замовлення № 3573</h3>
          <OrderStatus status={status} />
        </div>
        <div className={styles.detailsWrapper}>
          <p className={styles.details}>Створено: 07.04.2025</p>
          <p className={`${styles.details} ${styles.method}`}>
            Метод оплати:{" "}
            {paymentMethod === "card" ? "Картою Visa/Mastercard" : "Готівкою"}
          </p>
          <p className={styles.details}>
            Адреса пункту отримання: <br />
            <span className={styles.detailsWeight}>{deliveryCompanyId}</span>
          </p>
          <p className={styles.details}>
            Дані для отримання: <br />
            <span className={styles.detailsWeight}>
              {firstName} {lastName}
              <br />
              {phoneNumber}
            </span>
          </p>
          <p className={styles.details}>
            Коментар до замовлення: <br />
            <span className={styles.detailsWeight}>
              Прошу надіслати замовлення 9 квітня, дякую!
            </span>
          </p>
        </div>
        <div className={styles.swiperWrapper}>
          <OrderSwiper productsInfo={productsInfo} />
          <div className={styles.priceWrapper}>
            <p className={`${styles.detailsWeight} ${styles.price}`}>
              Загальна сума
              <br />
              {amountOrder.toFixed(2)}
            </p>
            <Button
              sx={{
                textTransform: "none",
                fontSize: { xs: "0.75rem", md: "1rem" },
                fontWeight: { xs: 400, md: 600 },
              }}
            >
              Детальніше
            </Button>
          </div>
        </div>
      </div>
      <div className={`${styles.orderWrapper} ${styles.orderMobile}`}>
        <div className={styles.orderTitle}>
          <div className={styles.orderTitleInner}>
            <h3 className={styles.order}>Замовлення № 3573</h3>
            <p className={styles.details}>Створено: 07.04.2025</p>
          </div>
          <OrderStatus status={status} />
        </div>
        <Link
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            fontSize: { xs: "0.75rem", md: "1rem" },
            mt: "14px",
            mb: "14px",
            display: "inline-block",
            fontWeight: { xs: 400, md: 600 },
          }}
        >
          Детальніше
        </Link>
        <OrderSwiper productsInfo={productsInfo} />
        <div onClick={handleShowInfo} className={styles.infoWrapper}>
          <h3 className={styles.order}>Інформація</h3>
          {showInfo ? <MinusIcon /> : <PlusIcon />}
        </div>
        {showInfo && (
          <div className={styles.detailsWrapperMobile}>
            <p className={`${styles.details} ${styles.method}`}>
              Метод оплати: <br />
              <span className={styles.detailsWeight}>
                {paymentMethod === "card"
                  ? "Картою Visa/Mastercard"
                  : "Готівкою"}
              </span>
            </p>
            <p className={styles.details}>
              Адреса пункту отримання: <br />
              <span className={styles.detailsWeight}>{deliveryCompanyId}</span>
            </p>
            <p className={styles.details}>
              Дані для отримання: <br />
              <span className={styles.detailsWeight}>
                {firstName} {lastName}
                <br />
                {phoneNumber}
              </span>
            </p>
            <p className={styles.details}>
              Коментар до замовлення: <br />
              <span className={styles.detailsWeight}>
                Прошу надіслати замовлення 9 квітня, дякую!
              </span>
            </p>
            <p className={styles.details}>
              Загальна сума: <br />
              <span className={styles.detailsWeight}>
                {amountOrder.toFixed(2)}
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Order;
