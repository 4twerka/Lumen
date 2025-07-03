import { Typography } from "@mui/material";
import React from "react";

const OrderDetailsTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Typography
      component={"h3"}
      sx={{
        color: "#111111",
        fontWeight: { xs: 500, md: 600 },
        fontSize: { xs: "1rem", md: "1.5rem" },
        lineHeight: { xs: "100%", md: "150%" },
      }}
    >
      {children}
    </Typography>
  );
};

export default OrderDetailsTitle;
