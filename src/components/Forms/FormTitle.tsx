import { Typography } from "@mui/material";
import React from "react";

interface FormTitleProps {
  children: React.ReactNode;
}

const FormTitle: React.FC<FormTitleProps> = ({ children }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: "24px",
        fontWeight: 600,
        textAlign: "center",
        mb: 4,
        mt: 6,
      }}
    >
      {children}
    </Typography>
  );
};

export default FormTitle;
