import React, { useState } from "react";
import { Box } from "@mui/material";
import FormButtonSubmit from "../FormButtonSubmit";
import { InputLogin } from "../../InputLogin/InputLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const schemaPassword = yup
  .object({
    passwordForgott: yup
      .string()
      .required("* Пароль є обов'язковим!")
      .min(8, "* Пароль повинен містити мінімум 8 символів!")
      .matches(/[A-Z]/, "* Пароль повинен містити хоча б одну велику літеру!")
      .matches(/[0-9]/, "* Пароль повинен містити хоча б одну цифру!"),
  })
  .required();

type FormDataPassword = yup.InferType<typeof schemaPassword>;

interface PasswordFormProps {
  setUserResetPasword: (value: { email: string, password?: string }) => void;
  userResetPasword: { email: string; password?: string };
  setIsEmailVerified: (value: boolean) => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({
  setUserResetPasword,
  userResetPasword,
  setIsEmailVerified
}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataPassword>({
    resolver: yupResolver(schemaPassword),
  });
  const [seePassword, setSeePassword] = useState("password");

  const handleTogglePassword = () => {
    setSeePassword((prev) => (prev === "password" ? "text" : "password"));
  };
  
  const onSubmitEmail = (data: FormDataPassword) => {
    console.log(data);
    setUserResetPasword({
      ...userResetPasword,
      password: data.passwordForgott,
    });
    setIsEmailVerified(false);
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmitEmail)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          mb: "32px",
        }}
      >
        <InputLogin
          errors={errors}
          register={register}
          id="passwordForgott"
          label="Новий пароль"
          type={seePassword}
          icon={
            <IconButton onClick={handleTogglePassword}>
              {seePassword === "text" ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
        />
        <FormButtonSubmit>Підтвердити</FormButtonSubmit>
      </Box>
    </Box>
  );
};

export default PasswordForm;
