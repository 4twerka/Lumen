import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface FilterButtonMobProps {
  icon: React.ReactElement;
  primaryText: string;
  secondaryText: string;
  filtersCount?: number;
  onClick?: () => void;
  children?: React.ReactNode;
}

const style = {
  button: {
    padding: "0.5rem 0.75rem",
    position: "relative",
  },
  primaryText: {
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
  },
  filtersCount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "15px",
    height: "15px",
    backgroundColor: "#73270D",
    borderRadius: "50%",
    color: "#FDF5ED",
    fontSize: "0.75rem",
  },
  secondaryText: {
    fontSize: "0.625rem",
    fontWeight: 400,
    color: "#A3A3A3",
    margin: 0,
    textTransform: "none",
    lineHeight: "12px",
    textAlign: "start",
  },
};

const FilterButtonMob: React.FC<FilterButtonMobProps> = ({
  icon,
  primaryText,
  secondaryText,
  filtersCount,
  onClick,
  children,
}) => {
  return (
    <Button
      sx={style.button}
      variant="outlined"
      startIcon={icon}
      onClick={onClick}
    >
      {children}
      <Box>
        <Typography sx={style.primaryText}>
          {primaryText}
          {(filtersCount ?? 0) > 0 && (
            <Typography component={"span"} sx={style.filtersCount}>
              {filtersCount}
            </Typography>
          )}
        </Typography>
        <Typography sx={style.secondaryText}>{secondaryText}</Typography>
      </Box>
    </Button>
  );
};

export default FilterButtonMob;
