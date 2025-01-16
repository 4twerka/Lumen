import { Button } from "@mui/material";
import React from "react";

interface FormButtonSocialProps  {
    children: React.ReactNode;
}

const FormButtonSocial: React.FC<FormButtonSocialProps> = ({children}) => {
  return (
    <Button
      fullWidth
      sx={{
        backgroundColor: "#FDF5ED",
        height: "46px",
        borderRadius: "8px",
      }}
    >
      {children}
    </Button>
  );
};

export default FormButtonSocial;
