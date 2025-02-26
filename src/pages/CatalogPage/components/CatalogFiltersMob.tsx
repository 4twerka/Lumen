import { Box } from "@mui/material";
import React from "react";
import CatalogFilters from "./CatalogFilters";
import { FiltersState, Product } from "../../../types";
import FormButtonSubmit from "../../../components/Forms/FormButtonSubmit";

interface CatalogFiltersMobProps {
  setFiltersState: React.Dispatch<React.SetStateAction<FiltersState>>;
  filtersState: FiltersState;
  filteredProducts: Product[];
  setIsMobileFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

const CatalogFiltersMob: React.FC<CatalogFiltersMobProps> = ({
  filtersState,
  setFiltersState,
  filteredProducts,
  setIsMobileFilters,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        paddingBottom: '3rem'
      }}
    >
      <CatalogFilters
        filtersState={filtersState}
        setFiltersState={setFiltersState}
      />
      <FormButtonSubmit disabled={filteredProducts.length<=0} type="button" onClick={() => setIsMobileFilters(false)}>
        {filteredProducts.length > 0 ? `Показати ${filteredProducts.length} товарів` : "Немає результатів"}
        {/* Показати {filteredProducts.length} товарів */}
      </FormButtonSubmit>
    </Box>
  );
};

export default CatalogFiltersMob;
