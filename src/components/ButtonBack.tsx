import { ButtonBase, ButtonBaseProps } from "@mui/material";
import React from "react";
import ArrowLeft from "../assets/Arrow Left.svg?react";

const ButtonBack: React.FC<ButtonBaseProps> = ({ sx, ...restProps}) => {
  return (
    <ButtonBase
      sx={{
        padding: "12px 7px",
        fontWeight: 600,
        color: "#73270D",
        gap: "4px",
        ...sx
      }}
      {...restProps}
    >
      <ArrowLeft /> Назад
    </ButtonBase>
  );
};

export default ButtonBack;
