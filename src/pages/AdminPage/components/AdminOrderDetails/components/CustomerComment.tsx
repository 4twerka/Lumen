import { Box } from "@mui/material";
import React from "react";
import OrderDetailsTitle from "./OrderDetailsTitle";
import { AdminOrder } from "../../../../../types";
import OrderDetailsDesc from "./OrderDetailsDesc";

const CustomerComment:React.FC<AdminOrder> = ({notes}) => {
  return (
    <Box
      sx={{
        border: "1px solid #A3A3A3",
        borderRadius: "0.5rem",
        p: "1rem",
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}
    >
        <OrderDetailsTitle>Коментар до замовлення</OrderDetailsTitle>
        <OrderDetailsDesc>{notes.length > 0 ? notes : 'Відсутній'}</OrderDetailsDesc>
    </Box>
  );
};

export default CustomerComment;
