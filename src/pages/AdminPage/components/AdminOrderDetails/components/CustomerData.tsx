import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderDetailsTitle from "./OrderDetailsTitle";
import UserIcon from "../../../../../assets/User.svg?react";
import EmailIcon from "../../../../../assets/Letter.svg?react";
import PhoneIcon from "../../../../../assets/Phone.svg?react";
import OrderDetailsDesc from "./OrderDetailsDesc";
import OrderDetailsSubtitle from "./OrderDetailsSubtitle";
import { AdminOrder } from "../../../../../types";
import styles from "../AdminOrderDetails.module.css";
import { useAppDispatch } from "../../../../../hooks";
import { getUserInfoById } from "../../../../../store/slices/userSlice";
import PaidRegisterStatus from "./PaidStatus";

const CustomerData: React.FC<AdminOrder> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  paymentMethod,
  isPaid,
  userId,
}) => {
  const dispatch = useAppDispatch();
  const [isRegister, setIsRegister] = useState(false);
  useEffect(() => {
    if (userId) {
      dispatch(getUserInfoById(userId))
        .unwrap()
        .then((data) => data && setIsRegister(true))
        .catch((err) => err && setIsRegister(false));
    }
  }, [dispatch, userId]);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "30%" },
        border: "1px solid #A3A3A3",
        borderRadius: "0.5rem",
        p: "1rem",
        display: "flex",
        flexDirection: { sx: "row", md: "column" },
        justifyContent: "space-between",
        gap: { xs: 0, md: "1.5rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1rem", md: "1.5rem" },
          justifyContent: "space-between",
        }}
      >
        <OrderDetailsTitle>Дані клієнта</OrderDetailsTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <UserIcon className={styles.icon} />
            <OrderDetailsDesc>
              {firstName} {lastName}
            </OrderDetailsDesc>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <EmailIcon className={styles.icon} />
            <OrderDetailsDesc>{email}</OrderDetailsDesc>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <PhoneIcon className={styles.icon} />
            <OrderDetailsDesc>{phoneNumber}</OrderDetailsDesc>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "column" },
          gap: { xs: "1rem", md: "1.5rem" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <OrderDetailsSubtitle>Тип клієнта</OrderDetailsSubtitle>
          <PaidRegisterStatus
            value={isRegister}
            trueLabel="Зареєстрований"
            falseLabel="Не зареєстрований"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <OrderDetailsSubtitle>Платіжна інформація</OrderDetailsSubtitle>
          <OrderDetailsDesc>
            {paymentMethod === "cash" ? "Готівка" : "Карткою"}
          </OrderDetailsDesc>
          <PaidRegisterStatus
            value={isPaid}
            trueLabel="Сплачено"
            falseLabel="Не сплачено"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerData;
