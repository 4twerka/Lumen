import { Box, Typography } from "@mui/material";
import React from "react";
import { AdminOrder, OrderStatus } from "../../../../../../types";
import { formatDate } from "../../helpers/formatDate";
import OrderSelect from "../OrderSelect";
import OrderNoSelect from "../OrderNoSelect";
import { getNextAvailableStatuses } from "../../helpers/getNextAvailableStatuses";
import { Link } from "react-router";

type OrderMobileProps = {
  order: Pick<
    AdminOrder,
    | "_id"
    | "firstName"
    | "lastName"
    | "created"
    | "code"
    | "amountOrder"
    | "status"
  >;
};

const typographyStyle = {
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  opacity: "0.8",
  color: "#111111",
};

const OrderMobile: React.FC<OrderMobileProps> = ({ order }) => {
  const { _id, firstName, lastName, created, code, status } = order;
  const formattedDate = formatDate(created);
  const nextStatuses = getNextAvailableStatuses(
    status as keyof typeof OrderStatus
  );
  return (
    <Box
      sx={{
        padding: "1rem 0",
      }}
    >
      <Box
        sx={{
          padding: "1rem 0.5rem",
          borderRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "21px",
          textDecoration: "none",
          "&:hover": {
            backgroundColor: "#73270D1F",
          },
        }}
        to={`/admin/order/${_id}`}
        component={Link}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& > *": typographyStyle,
          }}
        >
          <Typography sx={typographyStyle}>
            {firstName} {lastName}
          </Typography>
          <Typography>{formattedDate}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={typographyStyle}>{code}</Typography>
          {nextStatuses.length > 0 ? (
            <OrderSelect id={_id} nextStatuses={nextStatuses} status={status} />
          ) : (
            <OrderNoSelect status={status} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default OrderMobile;
