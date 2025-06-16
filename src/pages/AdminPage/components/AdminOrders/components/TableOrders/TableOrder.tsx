import React from "react";
import styles from "./TableOrders.module.css";
import { OrderStatus } from "../../../../../../types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AdminOrder } from "../../../../../../types";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks";
import { changeOrderStatusById } from "../../../../../../store/slices/orderSlice";
import { MenuItem, Select } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

type TableOrderProps = {
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

const statusColors = {
  processing: "#f5c24c",
  accepted: "#f5c24c",
  delivered: "#68c3f5",
  received: "#b5b5b5",
  canceled: "#e94f4f",
  "on the way": "blue",
  return: "red",
};

const getNextAvailableStatuses = (
  currentStatus: keyof typeof OrderStatus
): (keyof typeof OrderStatus)[] => {
  switch (currentStatus) {
    case "processing":
      return ["accepted", "canceled"];
    case "accepted":
      return ["on the way", "canceled"];
    case "on the way":
      return ["delivered", "canceled"];
    case "delivered":
      return ["received", "return", "canceled"];
    default:
      return [];
  }
};

const TableOrder: React.FC<TableOrderProps> = ({ order }) => {
  const { _id, firstName, lastName, created, code, amountOrder, status } =
    order;
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.order.isLoading);

  const handleChangeStatus = (status: keyof typeof OrderStatus) => {
    dispatch(changeOrderStatusById({ id: _id, status: status }));
  };

  const nextStatuses = getNextAvailableStatuses(
    status as keyof typeof OrderStatus
  );

  const date = new Date(created);
  const formattedDate = date.toLocaleDateString("uk-UA").slice(0, -4) + date.toLocaleDateString("uk-UA").slice(-2);

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td style={{width: '150px'}}>{code}</td>
      <td>
        {firstName}' '{lastName}
      </td>
      <td>{formattedDate}</td>
      <td>Product name</td>
      <td style={{width: '115px'}}>{amountOrder} ₴</td>
      <td>
        {nextStatuses.length > 0 ? (
          <Select
            sx={{
              width: "200px",
              "& .MuiSelect-select": { padding: "12px 16px" },
            }}
            value={status}
            onChange={(e) =>
              handleChangeStatus(e.target.value as keyof typeof OrderStatus)
            }
            inputProps={{ "aria-label": "Change order status" }}
            renderValue={(selected) =>
              isLoading ? (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <CircularProgress size={20} />
                  <span>Зміна статусу...</span>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    height: "24px",
                  }}
                >
                  <span
                    className={styles.statusDot}
                    style={{
                      backgroundColor:
                        statusColors[selected as keyof typeof OrderStatus],
                    }}
                  />
                  <span>
                    {OrderStatus[selected as keyof typeof OrderStatus]}
                  </span>
                </div>
              )
            }
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem value={status} disabled>
              <span>{OrderStatus[status]}</span>
            </MenuItem>
            {nextStatuses.map((status) => (
              <MenuItem key={status} value={status} title={OrderStatus[status]}>
                {OrderStatus[status as keyof typeof OrderStatus]}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderRadius: "0.5rem",
              border: "1px solid #666666",
              width: "200px",
              padding: "12px 16px",
            }}
          >
            <span
              className={styles.statusDot}
              style={{
                backgroundColor:
                  statusColors[status as keyof typeof OrderStatus],
              }}
            />
            <span>{OrderStatus[status as keyof typeof OrderStatus]}</span>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableOrder;
