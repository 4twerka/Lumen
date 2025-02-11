import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import RatingSvg from "../../../assets/Raiting.svg?react";
import PriceDownSvg from "../../../assets/PriceDown.svg?react";
import PriceUpSvg from "../../../assets/PriceUp.svg?react";
import NewSvg from "../../../assets/New.svg?react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FilterSelectProps {
  filter: string;
  setFilter: React.Dispatch<
    React.SetStateAction<"asc" | "desc" | "rating" | "new">
  >;
}

const menuItemStyles = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const CustomExpandMoreIcon: React.FC = (props) => (
  <ExpandMoreIcon {...props} sx={{ fontSize: 32, fill: "#111111" }} /> // Змінюємо розмір
);

const FilterSelect: React.FC<FilterSelectProps> = ({ filter, setFilter }) => {
  const handleChange = (e: SelectChangeEvent) =>
    setFilter(e.target.value as "asc" | "desc" | "rating" | "new");

  return (
    <Select
      sx={{ width: "196px", height: "48px" }}
      value={filter}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      IconComponent={CustomExpandMoreIcon}
      renderValue={(value) => {
        switch (value) {
          case "rating":
            return "За рейтингом";
          case "asc":
            return "Від найдешевших";
          case "desc":
            return "Від найдорожчих";
          case "new":
            return "Новинки";
        }
      }}
    >
      <MenuItem sx={menuItemStyles} value={"rating"}>
        <RatingSvg />
        За рейтингом
      </MenuItem>
      <MenuItem sx={menuItemStyles} value={"asc"}>
        <PriceDownSvg />
        Від найдешевших
      </MenuItem>
      <MenuItem sx={menuItemStyles} value={"desc"}>
        <PriceUpSvg />
        Від найдорожчих
      </MenuItem>
      <MenuItem sx={menuItemStyles} value={"new"}>
        <NewSvg />
        Новинки
      </MenuItem>
    </Select>
  );
};

export default FilterSelect;
