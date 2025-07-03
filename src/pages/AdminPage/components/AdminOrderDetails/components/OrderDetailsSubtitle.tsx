import { Typography } from "@mui/material";
import React from "react";

const OrderDetailsSubtitle: React.FC<{ children: string }> = ({
  children,
}) => {
  return (
    <Typography
      sx={{
        color: "#A3A3A3",
        fontWeight: 400,
        fontSize: { xs: "0.875rem", md: "0.75rem" },
      }}
    >
      {children}
    </Typography>
  );
};

export default OrderDetailsSubtitle;
