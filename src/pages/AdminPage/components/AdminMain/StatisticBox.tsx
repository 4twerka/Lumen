import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import CartIcon from "../../../../assets/Cart.svg?react";

interface StatisticBoxProps {
  title: string;
  count: number;
  price: number;
  sx?: SxProps<Theme>;
}

const StatisticBox: React.FC<StatisticBoxProps> = ({
  title,
  count,
  price,
  sx,
}) => {
  return (
    <Box
      sx={{
        padding: "1rem",
        backgroundColor: "#F1F1F4",
        borderRadius: "0.5rem",
        width: { xs: "calc(100%/2 - 0.75rem)", md: "calc(100%/3)" },
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        color: "#111111",
        ...sx,
      }}
    >
      <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
        {title}
      </Typography>
      <Typography sx={{ fontWeight: 400, fontSize: "0.875rem" }}>
        {count} шт.
      </Typography>
      <Box sx={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
        <CartIcon />
        <Typography sx={{ fontWeight: 400, fontSize: "1rem" }}>
          {price.toFixed(2)} ₴
        </Typography>
      </Box>
    </Box>
  );
};

export default StatisticBox;
