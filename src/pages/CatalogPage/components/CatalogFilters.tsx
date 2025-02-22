import React from "react";
import FilterItem from "./FilterItem";
import { FiltersState } from "../../../types";
import {
  Checkbox,
  FormControlLabel,
  ListItemButton,
} from "@mui/material";
import { filterOptions } from "../../../utils/filter";

interface CatalogFiltersProps {
  setFiltersState: React.Dispatch<React.SetStateAction<FiltersState>>;
  filtersState: FiltersState;
}

const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  setFiltersState,
  filtersState,
}) => {

  const handleFilterChange = <K extends keyof FiltersState>(
    filterName: K,
    selected: string[]
  ) => {
    setFiltersState((prev: FiltersState) => ({
      ...prev,
      [filterName]: selected,
    }));
  };

  const handleGiftWrapping = <K extends keyof FiltersState>(filterName: K) => {
    setFiltersState((prev: FiltersState) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };
  
  return (
    <>
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("price", selected)}
        selectedOptions={filtersState.price}
        filterName={`Ціна${
          filtersState.price.length > 0 ? ` (${filtersState.price.length})` : ""
        }`}
        options={filterOptions.price}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("types", selected)}
        selectedOptions={filtersState.types}
        filterName={`Тип свічки${
          filtersState.types.length > 0 ? ` (${filtersState.types.length})` : ""
        }`}
        options={filterOptions.types}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("size", selected)}
        selectedOptions={filtersState.size}
        filterName={`Розмір${
          filtersState.size.length > 0 ? ` (${filtersState.size.length})` : ""
        }`}
        options={filterOptions.size}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("aroma", selected)}
        selectedOptions={filtersState.aroma}
        filterName={`Аромат${
          filtersState.aroma.length > 0 ? ` (${filtersState.aroma.length})` : ""
        }`}
        options={filterOptions.aroma}
      />
      <FilterItem
        setSelectedOptions={(selected) =>
          handleFilterChange("assignment", selected)
        }
        selectedOptions={filtersState.assignment}
        filterName={`Призначення${
          filtersState.assignment.length > 0
            ? ` (${filtersState.assignment.length})`
            : ""
        }`}
        options={filterOptions.assignment}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("color", selected)}
        selectedOptions={filtersState.color}
        filterName={`Колір${
          filtersState.color.length > 0 ? ` (${filtersState.color.length})` : ""
        }`}
        options={filterOptions.color}
      />
      <FilterItem
        setSelectedOptions={(selected) =>
          handleFilterChange("material", selected)
        }
        selectedOptions={filtersState.material}
        filterName={`Матеріал${
          filtersState.material.length > 0
            ? ` (${filtersState.material.length})`
            : ""
        }`}
        options={filterOptions.material}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("form", selected)}
        selectedOptions={filtersState.form}
        filterName={`Форма${
          filtersState.form.length > 0 ? ` (${filtersState.form.length})` : ""
        }`}
        options={filterOptions.form}
      />
      <FilterItem
        setSelectedOptions={(selected) =>
          handleFilterChange("features", selected)
        }
        selectedOptions={filtersState.features}
        filterName={`Особливості${
          filtersState.features.length > 0
            ? ` (${filtersState.features.length})`
            : ""
        }`}
        options={filterOptions.features}
      />
      <ListItemButton
        sx={{
          padding: 0,
          color: "#111111",
          borderRadius: "0.25rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FormControlLabel
          sx={{
            margin: 0,
            padding: "0.1875rem 0.5rem 0.1875rem 1rem",
            width: "100%",
            "& .MuiFormControlLabel-label": { fontWeight: 600, flexGrow: 1 },
          }}
          labelPlacement="start"
          control={<Checkbox onChange={() => handleGiftWrapping("giftWrapping")} checked={filtersState.giftWrapping} />}
          label={"Подарункова уапаковка"}
        />
      </ListItemButton>
    </>
  );
};

export default CatalogFilters;
