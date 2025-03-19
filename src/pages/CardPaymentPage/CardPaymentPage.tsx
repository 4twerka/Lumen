import { Box, Typography } from "@mui/material";
import React from "react";
import SubTitle from "./SubTitle";
import GoogleIcon from "../../assets/Google.svg?react";
import CardForm from "./CardForm";
import ButtonBorderGreen from "../../components/ButtonBorderGreen";

const CardPaymentPage:React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 0",
      }}
    >
      <Box
        sx={{
          maxWidth: "628px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.5rem",
            color: "#1C1917",
            fontWeight: 600,
            lineHeight: "2.25rem",
          }}
        >
          Payment Details
        </Typography>
        <SubTitle subtitle="Замовлення:" text="#671047 Олена Пінчук" />
        <SubTitle subtitle="Загальна сума:" text="1390 UAH" />
        <ButtonBorderGreen>
          <GoogleIcon />
            Pay
        </ButtonBorderGreen>
        <CardForm />
      </Box>
    </Box>
  );
};

export default CardPaymentPage;
