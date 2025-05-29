import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

interface AddProductSelect<T extends FieldValues, K extends Path<T>> {
  label: string;
  field: ControllerRenderProps<T, K>;
  options: string[];
  error?: FieldError;
  sx?: SxProps<Theme>;
}

const AddProductSelect = <T extends FieldValues, K extends Path<T>>({
  label,
  field,
  options,
  error,
  sx,
}: AddProductSelect<T, K>) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    field.onChange(e.target.value);
  };
  return (
    <FormControl
      variant="filled"
      sx={{ border: error && "1px solid red", borderRadius: "4px", ...sx }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={field.value}
        label={label}
        onChange={handleChange}
        sx={{
          backgroundColor: "rgba(115, 39, 13, 0.16)", // 👈 заміни на бажаний колір
          "&:hover": {
            backgroundColor: "rgba(115, 39, 13, 0.24)", // 👈 ховер ефект
          },
          "&.Mui-focused": {
            backgroundColor: "rgba(115, 39, 13, 0.24)", // focus
          },
        }}
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
