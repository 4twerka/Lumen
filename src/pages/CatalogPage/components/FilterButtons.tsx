import { Box, Button } from '@mui/material'
import React, { SetStateAction } from 'react'
import FilterSelect from './FilterSelect'

const buttonStyles = {
    fontWeight: 600,
    fontSize: "1rem",
    minWidth: "150px",
    height: "48px",
  };

interface FilterButtonsProps {
    handleAllProducts: () => void, 
    typeProducts: string,
    handleFilterProducts: () => void, 
    filter: string, 
    setFilter: React.Dispatch<SetStateAction<"desc" | "asc" | "rating" | "new">>
}

const FilterButtons:React.FC<FilterButtonsProps> = ({handleAllProducts, typeProducts, handleFilterProducts, filter, setFilter}) => {
  return (
    <Box sx={{ display: { xs: 'none', md: "flex"}, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "0.3rem" }}>
            <Button
              onClick={handleAllProducts}
              variant={
                typeProducts === "allProducts" ? "contained" : "outlined"
              }
              color="secondary"
              sx={buttonStyles}
            >
              Всі товари
            </Button>
            <Button
              color="secondary"
              onClick={handleFilterProducts}
              variant={
                typeProducts === "filteredProducts" ? "contained" : "outlined"
              }
              sx={buttonStyles}
            >
              Фільтри
            </Button>
          </Box>
          <FilterSelect filter={filter} setFilter={setFilter} />
        </Box>
  )
}

export default FilterButtons
