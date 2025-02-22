import { Box, IconButton } from "@mui/material";
import React from "react";
import ArrowLeftIcon from "../../../assets/Arrow Left.svg?react";
import FilterButtonMob from "./FilterButtonMob";
import FilterIcon from "../../../assets/Filters.svg?react";
import SortIcon from "../../../assets/Sorting.svg?react";
import { Product } from "../../../types";

interface MobFilterButtonsProps {
  isFiltersEmpty: boolean;
  filteredProducts: Product[];
  filter: "asc" | "desc" | "rating" | "new";
  setFilter: React.Dispatch<
    React.SetStateAction<"asc" | "desc" | "rating" | "new">
  >;
  setIsMobileFilters: (value: boolean) => void;
}

const MobFilterButtons: React.FC<MobFilterButtonsProps> = ({
  isFiltersEmpty,
  filteredProducts,
  filter,
  setFilter,
  setIsMobileFilters,
}) => {
  const getFilterName = (value: "asc" | "desc" | "rating" | "new"): string => {
    switch (value) {
      case "asc":
        return "Від найдешевших";
      case "desc":
        return "Від найдорожчих";
      case "rating":
        return "За рейтингом";
      case "new":
        return "Новинки";
      default:
        return "";
    }
  };
  const filterName = getFilterName(filter);
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        justifyContent: "space-between",
      }}
    >
      <IconButton onClick={() => setIsMobileFilters(false)}>
        <ArrowLeftIcon />
      </IconButton>
      <Box sx={{ display: "flex", gap: "4px" }}>
        <FilterButtonMob
          icon={<FilterIcon />}
          primaryText={"Filter"}
          secondaryText={
            isFiltersEmpty ? "Не обраний" : `${filteredProducts.length} товарів`
          }
          filtersCount={0}
          onClick={() => setIsMobileFilters(prev => !prev)}
        />
        <FilterButtonMob
          icon={<SortIcon />}
          primaryText={"Сортування"}
          secondaryText={filterName}
        />
        {/* <MobFilterSelect filter={filter} setFilter={setFilter} /> */}
      </Box>
    </Box>
  );
};

export default MobFilterButtons;
