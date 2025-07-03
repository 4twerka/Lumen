import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BreadcrumbsAdminOrders from "../BreadcrumbsAdminPage/BreadcrumbsAdminOrders";
import Search from "../../../../components/Search";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarIcon from "../../../../assets/Calendar.svg?react";
import { Dayjs } from "dayjs";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { fetchAdminsOrders } from "../../../../store/slices/orderSlice";
import TableOrders from "./components/TableOrders/TableOrders";
// import TableOrderCustom from "./components/TableOrderCustom/TableOrderCustom";

const AdminOrders: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();
  const adminOrders = useAppSelector((state) => state.order.adminOrders);

  useEffect(() => {
    dispatch(fetchAdminsOrders());
  }, [dispatch]);

  const handleSetDate = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    setCurrentPage(1);
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
          display: { xs: "none", md: "block" },
        }}
      >
        Перелік замовлень
      </Typography>
      <Box
        sx={{
          pt: { xs: "1rem", md: "1.5rem" },
          pb: { xs: "1rem", md: "1.5rem" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Search
          id="order-search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClear={() => setSearchValue("")}
          sx={{ width: "60%", display: { xs: "none", md: "flex" } }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            color: "#111111",
            fontSize: "1rem",
            display: { xs: "block", md: "none" },
          }}
        >
          Перелік замовлень
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            slots={{ openPickerIcon: CalendarIcon }}
            sx={{ "& fieldset": { border: "none" }, width: "165px" }}
            value={selectedDate}
            onChange={handleSetDate}
            format="DD/MM/YY"
          />
        </LocalizationProvider>
      </Box>
      <Search
        id="order-search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onClear={() => setSearchValue("")}
        sx={{ width: "100%", display: { xs: "flex", md: "none" }, pb: "1rem" }}
      />
      {adminOrders.length > 0 && (
        <TableOrders
          searchValue={searchValue}
          selectedDate={selectedDate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {/* {adminOrders.length > 0 && <TableOrderCustom orders={filteredOrders} />} */}
    </Box>
  );
};

export default AdminOrders;
