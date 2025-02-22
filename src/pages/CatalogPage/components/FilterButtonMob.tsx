import { Box, Button } from "@mui/material";
import React from "react";

interface FilterButtonMobProps {
  icon: React.ReactElement;
  primaryText: string;
  secondaryText: string;
  filtersCount?: number;
  onClick?: () => void;
}

const FilterButtonMob: React.FC<FilterButtonMobProps> = ({
  icon,
  primaryText,
  secondaryText,
  filtersCount,
  onClick
}) => {
  return (
    <Button
      sx={{ padding: "0.5rem 0.75rem" }}
      variant="outlined"
      startIcon={icon}
      onClick={onClick}
    >
      <Box>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 400,
            margin: 0,
            textTransform: "none",
            lineHeight: "13px",
            color: "#111111",
            textAlign: "start",
            display: "flex",
            gap: "0.3rem",
            alignItems: "center",
          }}
        >
          {primaryText}
          {(filtersCount ?? 0) > 0 && (
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "15px",
                height: "15px",
                backgroundColor: "#73270D",
                borderRadius: "50%",
                color: "#FDF5ED",
              }}
            >
              {filtersCount}
            </span>
          )}
        </p>
        <p
          style={{
            fontSize: "0.625rem",
            fontWeight: 400,
            color: "#A3A3A3",
            margin: 0,
            textTransform: "none",
            lineHeight: "12px",
            textAlign: "start",
          }}
        >
          {secondaryText}
        </p>
      </Box>
    </Button>
  );
};

export default FilterButtonMob;
