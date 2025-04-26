import React, { useEffect, useState } from "react";
import FilterItem from "./FilterItem";
import { FiltersState, Product } from "../../../types";
import { Checkbox, FormControlLabel, ListItemButton } from "@mui/material";
import { filterOptions } from "../../../utils/filter";
import { useAppSelector } from "../../../hooks";

interface CatalogFiltersProps {
  setFiltersState: React.Dispatch<React.SetStateAction<FiltersState>>;
  filtersState: FiltersState;
}

const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  setFiltersState,
  filtersState,
}) => {
  const [fetchFilterOptions, setFetchFilterOptions] = useState<FiltersState>(filterOptions);
  const products = useAppSelector((state) => state.products.products);
  useEffect(() => {
    const uniquesAroma = [
      ...new Set(products.map((product: Product) => product.aroma)),
    ];
    const uniquesTypes = [
      ...new Set(products.map((product: Product) => product.type_candle)),
    ];
    const uniquesAssignment = [
      ...new Set(products.map((product: Product) => product.appointment)),
    ];
    const uniquesColor = [
      ...new Set(products.map((product: Product) => product.color)),
    ];
    const uniquesMaterial = [
      ...new Set(products.map((product: Product) => product.material)),
    ];
    const uniquesForm = [
      ...new Set(products.map((product: Product) => product.shape)),
    ];
    const uniquesFeatures = [
      ...new Set(products.map((product: Product) => product.features)),
    ];
    if (!products.length) return;

    setFetchFilterOptions({
      price: filterOptions.price,
      size: filterOptions.size,
      types: uniquesTypes,
      aroma: uniquesAroma,
      assignment: uniquesAssignment,
      color: uniquesColor,
      material: uniquesMaterial,
      form: uniquesForm,
      features: uniquesFeatures,
      giftWrapping: false,
    });
  }, [products]);
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
        options={fetchFilterOptions.price}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("types", selected)}
        selectedOptions={filtersState.types}
        filterName={`Тип свічки${
          filtersState.types.length > 0 ? ` (${filtersState.types.length})` : ""
        }`}
        options={fetchFilterOptions.types}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("size", selected)}
        selectedOptions={filtersState.size}
        filterName={`Розмір${
          filtersState.size.length > 0 ? ` (${filtersState.size.length})` : ""
        }`}
        options={fetchFilterOptions.size}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("aroma", selected)}
        selectedOptions={filtersState.aroma}
        filterName={`Аромат${
          filtersState.aroma.length > 0 ? ` (${filtersState.aroma.length})` : ""
        }`}
        options={fetchFilterOptions.aroma}
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
        options={fetchFilterOptions.assignment}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("color", selected)}
        selectedOptions={filtersState.color}
        filterName={`Колір${
          filtersState.color.length > 0 ? ` (${filtersState.color.length})` : ""
        }`}
        options={fetchFilterOptions.color}
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
        options={fetchFilterOptions.material}
      />
      <FilterItem
        setSelectedOptions={(selected) => handleFilterChange("form", selected)}
        selectedOptions={filtersState.form}
        filterName={`Форма${
          filtersState.form.length > 0 ? ` (${filtersState.form.length})` : ""
        }`}
        options={fetchFilterOptions.form}
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
        options={fetchFilterOptions.features}
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
          control={
            <Checkbox
              onChange={() => handleGiftWrapping("giftWrapping")}
              checked={filtersState.giftWrapping}
            />
          }
          label={"Подарункова упаковка"}
        />
      </ListItemButton>
    </>
  );
};

export default CatalogFilters;
