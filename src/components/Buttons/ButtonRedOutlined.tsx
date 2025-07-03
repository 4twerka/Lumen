import { Button, ButtonProps } from "@mui/material";
import React from "react";

const ButtonRedOutlined: React.FC<ButtonProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Button
      variant="outlined"
      sx={{
        height: "48px",
        fontSize: "1rem",
        borderRadius: "8px",
        textTransform: "none",
        fontWeight: 600,
        color: "#E60606",
        borderColor: "#E60606",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonRedOutlined;
