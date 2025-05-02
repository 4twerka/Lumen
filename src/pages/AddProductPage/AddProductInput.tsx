import { TextField, Typography } from "@mui/material";
import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

interface AddProductSelect<T extends FieldValues, K extends Path<T>> {
  label: string;
  field: ControllerRenderProps<T, K>;
  error?: FieldError;
  type?: "text" | "number";
}

const AddProductInput = <T extends FieldValues, K extends Path<T>>({
  label,
  field,
  error,
  type = "text",
}: AddProductSelect<T, K>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value);
  };
  return (
    <>
      <TextField
        sx={{ border: error && "1px solid red", borderRadius: "4px" }}
        label={label}
        type={type}
        variant="outlined"
        value={field.value}
        onChange={handleChange}
      />
      {error && <Typography sx={{ color: "red" }}>{error.message}</Typography>}
    </>
  );
};

export default AddProductInput;
