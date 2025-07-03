import { Box, Button } from "@mui/material";
import React from "react";
import OrderDetailsTitle from "./OrderDetailsTitle";
import EditIcon from "../../../../../assets/Edit.svg?react";
import styles from "../AdminOrderDetails.module.css";
import OrderDetailsSubtitle from "./OrderDetailsSubtitle";
import OrderDetailsDesc from "./OrderDetailsDesc";
import { AdminOrder } from "../../../../../types";

interface DeliveryDataProps {
  adminOrder: AdminOrder;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeliveryData: React.FC<DeliveryDataProps> = ({
  adminOrder,
  setIsEditMode,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #A3A3A3",
        borderRadius: "0.5rem",
        p: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        flexGrow: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <OrderDetailsTitle>Дані отримувача і доставки </OrderDetailsTitle>
        <Button
          variant="outlined"
          onClick={() => setIsEditMode(true)}
          sx={{
            border: "none",
            color: "#73270D",
            display: "flex",
            gap: "0.25rem",
            alignItems: "center",
            height: { xs: "40px", md: "48px" },
            textTransform: "none",
            fontWeight: { xs: 500, md: 600 },
            fontSize: "1rem",
          }}
        >
          <EditIcon className={styles.icon} />
          Редагувати
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: "1.5rem",
            flexDirection: "column",
          }}
        >
          <Box>
            <OrderDetailsSubtitle>Ім’я</OrderDetailsSubtitle>
            <OrderDetailsDesc>{adminOrder.firstName}</OrderDetailsDesc>
          </Box>
          <Box>
            <OrderDetailsSubtitle>
              Адреса електронної пошти
            </OrderDetailsSubtitle>
            <OrderDetailsDesc>{adminOrder.email}</OrderDetailsDesc>
          </Box>
          <Box>
            <OrderDetailsSubtitle>Місто</OrderDetailsSubtitle>
            <OrderDetailsDesc>
              {adminOrder.delivery.address.city}
            </OrderDetailsDesc>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: "1.5rem",
            flexDirection: "column",
          }}
        >
          <Box>
            <OrderDetailsSubtitle>Прізвище</OrderDetailsSubtitle>
            <OrderDetailsDesc>{adminOrder.lastName}</OrderDetailsDesc>
          </Box>
          <Box>
            <OrderDetailsSubtitle>Номер телефону</OrderDetailsSubtitle>
            <OrderDetailsDesc>{adminOrder.phoneNumber}</OrderDetailsDesc>
          </Box>
          <Box>
            <OrderDetailsSubtitle>
              {adminOrder.delivery.method === 'self_pickup' ? 'Магазин №' : '№ Відділення Нової Пошти'}
            </OrderDetailsSubtitle>
            <OrderDetailsDesc>
              {adminOrder.delivery.address.department}
            </OrderDetailsDesc>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeliveryData;
