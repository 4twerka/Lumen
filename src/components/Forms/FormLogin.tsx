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
  Typography,
} from "@mui/material";
import GoogleIcon from "../../icons/flat-color-icons_google.svg?react";
import FormButtonSocial from "./FormButtonSocial";
import FormButtonSubmit from "./FormButtonSubmit";
import FormTitle from "./FormTitle";
import { validationsDisplayErrors } from "./validationsDisplayErrors";
import FormErrorsDisplay from "./FormErrorsDisplay";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  clearErrors,
  loginUser,
} from "../../store/slices/userSlice";
import { useNavigate } from "react-router";
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import { API } from "../../constants";

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

const schema = yup
  .object({
    email: yup
      .string()
      .required("* Електронна пошта є обов'язковою!")
      .matches(emailRegExp, "* Введіть коректну електронну пошту!"),
    password: yup
      .string()
      .required("* Пароль є обов'язковим!")
      .min(8, "* Пароль повинен містити мінімум 8 символів!")
      .matches(/[A-Z]/, "* Пароль повинен містити хоча б одну велику літеру!")
      .matches(/[0-9]/, "* Пароль повинен містити хоча б одну цифру!"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function FormLogin() {
  const [seePassword, setSeePassword] = useState("password");
  const [isValidationErrors, setIsValidationErrors] = useState(false);
  const [isCheckedAgreement, setIsCheckedAgreement] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginError = useAppSelector((state) => state.user.error);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const watchedValues = watch();

  const checkBoxRef = useRef<HTMLInputElement | null>(null);
  const checkBoxAgreementRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  const onSubmit = async (data: FormData) => {
    try {
      const accessToken = await dispatch(loginUser(data)).unwrap();

      if (checkBoxRef.current?.checked) {
        localStorage.setItem("accessToken", accessToken);
      } else {
        sessionStorage.setItem("accessToken", accessToken);
      }
      navigate("/");
    } catch (error) {
      console.log("Виникла помилка: ", error);
    }
  };

  const handleTogglePassword = () => {
    setSeePassword((prev) => (prev === "text" ? "password" : "text"));
    setIsValidationErrors(true);
  };
  const handleFocus = () => {
    setIsValidationErrors(true);
  };

  useEffect(() => {
    const inputPassword = document.getElementById("password");
    const inputEmail = document.getElementById("email");
    if (inputPassword && inputEmail) {
      const handleFocus = () => {
        setIsValidationErrors(true);
      };
      const handleUnFocus = () => {
        setIsValidationErrors(false);
      };

      inputEmail.addEventListener("focus", handleUnFocus);
      inputPassword.addEventListener("focus", handleFocus);

      return () => {
        inputEmail.removeEventListener("focus", handleUnFocus);
        inputPassword.removeEventListener("focus", handleFocus);
      };
    }
  }, []);

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
      <FormTitle>Вхід</FormTitle>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            mb: "32px",
          }}
        >
          <Box>
            <InputLogin
              errors={errors}
              register={register}
              id="email"
              label="Email"
              type="text"
              serverError={loginError}
            />
          </Box>
          <Box>
            <InputLogin
              errors={errors}
              register={register}
              id="password"
              label="Password"
              type={seePassword}
              isErrors={false}
              icon={
                <IconButton
                  onClick={handleTogglePassword}
                  onFocus={handleFocus}
                >
                  {seePassword === "text" ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
            {isValidationErrors && (
              <FormErrorsDisplay
                displayErrors={validationsDisplayErrors}
                value={watchedValues?.password}
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
        <FormButtonSubmit disabled={!isValid || isLoading}>
          {isLoading ? <ButtonLoader size="11px" /> : "Увійти"}
        </FormButtonSubmit>
      </Box>
      <Box sx={{ textAlign: "right", p: "10px" }}>
        <Link
          onClick={() => navigate("/forgot-password")}
          sx={{ cursor: "pointer", display: "inline-block", fontWeight: 600 }}
        >
          Забули пароль
        </Link>
      </Box>
      <Divider sx={{ mt: "32px" }}>або за допомогою</Divider>
      <Box sx={{ pt: "32px", pb: "48px" }}>
        <FormButtonSocial
          onClick={() => {
            window.location.href = `${API}/api/auth/google-oauth`;
          }}
        >
          <GoogleIcon />
        </FormButtonSocial>
      </Box>
      <FormControlLabel
        sx={{ alignItems: "baseline" }}
        control={
          <Checkbox
            onChange={() => setIsCheckedAgreement(!isCheckedAgreement)}
            inputRef={checkBoxAgreementRef}
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
        <Typography>Потрібен аккаунт?</Typography>
        <Link
          onClick={() => navigate("/registration")}
          sx={{ color: "#73270D", cursor: "pointer", fontWeight: 600 }}
        >
          Реєструйся
        </Link>
      </Box>
    </Box>
  );
}

export default FormLogin;
