import React from "react";
import { Box } from "@mui/material";
import FormButtonSubmit from "../FormButtonSubmit";
import { InputLogin } from "../../InputLogin/InputLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "../../../hooks";
import { accoutRecoveryUser } from "../../../store/slices/userSlice";

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
    // setUserResetPasword: (value: {email:string}) => void;
}

<<<<<<< HEAD
const EmailForm:React.FC<EmailFormProps> = ({setIsEmailVerified, setUserResetPasword}) => {
=======
const EmailForm:React.FC<EmailFormProps> = ({setIsEmailVerified}) => {
>>>>>>> ebc4714944d618785f564cc6cacff517a1bd377e

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataEmail>({
    resolver: yupResolver(schemaEmail)
  });

  const dispatch = useAppDispatch();

  const onSubmitEmail = async (data: FormDataEmail) => {
    console.log(data);
    try {
<<<<<<< HEAD
      const actionResult = await dispatch(accoutRecoveryUser({email: data.emailForgott}));
=======
      await dispatch(accoutRecoveryUser({email: data.emailForgott}));
>>>>>>> ebc4714944d618785f564cc6cacff517a1bd377e
      setIsEmailVerified(true);
    } catch (error) {
      console.log(error);
      
    }
    // if (!emails.includes(data.emailForgott)) {
    //   setError("emailForgott", {
    //     type: "manual",
    //     message: "* Не існує такого email",
    //   });
    // } else {
    //   setIsEmailVerified(true);
    //   setUserResetPasword({email: data.emailForgott})
    // }
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
