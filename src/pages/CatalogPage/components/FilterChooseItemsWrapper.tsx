import { Box } from "@mui/material";
import React from "react";

interface FilterChooseItemsWrapperProps {
  children: React.ReactNode;
}

const FilterChooseItemsWrapper: React.FC<FilterChooseItemsWrapperProps> = ({
  children,
}) => {
    
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.25rem",
        alignItems: "center",
        overflowX: "hidden",
        width: "100%",
        whiteSpace: "nowrap",
        padding: "0.5rem 0 1rem 0",
      }}
    >
      {children}
    </Box>
  );
};

export default FilterChooseItemsWrapper;
