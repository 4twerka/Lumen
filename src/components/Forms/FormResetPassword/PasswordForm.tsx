import React, { useState } from "react";
import { Box } from "@mui/material";
import FormButtonSubmit from "../FormButtonSubmit";
import { InputLogin } from "../../InputLogin/InputLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useAppSelector, useQueryParam } from "../../../hooks";
import FormWrapper from "./FormWrapper";
import ButtonLoader from "../../ButtonLoader/ButtonLoader";

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

const PasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataPassword>({
    resolver: yupResolver(schemaPassword),
  });
  const [seePassword, setSeePassword] = useState("password");
  const token = useQueryParam("token");
  console.log("token", token);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  const handleTogglePassword = () => {
    setSeePassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const onSubmitEmail = (data: FormDataPassword) => {
    console.log(data);

  };

  return (
    <FormWrapper>
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
          <FormButtonSubmit disabled={isLoading}>
            {isLoading ? <ButtonLoader size="11px" /> : "Підтвердити"}
          </FormButtonSubmit>
        </Box>
      </Box>
    </FormWrapper>
  );
};

export default PasswordForm;
