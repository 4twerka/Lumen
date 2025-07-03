import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  SxProps,
  Theme,
} from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchProps {
  value: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  sx?: SxProps<Theme>;
}

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  onClear,
  sx,
  id,
}) => {
  return (
    <FormControl sx={{ borderRadius: "0.5rem", ...sx }} variant="outlined">
      <InputLabel id={id}>Search</InputLabel>
      <OutlinedInput
        sx={{borderRadius: '0.5rem'}}
        autoComplete="off"
        id={id}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onClear} edge="end">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Search"
      />
    </FormControl>
  );
};

export default Search;
