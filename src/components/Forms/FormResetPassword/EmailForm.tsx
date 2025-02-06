import React, { useEffect, useState } from "react";
import { Box, Snackbar } from "@mui/material";
import FormButtonSubmit from "../FormButtonSubmit";
import { InputLogin } from "../../InputLogin/InputLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { accoutRecoveryUser, clearErrors } from "../../../store/slices/userSlice";
import FormWrapper from "./FormWrapper";
import Loader from "../../Loader/Loader";

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

const schemaEmail = yup
  .object({
    emailForgott: yup
      .string()
      .required("* Електронна пошта є обов'язковою!")
      .matches(emailRegExp, "* Введіть коректну електронну пошту!"),
  })
  .required();

type FormDataEmail = yup.InferType<typeof schemaEmail>;

const EmailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataEmail>({
    resolver: yupResolver(schemaEmail),
  });

  const dispatch = useAppDispatch();
  const [resetPassworMessage, setResetPassworMessage] = useState("");
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const serverErrors = useAppSelector((state) => state.user.error);

  const onSubmitEmail = async (data: FormDataEmail) => {
    console.log(data);
    try {
      const resultAction = await dispatch(
        accoutRecoveryUser({ email: data.emailForgott })
      ).unwrap();
      setResetPassworMessage(resultAction);
      reset();
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

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    }
  }, [dispatch])

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
            id="emailForgott"
            label="Email"
            type="text"
            serverError={serverErrors}
          />
          <FormButtonSubmit disabled={isLoading}>
            {isLoading ? <Loader size="11px" /> : "Підтвердити"}
          </FormButtonSubmit>
        </Box>
      </Box>
      <Snackbar
        open={!!resetPassworMessage}
        message={resetPassworMessage}
        autoHideDuration={6000}
        onClose={() => setResetPassworMessage("")}
      />
    </FormWrapper>
  );
};

export default EmailForm;
