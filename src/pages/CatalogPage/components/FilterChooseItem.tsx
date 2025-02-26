import { Box, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "../../../assets/CloseIcon.svg?react";
import { FiltersState } from "../../../types";

interface FilterChooseItemProps {
  filter: string;
  setFiltersState: React.Dispatch<React.SetStateAction<FiltersState>>;
}

const FilterChooseItem: React.FC<FilterChooseItemProps> = ({
  filter,
  setFiltersState,
}) => {
  const handleDeleteFilter = (filter: string) => {
    setFiltersState((prev) => {
      const newFiltersState: FiltersState = { ...prev };

      (Object.keys(newFiltersState) as Array<keyof Omit<FiltersState, "giftWrapping">>).forEach((key) => {
        if (Array.isArray(newFiltersState[key])) {
          newFiltersState[key] = newFiltersState[key].filter(
            (item) => item !== filter
          );
        }
      });

      return newFiltersState;
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.25rem",
        alignItems: "center",
        padding: "5.5px 8px",
        borderRadius: "4px",
        backgroundColor: "#F1F1F4",
      }}
    >
      <Typography
        sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "21px" }}
      >
        {filter}
      </Typography>
      <CloseIcon
        style={{ cursor: "pointer" }}
        onClick={() => handleDeleteFilter(filter)}
      />
    </Box>
  );
};

export default FilterChooseItem;
