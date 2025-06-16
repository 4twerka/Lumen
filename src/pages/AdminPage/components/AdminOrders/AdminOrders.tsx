import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import BreadcrumbsAdminOrders from "../BreadcrumbsAdminPage/BreadcrumbsAdminOrders";
import Search from "../../../../components/Search";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarIcon from "../../../../assets/Calendar.svg?react";
import dayjs, { Dayjs } from "dayjs";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { fetchAdminsOrders } from "../../../../store/slices/orderSlice";
import TableOrders from "./components/TableOrders/TableOrders";

const AdminOrders: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const dispatch = useAppDispatch();
  const adminOrders = useAppSelector((state) => state.order.adminOrders);
  const filteredOrders = useMemo(() => {
    return adminOrders.filter((order) => {
      const searchLower = searchValue.toLowerCase();
      const code = order.code ?? "";
      const matchesSearch =
        order.firstName.toLowerCase().includes(searchLower) ||
        order.lastName.toLowerCase().includes(searchLower) ||
        code.toLowerCase().includes(searchLower);

      const orderDate = dayjs(order.created);

      const matchesDate = selectedDate
        ? orderDate.isSame(selectedDate, "day")
        : true;

      return matchesSearch && matchesDate;
    });
  }, [searchValue, selectedDate, adminOrders]);

  useEffect(() => {
    dispatch(fetchAdminsOrders());
  }, [dispatch]);

  const handleSetDate = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  return (
    <Box>
      <BreadcrumbsAdminOrders />
      <Typography
        component={"h3"}
        sx={{
          fontWeight: 600,
          fontSize: "1.5rem",
          lineHeight: "150%",
          pt: "1.5rem",
          color: "#111111",
        }}
      >
        Перелік замовлень
      </Typography>
      <Box
        sx={{
          pt: "1.5rem",
          pb: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Search
          id="order-search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClear={() => setSearchValue("")}
          sx={{ width: "60%" }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            slots={{ openPickerIcon: CalendarIcon }}
            sx={{ "& fieldset": { border: "none" }, width: "175px" }}
            value={selectedDate}
            onChange={handleSetDate}
            format="DD/MM/YY"
          />
        </LocalizationProvider>
      </Box>
      {adminOrders.length > 0 && <TableOrders orders={filteredOrders} />}
    </Box>
  );
};

export default AdminOrders;
