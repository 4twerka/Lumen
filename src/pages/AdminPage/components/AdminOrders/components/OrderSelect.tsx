import {
  CircularProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { AdminOrder, OrderStatus } from "../../../../../types";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import { changeOrderStatusById } from "../../../../../store/slices/orderSlice";
import { statusColors } from "../helpers/constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface OrderSelectProps {
  nextStatuses: (
    | "processing"
    | "accepted"
    | "delivered"
    | "received"
    | "canceled"
    | "on the way"
    | "return"
  )[];
  status: AdminOrder["status"];
  id: string;
}

const OrderSelect: React.FC<OrderSelectProps> = ({
  nextStatuses,
  status,
  id,
}) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.order.isLoading);

  const handleChangeStatus = (status: keyof typeof OrderStatus) => {
    dispatch(changeOrderStatusById({ id, status }));
  };
  return (
    <Select
      sx={{
        width: "200px",
        borderRadius: '0.5rem',
        "& .MuiSelect-select": { padding: "12px 16px" },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#2E2E2E",
        },
        backgroundColor: '#FCFCFC'
      }}
      value={status}
      onClick={(e) => e.stopPropagation()}
      onChange={(e: SelectChangeEvent) =>
        handleChangeStatus(e.target.value as keyof typeof OrderStatus)
      }
      inputProps={{ "aria-label": "Change order status" }}
      renderValue={(selected) =>
        isLoading ? (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <CircularProgress size={20} />
            <span>Loading...</span>
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
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor:
                  statusColors[selected as keyof typeof OrderStatus],
              }}
            />
            <span>{OrderStatus[selected as keyof typeof OrderStatus]}</span>
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
  );
};

export default OrderSelect;
