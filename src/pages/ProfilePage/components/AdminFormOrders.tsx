import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";
import { OrderStatus } from "../../../types";
import ClearIcon from "@mui/icons-material/Clear";

interface AdminFormOrdersProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  sortDate: "old" | "new" | "";
  setSortDate: React.Dispatch<React.SetStateAction<"" | "old" | "new">>;
  sortStatus: keyof typeof OrderStatus | "";
  setSortStatus: React.Dispatch<
    React.SetStateAction<keyof typeof OrderStatus | "">
  >;
}

const AdminFormOrders: React.FC<AdminFormOrdersProps> = ({
  searchValue,
  setSearchValue,
  sortDate,
  setSortDate,
  sortStatus,
  setSortStatus,
}) => {
  return (
    <Box
      sx={{
        paddingBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <FormControl sx={{ width: "50%" }} variant="outlined">
        <InputLabel id={"order-search"}>Search</InputLabel>
        <OutlinedInput
          autoComplete="off"
          id="order-search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setSearchValue("")} edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Search"
        />
      </FormControl>
      <Box sx={{ flexGrow: 1, display: "flex", gap: "1rem" }}>
        <FormControl sx={{ width: "50%" }}>
          <InputLabel id="order-date">Date</InputLabel>
          <Select
            labelId="order-date"
            id="order-date"
            value={sortDate}
            label="Date"
            onChange={(e) => setSortDate(e.target.value as "old" | "new" | "")}
          >
            <MenuItem value="">
              <em>Очистити фільтр</em>
            </MenuItem>
            <MenuItem value="new">Найновіші</MenuItem>
            <MenuItem value="old">Найстаріші</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "50%" }}>
          <InputLabel id="order-status">Status</InputLabel>
          <Select
            labelId="order-status"
            id="order-status"
            value={sortStatus}
            label="Status"
            onChange={(e) =>
              setSortStatus(e.target.value as keyof typeof OrderStatus)
            }
          >
            <MenuItem value="">
              <em>Очистити фільтр</em>
            </MenuItem>
            {Object.entries(OrderStatus).map(([key, value]) => (
              <MenuItem key={value} value={key}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AdminFormOrders;
