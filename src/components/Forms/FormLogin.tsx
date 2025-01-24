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

const schema = yup
  .object({
    email: yup
      .string()
      .required("* Електронна пошта є обов'язковою!")
      .email("* Введіть коректну електронну пошту!"),
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

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const watchedValues = watch();

  const checkBoxRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: FormData) => {
    if (checkBoxRef.current?.checked && data) {
      console.log("запамятати!");
    }
    console.log(data);
    reset();
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
          <InputLogin
            errors={errors}
            register={register}
            id="email"
            label="Email"
            type="text"
          />
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
        <FormButtonSubmit disabled={isValid ? false : true}>
          Увійти
        </FormButtonSubmit>
      </Box>
      <Box sx={{ textAlign: "right", p: "10px" }}>
        <Link sx={{ cursor: "pointer", display: "inline-block" }}>
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
        control={
          <Checkbox
            // inputRef={checkBoxRef}
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
        <Link sx={{ color: "#73270D", cursor: "pointer" }}>Реєструйся</Link>
      </Box>
    </Box>
  );
}

export default FormLogin;
