import { InputLogin } from "../../components/InputLogin/InputLogin";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import GoogleIcon from "../../icons/flat-color-icons_google.svg?react";

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  
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
  };

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          textAlign: "center",
          mb: 4,
          mt: 6,
        }}
      >
        Вхід
      </Typography>
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
          <InputLogin
            errors={errors}
            register={register}
            id="password"
            label="Password"
            type={seePassword}
            icon={
              <IconButton onClick={handleTogglePassword}>
                {seePassword === "text" ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
          />
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
        <Button
          type="submit"
          fullWidth
          sx={{
            borderRadius: 2,
            backgroundColor: "#73270D",
            height: "56px",
            color: "#FDF5ED",
            fontWeight: 600,
          }}
        >
          Увійти
        </Button>
      </Box>
      <Box sx={{ textAlign: "right", p: "10px" }}>
        <Link sx={{ cursor: "pointer", display: "inline-block" }}>
          Забули пароль
        </Link>
      </Box>
      <Divider sx={{ mt: "32px" }}>або за допомогою</Divider>
      <Box sx={{ display: "flex", gap: "16px", pt: "32px", pb: "48px" }}>
        <Button
          fullWidth
          sx={{
            backgroundColor: "#FDF5ED",
            height: "46px",
            borderRadius: "8px",
          }}
        >
          <GoogleIcon />
        </Button>
        <Button
          fullWidth
          sx={{
            backgroundColor: "#FDF5ED",
            height: "46px",
            borderRadius: "8px",
          }}
        >
          <GoogleIcon />
        </Button>
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
        label={<Box sx={{fontSize:'16px', fontWeight:400}}><span style={{ color: "#A3A3A3" }}>Даю згоду на обробку своїх персональних даних</span>{" "}<span style={{ color: "black" }}>відповідно до даної офертою</span></Box>}
      />
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'4px', mt:'60px'}}>
        <Typography>Потрібен аккаунт?</Typography>
        <Link>Реєструйся</Link>
      </Box>
    </Box>
  );
}

export default FormLogin;
