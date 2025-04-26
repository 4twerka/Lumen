import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

interface FilterItemProps {
  filterName: string;
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (options: string[]) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  filterName,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const handleToggle = (option: string) => {
    const newSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(newSelection);
  };
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ListItemButton
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: open ? "rgba(115, 39, 13, 0.16)" : "none",
          color: "#111111",
          borderRadius: "0.25rem",
        }}
      >
        <ListItemText
          sx={{ "& .MuiTypography-root": { fontWeight: 600 } }}
          primary={filterName}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open}>
        <List sx={{ pl: 2, display: "flex", flexDirection: "column" }}>
          {options?.length &&
            options.map((option) => (
              <FormControlLabel
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "14px",
                    fontWeight: 400,
                  },
                }}
                key={option}
                control={
                  <Checkbox
                    checked={selectedOptions?.includes(option)}
                    onChange={() => handleToggle(option)}
                  />
                }
                label={option}
              />
            ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default FilterItem;
