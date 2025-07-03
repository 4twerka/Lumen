import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import styles from "./TableOrderCustom.module.css";
import { AdminOrder, OrderStatus } from "../../../../../../types";
import { formatDate } from "../../helpers/formatDate";
import { getNextAvailableStatuses } from "../../helpers/getNextAvailableStatuses";
import OrderSelect from "../OrderSelect";
import OrderNoSelect from "../OrderNoSelect";

interface TableOrderCustomProps {
  orders: AdminOrder[];
}

const TableOrderCustom: React.FC<TableOrderCustomProps> = ({ orders }) => {
  return (
    <Box className={styles.tableWrapper}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography className={styles.head}>№ замовлення</Typography>
        <Typography className={styles.head}>Покупець</Typography>
        <Typography className={styles.head}>Дата</Typography>
        <Typography className={styles.head}>Продукт</Typography>
        <Typography className={styles.head}>Сума</Typography>
        <Typography className={styles.head}>Статус</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: "1.5rem",
          //   "& div": {
          //     borderBottom: "1px solid #A3A3A3",
          //   },
          //   "&:last-of-type div": {
          //     borderBottom: "none",
          //   },
        }}
      >
        {orders.map((order) => {
          const nextStatuses = getNextAvailableStatuses(
            order.status as keyof typeof OrderStatus
          );
          return (
            <>
              <Box sx={{ display: "flex", width: "100%", justifyContent: 'space-evenly', '& *': {flexGrow: 1} }}>
                <Typography className={styles.body}>{order.code}</Typography>
                <Typography className={styles.body}>
                  {order.firstName} {order.lastName}
                </Typography>
                <Typography className={styles.body}>
                  {formatDate(order.created)}
                </Typography>
                <Typography className={styles.body}>Product name</Typography>
                <Typography className={styles.body}>
                  {order.amountOrder}
                </Typography>
                <Box>
                  {nextStatuses.length > 0 ? (
                    <OrderSelect
                      id={order._id}
                      nextStatuses={nextStatuses}
                      status={order.status}
                    />
                  ) : (
                    <OrderNoSelect status={order.status} />
                  )}
                </Box>
              </Box>
              <Divider />
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default TableOrderCustom;
