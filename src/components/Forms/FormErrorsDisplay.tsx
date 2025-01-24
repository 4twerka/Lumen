import React from "react";
import { Box, Typography } from "@mui/material";

interface ValidationError {
  validate: (value: string) => boolean;
  error: string;
}

interface FormErrorsDisplayProps {
  displayErrors: ValidationError[];
  value: string;
}

const FormErrorsDisplay: React.FC<FormErrorsDisplayProps> = ({
  displayErrors,
  value,
}) => {
  return (
    <Box pt={1} pl={2}>
      {displayErrors?.map((validation, index) => {
        const isValid = validation.validate(value);
        return (
          <Typography
            key={index}
            sx={{
              color: isValid ? "#4CAF50" : "#E60606",
              fontWeight: 400,
              fontSize: "12px",
            }}
          >
            {validation.error}
          </Typography>
        );
      })}
    </Box>
  );
};

export default FormErrorsDisplay;
