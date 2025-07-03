import { Typography } from "@mui/material";
import React from "react";

const OrderDetailsDesc: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      sx={{
        color: "#111111",
        fontWeight: 400,
        fontSize: { xs: "0.75rem", md: "1rem" },
      }}
    >
      {children}
    </Typography>
  );
};

export default OrderDetailsDesc;
