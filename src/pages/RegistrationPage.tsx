import { Box } from "@mui/material";
import React from "react";
import FormRegistration from "../components/Forms/FormRegistration";

const RegistrationPage: React.FC = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        component={"img"}
        src="/picture.png"
        alt="picture"
        sx={{
          objectFit: "cover",
          height: "100%",
          display: { xs: "none", sm: "block" },
          width: "45%",
        }}
      />
      <Box
        sx={{
          width: { xs: "100%", sm: "55%" },
          padding: { xs: 0, sm: "0 30px", md: "0 50px" },
          overflowY: "auto",
        }}
      >
        <FormRegistration />
      </Box>
    </Box>
  );
};

export default RegistrationPage;
