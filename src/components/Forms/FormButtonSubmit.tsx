import { Button, ButtonProps, SxProps, Theme } from "@mui/material";
import React from "react";

interface FormButtonSubmitProps extends ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "submit" | "button";
  sx?: SxProps<Theme>;
}

const FormButtonSubmit: React.FC<FormButtonSubmitProps> = ({
  children,
  disabled,
  type = "submit",
  sx,
  ...restProps
}) => {
  return (
    <Button
      type={type}
      variant="contained"
      // color="primaryContainer"
      fullWidth
      disabled={disabled}
      sx={{
        borderRadius: 2,
        backgroundColor: "primary",
        height: "56px",
        color: "#FDF5ED",
        fontWeight: 600,
        textTransform: "initial",
        "&:disabled": {
          color: "#ffffff",
          backgroundColor: "#73270D",
          opacity: 0.5,
        },
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default FormButtonSubmit;
