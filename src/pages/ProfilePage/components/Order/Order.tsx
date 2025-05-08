import React, { useState } from "react";
import styles from "./Order.module.css";
import OrderStatus from "./OrderStatus";
import OrderSwiper from "./OrderSwiper";
import { Button } from "@mui/material";
import PlusIcon from "../../../../assets/PlusOrder.svg?react";
import MinusIcon from "../../../../assets/MinusOrder.svg?react";
import { useAppSelector } from "../../../../hooks";
import OrderDrawer from "./OrderDrawer";
import { highLightMatchText } from "../../../../utils/highLightMatchText";

interface OrderProduct {
  productId: string;
  quantity: number;
  _id?: string;
}

interface OrderProps {
  amountOrder: number;
  delivery: {
    method: "self_pickup" | "nova_post";
    address: {
      city: string;
      department: string;
    };
  };
  firstName: string;
  phoneNumber: string;
  status: "processing" | "accepted" | "sent" | "received" | "canceled";
  paymentMethod: "cash" | "online payment";
  products: OrderProduct[];
  lastName: string;
  created: string;
  code: string;
  notes?: string;
  _id: string;
  search?: string;
}

const Order: React.FC<OrderProps> = ({
  amountOrder,
  delivery,
  created,
  code,
  firstName,
  lastName,
  phoneNumber,
  status,
  products,
  paymentMethod,
  notes,
  _id,
  search
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
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
      return {
        productId: foundProduct?._id,
        image: foundProduct?.image[0],
        title: foundProduct?.title,
        price: foundProduct.price,
        quantity: product.quantity,
      };
    })
    .filter(
      (
        item
      ): item is {
        productId: string;
        image: string;
        price: number;
        title: string;
        quantity: number;
      } => item !== null
    );
  const deliveryAdress =
    delivery.method === "nova_post"
      ? `Нова Пошта ${delivery.address.department}, ${delivery.address.city}`
      : `сомовивіз з магазину ${delivery.address.department}, ${delivery.address.city}`;
  const date = new Date(created).toLocaleDateString("uk-UA");
  const payment =
    paymentMethod === "cash" ? "Картою Visa/Mastercard" : "Готівкою";
  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };
  const handleOpenDrawer = () => {
    setShowDrawer(true);
  };
    
  return (
    <>
      <div className={`${styles.orderWrapper} ${styles.orderDesctop}`}>
        <div className={styles.orderTitle}>
          <h3 className={styles.order}>Замовлення № {highLightMatchText(code, search || '')}</h3>
          <OrderStatus status={status} />
        </div>
        <div className={styles.detailsWrapper}>
          <p className={styles.details}>Створено: {date}</p>
          <p className={`${styles.details} ${styles.method}`}>
            Метод оплати: {payment}
          </p>
          <p className={styles.details}>
            Адреса пункту отримання: <br />
            <span className={styles.detailsWeight}>{deliveryAdress}</span>
          </p>
          <p className={styles.details}>
            Дані для отримання: <br />
            <span className={styles.detailsWeight}>
              {highLightMatchText(`${firstName} ${lastName}`, search || '')}
              <br />
              {highLightMatchText(phoneNumber, search || '')}
            </span>
          </p>
          <p className={styles.details}>
            Коментар до замовлення: <br />
            <span className={styles.detailsWeight}>{notes}</span>
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
              onClick={handleOpenDrawer}
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
            <h3 className={styles.order}>Замовлення № {code}</h3>
            <p className={styles.details}>Створено: {date}</p>
          </div>
          <OrderStatus status={status} />
        </div>
        <Button
          onClick={handleOpenDrawer}
          sx={{
            textTransform: "none",
            fontSize: { xs: "0.75rem", md: "1rem" },
            fontWeight: { xs: 400, md: 600 },
            left: "-8px",
          }}
        >
          Детальніше
        </Button>
        <OrderSwiper productsInfo={productsInfo} />
        <div onClick={handleShowInfo} className={styles.infoWrapper}>
          <h3 className={styles.order}>Інформація</h3>
          {showInfo ? <MinusIcon /> : <PlusIcon />}
        </div>
        {showInfo && (
          <div className={styles.detailsWrapperMobile}>
            <p className={`${styles.details} ${styles.method}`}>
              Метод оплати: <br />
              <span className={styles.detailsWeight}>{payment}</span>
            </p>
            <p className={styles.details}>
              Адреса пункту отримання: <br />
              <span className={styles.detailsWeight}>{deliveryAdress}</span>
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
              <span className={styles.detailsWeight}>{notes}</span>
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
      <OrderDrawer
        amountOrder={amountOrder}
        handleCloseDrawer={handleCloseDrawer}
        productsInfo={productsInfo}
        showDrawer={showDrawer}
        id={_id}
      />
    </>
  );
};

export default Order;
