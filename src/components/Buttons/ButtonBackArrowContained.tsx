import React from "react";
import BackIcon from "../../assets/BackArrow.svg?react";
import { Button, ButtonProps } from "@mui/material";

const ButtonBackArrowContained: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        width: "50%",
        height: "48px",
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "20px",
        borderRadius: "8px",
        gap: "12px",
        ...props.sx,
      }}
    >
      <BackIcon />
      Назад
    </Button>
  );
};

export default ButtonBackArrowContained;
