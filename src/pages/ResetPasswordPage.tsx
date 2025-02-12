import React from "react";
import { Box } from "@mui/material";
import PasswordForm from "../components/Forms/FormResetPassword/PasswordForm";

const ResetPasswordPage: React.FC = () => {
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
          minHeight: "100%",
          overflowY: "auto",
          display: "grid",
          placeItems: "center",
        }}
      >
        <PasswordForm />
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
