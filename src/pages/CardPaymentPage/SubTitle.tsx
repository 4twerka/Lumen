import { Typography } from "@mui/material";
import React from "react";

interface SubTitleProps {
    subtitle: string;
    text: string;
}

const SubTitle:React.FC<SubTitleProps> = ({ subtitle, text }) => {
  return (
    <Typography sx={{ color: "#3F3F46", fontWeight: 500 }}>
      {subtitle}{" "}
      <Typography component={"span"} sx={{ fontWeight: 400 }}>
        {text}
      </Typography>
    </Typography>
  );
};

export default SubTitle;
