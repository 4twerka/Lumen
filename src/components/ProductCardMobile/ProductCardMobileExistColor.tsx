import { Box, Radio, Typography } from "@mui/material";
import React, { useState } from "react";

const colors = ["blue", "orange", "red"];

interface ProductCardMobileExistColorProps {
    id: string,
}

const ProductCardMobileExistColor:React.FC<ProductCardMobileExistColorProps> = ({id}) => {
  const [selectedValue, setSelectedValue] = useState(colors[0]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: "4px" }}>
        {colors.map((color) => (
          <Radio
            key={`${id}-${color}`}
            sx={{
              backgroundColor: color,
              width: "10px",
              height: "10px",
              "&:hover": { opacity: 0.5, backgroundColor: color },
              "&.Mui-checked": {
                backgroundColor: color,
              },
            }}
            checked={selectedValue === color}
            onChange={handleChange}
            value={color}
            name="radio-buttons"
            inputProps={{ "aria-label": color }}
          />
        ))}
      </Box>
      <Typography
        sx={{ fontWeight: 400, fontSize: "0.625rem", color: "#0E402D" }}
      >
        В наявності
      </Typography>
    </Box>
  );
};

export default ProductCardMobileExistColor;
