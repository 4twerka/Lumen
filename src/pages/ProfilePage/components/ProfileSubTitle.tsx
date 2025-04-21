import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useNavigate } from "react-router";

interface ProfileSubTitleProps {
    children: string
}

const ProfileSubTitle:React.FC<ProfileSubTitleProps> = ({children}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/profile')
    }
  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, pb: "16px" }}>
      <ArrowBackIosRoundedIcon onClick={handleNavigate} sx={{ cursor: "pointer" }} />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "1rem",
          color: "#111111",
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default ProfileSubTitle;
