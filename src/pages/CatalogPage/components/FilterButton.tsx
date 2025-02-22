import { Button } from "@mui/material";
import React from "react";

interface FilterButtonProps {
    children: string;
    onClick: () => void;
    variant?: "text" | "outlined" | "contained";
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

const FilterButton: React.FC<FilterButtonProps> = ({ children, onClick, variant, color }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      color={color}
      sx={{ fontWeight: 600, fontSize: "1rem", width: "150px", height: "48px" }}
    >
      {children}
    </Button>
  );
};

export default FilterButton;
