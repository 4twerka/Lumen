import { Button } from "@mui/material";
import React from "react";

interface FormButtonSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const FormButtonSubmit:React.FC<FormButtonSubmitProps> = ({children, disabled}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      // color="primaryContainer"
      fullWidth
      disabled={disabled}
      sx={{
        borderRadius: 2,
        backgroundColor: 'primary',
        height: "56px",
        color: "#FDF5ED",
        fontWeight: 600,
        textTransform: "initial",
      }}
    >
      {children}
    </Button>
  );
};

export default FormButtonSubmit;
