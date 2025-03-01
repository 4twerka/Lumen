import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowLeftIcon from "../../../assets/Arrow Left.svg?react";
import FilterButtonMob from "./FilterButtonMob";
import FilterIcon from "../../../assets/Filters.svg?react";
import SortIcon from "../../../assets/Sorting.svg?react";
import { FiltersState, initialFiltersState, Product } from "../../../types";
import FilterChooseItem from "./FilterChooseItem";
import FilterChooseItemsWrapper from "./FilterChooseItemsWrapper";
import FilterSelectMob from "./FilterSelectMob";
import { getFilterName } from "../../../utils/getFilterName";
import { useNavigate } from "react-router";

interface MobFilterButtonsProps {
  isFiltersEmpty: boolean;
  filteredProducts: Product[];
  filter: "asc" | "desc" | "rating" | "new";
  setIsMobileFilters: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<
      React.SetStateAction<"asc" | "desc" | "rating" | "new">
    >;
  isMobileFilters: boolean;
  filtersState: FiltersState;
  setFiltersState: React.Dispatch<React.SetStateAction<FiltersState>>;
}

const MobFilterButtons: React.FC<MobFilterButtonsProps> = ({
  isFiltersEmpty,
  filteredProducts,
  filter,
  setIsMobileFilters,
  isMobileFilters,
  filtersState,
  setFiltersState,
  setFilter
}) => {

  const filterName = getFilterName(filter);
  const valuesArray = Object.values(filtersState)
    .filter((value) => value.length > 0)
    .flat();

  const resetFilterState = () => {
    setFiltersState(initialFiltersState);
  };

  const [isSortMenu, setIsSortMenu] = useState(false)
  const navigate = useNavigate();
  return (
    <>
      {isMobileFilters ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => setIsMobileFilters(false)}>
              <ArrowLeftIcon />
            </IconButton>
            <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
              Фільтри({valuesArray.length})
            </Typography>
            <Typography
              onClick={resetFilterState}
              sx={{
                fontSize: "0.875rem",
                fontWeight: 400,
                cursor: "pointer",
                padding: "5px",
              }}
            >
              скинути
            </Typography>
          </Box>
          <FilterChooseItemsWrapper>
            {valuesArray.map((filter, index) => (
              <FilterChooseItem
                key={index}
                filter={filter}
                setFiltersState={setFiltersState}
              />
            ))}
          </FilterChooseItemsWrapper>
        </>
      ) : (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <IconButton onClick={isSortMenu ? () => setIsSortMenu(false) : () => navigate(-1)}>
            <ArrowLeftIcon />
          </IconButton>
          <Box sx={{ display: "flex", gap: "4px" }}>
            <FilterButtonMob
              icon={<FilterIcon />}
              primaryText={"Filter"}
              secondaryText={
                isFiltersEmpty
                  ? "Не обраний"
                  : `${filteredProducts.length} товарів`
              }
              filtersCount={valuesArray.length}
              onClick={() => setIsMobileFilters((prev) => !prev)}
            />
            <FilterButtonMob
              icon={<SortIcon />}
              primaryText={"Сортування"}
              secondaryText={filterName}
              onClick={() => setIsSortMenu(!isSortMenu)}
            ></FilterButtonMob>
            {isSortMenu && <FilterSelectMob filter={filter} setFilter={setFilter} setIsSortMenu={setIsSortMenu} />}
          </Box>
        </Box>
      )}
    </>
  );
};

export default MobFilterButtons;
