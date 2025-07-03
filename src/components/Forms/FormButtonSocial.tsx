import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface FormButtonSocialProps extends ButtonProps {
    children: React.ReactNode;
}

const FormButtonSocial: React.FC<FormButtonSocialProps> = ({children, ...rest}) => {
  return (
    <Button
      fullWidth
      sx={{
        backgroundColor: "#FDF5ED",
        height: "46px",
        borderRadius: "8px",
        ...rest.sx
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default FormButtonSocial;
