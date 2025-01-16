import { Button } from "@mui/material";
import React from "react";

interface FormButtonSubmitProps {
  children: React.ReactNode;
}

const FormButtonSubmit:React.FC<FormButtonSubmitProps> = ({children}) => {
  return (
    <Button
      type="submit"
      fullWidth
      sx={{
        borderRadius: 2,
        backgroundColor: "#73270D",
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
