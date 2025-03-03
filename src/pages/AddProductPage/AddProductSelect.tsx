import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ControllerRenderProps, FieldError, FieldValues, Path } from "react-hook-form";

interface AddProductSelect<T extends FieldValues, K extends Path<T>> {
  label: string;
  field: ControllerRenderProps<T, K>;
  options: string[];
  error?: FieldError;
}

const AddProductSelect = <T extends FieldValues, K extends Path<T>>({
  label,
  field,
  options,
  error
}: AddProductSelect<T, K>) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    field.onChange(e.target.value);
  };
  return (
    <FormControl sx={{ border: error && '1px solid red', borderRadius: '4px'}} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={field.value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AddProductSelect;
