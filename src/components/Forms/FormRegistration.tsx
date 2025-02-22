import { InputLogin } from "../../components/InputLogin/InputLogin";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Link,
  Snackbar,
  Typography,
} from "@mui/material";
import GoogleIcon from "../../icons/flat-color-icons_google.svg?react";
import FormButtonSocial from "./FormButtonSocial";
import FormButtonSubmit from "./FormButtonSubmit";
import FormTitle from "./FormTitle";
import { validationsDisplayErrors } from "./validationsDisplayErrors";
import FormErrorsDisplay from "./FormErrorsDisplay";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearErrors, registerUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

const schema = yup
  .object({
    emailReg: yup
      .string()
      .required("* Електронна пошта є обов'язковою!")
      .matches(emailRegExp, "* Введіть коректну електронну пошту!"),
    passwordReg: yup
      .string()
      .required("* Пароль є обов'язковим!")
      .min(8, "* Пароль повинен містити мінімум 8 символів!")
      .matches(/[A-Z]/, "* Пароль повинен містити хоча б одну велику літеру!")
      .matches(/[0-9]/, "* Пароль повинен містити хоча б одну цифру!"),
    passwordConfirm: yup
      .string()
      .required("* Пароль є обов'язковим!")
      .min(8, "* Пароль повинен містити мінімум 8 символів!")
      .matches(/[A-Z]/, "* Пароль повинен містити хоча б одну велику літеру!")
      .matches(/[0-9]/, "* Пароль повинен містити хоча б одну цифру!")
      .oneOf([yup.ref("passwordReg")], "* Паролі повинні співпадати!"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function FormRegistration() {
  const [seePassword, setSeePassword] = useState("password");
  const [seePasswordConfirm, setSeePasswordConfirm] = useState("password");
  const [isValidationErrorsPass, setIsValidationErrorsPass] = useState(false);
  const [isValidationErrorsPassConfirm, setIsValidationErrorsPassConfirm] =
    useState(false);
  const [isCheckedAgreement, setIsCheckedAgreement] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    setError,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const checkBoxRef = useRef<HTMLInputElement | null>(null);
  const checkBoxAgreementRef = useRef<HTMLInputElement | null>(null);
  const passwordReg = watch().passwordReg;
  const passwordConfirm = watch().passwordConfirm;
  const registerError = useAppSelector((state) => state.user.error);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const [registerMessage, setRegisterMessage] = useState('');
  
  useEffect(() => {
    if (passwordConfirm) {
      trigger("passwordConfirm");
    }
  }, [passwordReg, passwordConfirm, trigger]);

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    }
  }, [dispatch])

  const onSubmit = async (data: FormData) => {
    try {
      if (checkBoxAgreementRef.current?.checked) {
        const resultAction = await dispatch(
          registerUser({ email: data.emailReg, password: data.passwordReg })
        ).unwrap();
        setRegisterMessage(resultAction);
        // if (checkBoxRef.current?.checked && data) {
        //   localStorage.setItem("accessToken", "token");
        // } else {
        //   sessionStorage.setItem("accessToken", "token");
        // }
        // setTimeout(() => {
        //   navigate("/login");
        // }, 4000)
        reset();
      } else {
        setError("emailReg", {
          type: "manual",
          message: "* Надайте згоду на обробку своїх персональних даних",
        });
      }
    } catch (error) {
      console.log("Виникла помилка: ", error);
    }
  };

  const handleTogglePassword = () => {
    setSeePassword((prev) => (prev === "text" ? "password" : "text"));
  };
  const handleTogglePasswordConfirm = () => {
    setSeePasswordConfirm((prev) => (prev === "text" ? "password" : "text"));
  };

  useEffect(() => {
    const inputPasswordReg = document.getElementById("passwordReg");
    const inputPasswordConfirm = document.getElementById("passwordConfirm");
    const inputEmail = document.getElementById("emailReg");
    if (inputPasswordReg && inputPasswordConfirm && inputEmail) {
      const handleFocusPass = () => {
        setIsValidationErrorsPass(true);
        setIsValidationErrorsPassConfirm(false);
      };
      const handleFocusPassConfirm = () => {
        setIsValidationErrorsPass(false);
        setIsValidationErrorsPassConfirm(true);
      };
      const handleUnFocusEmail = () => {
        setIsValidationErrorsPass(false);
        setIsValidationErrorsPassConfirm(false);
      };

      inputEmail.addEventListener("focus", handleUnFocusEmail);
      inputPasswordReg.addEventListener("focus", handleFocusPass);
      inputPasswordConfirm.addEventListener("focus", handleFocusPassConfirm);

      return () => {
        inputEmail.removeEventListener("focus", handleUnFocusEmail);
        inputPasswordReg.removeEventListener("focus", handleFocusPass);
        inputPasswordConfirm.removeEventListener("focus", handleFocusPassConfirm);
      };
    }
  }, []);
  
  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
      <FormTitle>Реєстрація</FormTitle>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
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
            id="emailReg"
            label="Email"
            type="text"
            serverError={registerError}
          />
          <Box>
            <InputLogin
              errors={errors}
              register={register}
              id="passwordReg"
              label="Пароль"
              type={seePassword}
              isErrors={false}
              icon={
                <IconButton onClick={handleTogglePassword}>
                  {seePassword === "text" ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
            {isValidationErrorsPass && (
              <FormErrorsDisplay
                displayErrors={validationsDisplayErrors}
                value={passwordReg}
              />
            )}
          </Box>
          <Box>
            <InputLogin
              errors={errors}
              register={register}
              id="passwordConfirm"
              label="Підтвердіть ваш пароль"
              type={seePasswordConfirm}
              isErrors={false}
              icon={
                <IconButton onClick={handleTogglePasswordConfirm}>
                  {seePasswordConfirm === "text" ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              }
            />
            {isValidationErrorsPassConfirm && (
              <FormErrorsDisplay
                displayErrors={validationsDisplayErrors}
                value={passwordConfirm}
              />
            )}
          </Box>
          <FormControlLabel
            sx={{ height: "21px", alignItems: "normal" }}
            control={
              <Checkbox
                inputRef={checkBoxRef}
                sx={{ color: "black", "&.Mui-checked": { color: "#73270D" } }}
              />
            }
            label="Запам'ятати?"
          />
        </Box>
        <FormButtonSubmit disabled={!isValid || !isCheckedAgreement || isLoading}>
          {isLoading ? (
            <ButtonLoader size="11px" />
          ) : (
            "Увійти"
          )}
        </FormButtonSubmit>
      </Box>
      <Box sx={{ textAlign: "right", p: "10px" }}>
        <Link onClick={() => navigate('/forgot-password')} sx={{ cursor: "pointer", display: "inline-block", fontWeight: 600 }}>
          Забули пароль
        </Link>
      </Box>
      <Divider sx={{ mt: "32px" }}>або за допомогою</Divider>
      <Box sx={{ pt: "32px", pb: "48px" }}>
        <FormButtonSocial>
          <GoogleIcon />
        </FormButtonSocial>
      </Box>
      <FormControlLabel
        sx={{ alignItems: "baseline" }}
        control={
          <Checkbox
            inputRef={checkBoxAgreementRef}
            onChange={() => setIsCheckedAgreement(!isCheckedAgreement)}
            sx={{
              color: "black",
              alignSelf: "flex-start",
              pt: 0,
              "&.Mui-checked": { color: "#73270D" },
            }}
          />
        }
        label={
          <Box sx={{ fontSize: "16px", fontWeight: 400 }}>
            <span style={{ color: "#A3A3A3" }}>
              Даю згоду на обробку своїх персональних даних
            </span>{" "}
            <span style={{ color: "black" }}>відповідно до даної офертою</span>
          </Box>
        }
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          mt: "60px",
        }}
      >
        <Typography>Вже маєш аккаунт?</Typography>
        <Link onClick={() => (navigate('/login'))} sx={{ color: "#73270D", cursor: "pointer", fontWeight: 600 }}>Вхід</Link>
      </Box>
      <Snackbar 
        open={!!registerMessage} 
        message={registerMessage} 
        autoHideDuration={6000} 
        onClose={() => setRegisterMessage('')}
      />
    </Box>
  );
}

export default FormRegistration;
