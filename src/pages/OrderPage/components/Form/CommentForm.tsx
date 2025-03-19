import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { order } from "../../../../types";

interface CommentFormProps {
    control: Control<order>
}

const CommentForm:React.FC<CommentFormProps> = ({ control }) => {
  return (
    <>
      <Controller
        name="callMe"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            {...field}
            label="Не телефонуйте мені"
            control={
              <Checkbox
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
          />
        )}
      />
      <Box>
        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <>
              <TextField
                {...field}
                placeholder="Додати коментар до замовлення"
                fullWidth
                multiline={true}
                minRows={3}
                sx={{
                  borderRadius: "8px",
                  "& .MuiInputBase-input": { fontSize: "0.875rem" },
                }}
                onChange={(e) => {
                  const newValue = e.target.value.slice(0, 500);
                  field.onChange(newValue);
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: "#666666",
                  paddingLeft: "1rem",
                  paddingTop: "0.25rem",
                }}
              >
                {field.value.length || 0}/500 Символів
              </Typography>
            </>
          )}
        />
      </Box>
    </>
  );
};

export default CommentForm;
