import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import FormButtonSubmit from "../../../components/Forms/FormButtonSubmit";

interface FilterSelectMobProps {
  filter: "asc" | "desc" | "rating" | "new";
  setFilter: React.Dispatch<
    React.SetStateAction<"asc" | "desc" | "rating" | "new">
  >;
  setIsSortMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  formControl: {
    position: "absolute",
    width: "100%",
    right: 0,
    top: "100%",
    zIndex: 20,
    backgroundColor: "#FCFCFC",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingTop: "1rem",
    paddingBottom: "3rem",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  radioGroup: {
    alignItems: "flex-start",
  },
  formControlLabel: {
    justifyContent: "space-between",
    width: "100%",
    padding: "18px 0",
  },
};

const FilterSelectMob: React.FC<FilterSelectMobProps> = ({
  filter,
  setFilter,
  setIsSortMenu,
}) => {
  const [selectedValue, setSelectedValue] = useState<
    "asc" | "desc" | "rating" | "new"
  >(filter);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value as "asc" | "desc" | "rating" | "new");
  };

  const handleSubmit = () => {
    setFilter(selectedValue);
    setIsSortMenu(false);
  };

  return (
    <FormControl sx={style.formControl}>
      <RadioGroup sx={style.radioGroup} value={filter} onChange={handleChange}>
        <FormControlLabel
          sx={style.formControlLabel}
          labelPlacement="start"
          value="rating"
          control={<Radio checked={"rating" === selectedValue} />}
          label="За рейтингом"
        />
        <FormControlLabel
          sx={style.formControlLabel}
          labelPlacement="start"
          value="asc"
          control={<Radio checked={"asc" === selectedValue} />}
          label="Від найдешевших"
        />
        <FormControlLabel
          sx={style.formControlLabel}
          labelPlacement="start"
          value="desc"
          control={<Radio checked={"desc" === selectedValue} />}
          label="Від найдорожчих"
        />
        <FormControlLabel
          sx={style.formControlLabel}
          labelPlacement="start"
          value="new"
          control={<Radio checked={"new" === selectedValue} />}
          label="Новинки"
        />
      </RadioGroup>
      <FormButtonSubmit onClick={handleSubmit}>Сортувати</FormButtonSubmit>
    </FormControl>
  );
};

export default FilterSelectMob;
