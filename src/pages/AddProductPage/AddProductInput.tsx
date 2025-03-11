import { TextField } from "@mui/material";
import { ControllerRenderProps, FieldError, FieldValues, Path } from "react-hook-form";

interface AddProductSelect<T extends FieldValues, K extends Path<T>> {
  label: string;
  field: ControllerRenderProps<T, K>;
  error?: FieldError;
}

const AddProductInput = <T extends FieldValues, K extends Path<T>>({
  label,
  field,
  error
}: AddProductSelect<T, K>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value); // Get the value directly from the event target
  };
  return (
    <TextField
      sx={{border: error && '1px solid red', borderRadius: '4px'}}
      label={label}
      variant="outlined"
      value={field.value}
      onChange={handleChange}
    />
  );
};

export default AddProductInput;
