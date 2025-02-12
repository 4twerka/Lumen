import { Box } from "@mui/material";
import React from "react";
import FormTitle from "../FormTitle";

interface FormWrapperProps {
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <FormTitle>Забули пароль</FormTitle>
      {children}
    </Box>
  );
};

export default FormWrapper;
