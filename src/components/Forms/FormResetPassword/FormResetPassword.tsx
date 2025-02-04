import { Box } from "@mui/material";
import FormTitle from "../FormTitle";
import { useState } from "react";
import PasswordForm from "./PasswordForm";
import EmailForm from "./EmailForm";

interface UserResetPassword {
  email: string;
  password?: string;
}

function FormResetPassword() {

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [userResetPasword, setUserResetPasword] = useState<UserResetPassword>({email: ''});

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", width:'100%' }}>
      <FormTitle>Забули пароль</FormTitle>
      {isEmailVerified ? (
        <PasswordForm
          setUserResetPasword={setUserResetPasword}
          userResetPasword={userResetPasword}
          setIsEmailVerified={setIsEmailVerified}
        />
      ) : (
        <EmailForm
          setIsEmailVerified={setIsEmailVerified}
          setUserResetPasword={setUserResetPasword}
        />
      )}
    </Box>
  );
}

export default FormResetPassword;
