import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface UpdateSelectProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  textArea?: boolean;
  readonly?: boolean;
  rules?: RegisterOptions<T>;
  options: string[];
}

const UpdateSelect = <T extends FieldValues>({
  label,
  error,
  name,
  register,
  rules,
  options,
}: UpdateSelectProps<T>) => {
//   const handleChange = (e: SelectChangeEvent<string>) => {
//     field.onChange(e.target.value);
//   };
  return (
    //   <FormControl sx={{ border: error && '1px solid red', borderRadius: '4px'}} fullWidth>
    //     <InputLabel>{label}</InputLabel>
    //     <Select
    //       value={field.value}
    //     //   label={label}
    //       inputProps={{ 'aria-label': 'Without label' }}
    //       onChange={handleChange}
    //     >
    //       {options.map((option) => (
    //         <MenuItem key={option} value={option}>
    //           {option}
    //         </MenuItem>
    //       ))}
    //     </Select>
    //   </FormControl>
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          lineHeight: "150%",
          color: "#111111",
        }}
      >
        {label}
      </label>
      <select {...register(name, rules)}>
        <option value="">Колір</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className={`styles.error`}>{error?.message}</p>}
    </div>
  );
};

export default UpdateSelect;
