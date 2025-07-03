import React from "react";
import BackIcon from "../../assets/BackArrow.svg?react";
import { Button, ButtonProps } from "@mui/material";

const ButtonBackArrowOutlined: React.FC<ButtonProps> = ({
  sx,
  children,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      variant="outlined"
      sx={{
        height: "48px",
        width: "fit-content",
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "20px",
        borderRadius: "8px",
        borderColor: "#0E402D",
        gap: "12px",
        color: "#0E402D",
        ...sx,
      }}
    >
      <BackIcon style={{ fill: "#0E402D" }} />
      {children}
    </Button>
  );
};

export default ButtonBackArrowOutlined;
