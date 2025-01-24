import { Box } from "@mui/material";
import React from "react";
import FormLogin from "../components/Forms/FormLogin";

const LoginPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        component={"img"}
        src="/picture.png"
        alt="picture"
        sx={{
          display: { xs: "none", sm: "block" },
          width: "45%",
          objectFit: "cover",
          height: "100%",
        }}
      />
      <Box
        sx={{
          width: { xs: "100%", sm: "55%" },
          padding: { xs: 0, sm: "0 30px", md: "0 50px" },
          overflowY: "auto",
        }}
      >
        <FormLogin />
      </Box>
    </Box>
  );
};

export default LoginPage;
