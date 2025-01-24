import React from "react";
import { Box } from "@mui/material";
import FormButtonSubmit from "../FormButtonSubmit";
import { InputLogin } from "../../InputLogin/InputLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaEmail = yup
  .object({
    emailForgott: yup
      .string()
      .required("* Електронна пошта є обов'язковою!")
      .email("* Введіть коректну електронну пошту!"),
  })
  .required();

type FormDataEmail = yup.InferType<typeof schemaEmail>;

interface EmailFormProps {
    setIsEmailVerified: (value:boolean) => void;
    setUserResetPasword: (value: {email:string}) => void;
}

const EmailForm:React.FC<EmailFormProps> = ({setIsEmailVerified, setUserResetPasword}) => {
  const emails = ["test@i.ua", "test1@i.ua", "test2@i.ua"];
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormDataEmail>({
    resolver: yupResolver(schemaEmail)
  });
  const onSubmitEmail = (data: FormDataEmail) => {
    console.log(data);
    if (!emails.includes(data.emailForgott)) {
      setError("emailForgott", {
        type: "manual",
        message: "* Не існує такого email",
      });
    } else {
      setIsEmailVerified(true);
      setUserResetPasword({email: data.emailForgott})
    }
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
          id="emailForgott"
          label="Email"
          type="text"
        />
        <FormButtonSubmit>Підтвердити</FormButtonSubmit>
      </Box>
    </Box>
  );
};

export default EmailForm;
