import { Button, ButtonProps } from "@mui/material";
import React from "react";

// interface ButtonOutlineProps {
//   children: string;
// }

const ButtonOutline: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "#73270D",
        padding: "18px 65px",
        fontSize: "1rem",
        borderRadius: "8px",
        border: "1px solid #73270D",
        lineHeight: "12px",
        textTransform: 'none',
        width: "fit-content",
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default ButtonOutline;
