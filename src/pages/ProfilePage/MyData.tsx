import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUserInfo, updateUserInfo } from "../../store/slices/userSlice";
import ProfileInput from "./components/ProfileInput";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonGreen from "../../components/Buttons/ButtonGreen";
import ProfileSubTitle from "./components/ProfileSubTitle";
import { VisibilityOff, Visibility } from "@mui/icons-material";

interface IDataInput {
  firstName: string;
  lastName: string;
  // email: string
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const MyData: React.FC = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.user);
  const [seePassword, setSeePassword] = useState("password");
  const [seePasswordConfirm, setSeePasswordConfirm] = useState("password");

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const [paswordError, setPasswordError] = useState("");

  const { register, handleSubmit, reset } = useForm<IDataInput>();
  const onSubmit: SubmitHandler<IDataInput> = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError("* Паролі повинні співпадати!");
      return;
    }
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      password: data.password,
    };

    dispatch(updateUserInfo(userData));
    setPasswordError("");
    reset();
  };
  const handleToglePassword = () => {
    setSeePassword((prev) => prev === 'text' ? 'password' : 'text')
  }
  const handleTogleConfirmPassword = () => {
    setSeePasswordConfirm((prev) => prev === 'text' ? 'password' : 'text')
  }
  return (
    <Box sx={{ maxWidth: "713px" }}>
      <ProfileSubTitle>Мої дані</ProfileSubTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          sx={{
            color: "#111111",
            fontSize: { xs: "1rem", md: "1.5rem" },
            fontWeight: { xs: 500, md: 600 },
            lineHeight: "2.25rem",
            paddingBottom: { xs: "1rem", md: "1.5rem" },
          }}
        >
          Дані користувача
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "1rem",
            width: "100%",
            paddingBottom: "32px",
            borderBottom: "0.5px solid #A3A3A3",
          }}
        >
          <ProfileInput
            register={register("firstName")}
            label={"Ім'я"}
            name={"firstName"}
            userInfo={userInfo?.firstName}
            placeholder={"Введіть ваше ім'я"}
          />
          <ProfileInput
            register={register("lastName")}
            label={"Прізвище"}
            name={"lastName"}
            userInfo={userInfo?.lastName}
            placeholder={"Введіть ваше прізвище"}
          />
          <ProfileInput
            // register={register('email')}
            label={"Адреса електронної пошти"}
            name={"email"}
            userInfo={userInfo?.email}
            readOnly={true}
          />
          <ProfileInput
            register={register("phoneNumber")}
            label={"Номер телефону"}
            name={"phoneNumber"}
            userInfo={userInfo?.phoneNumber}
            placeholder={"Введіть ваше ім'я"}
          />
        </Box>
        <Typography
          sx={{
            color: "#111111",
            fontSize: { xs: "1rem", md: "1.5rem" },
            fontWeight: { xs: 500, md: 600 },
            lineHeight: "2.25rem",
            paddingBottom: { xs: "1rem", md: "1.5rem" },
            paddingTop: { xs: "2rem", md: "1rem" },
          }}
        >
          Змінити пароль
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
            borderBottom: "0.5px solid #A3A3A3",
            paddingBottom: "32px",
          }}
        >
          <ProfileInput
            register={register("password")}
            label={"Новий пароль"}
            name={"password"}
            placeholder="Напишіть новий пароль"
            halfWidth={true}
            type={seePassword}
            icon={
              <IconButton onClick={handleToglePassword}>
                {seePassword === "text" ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
          />
          <ProfileInput
            register={register("confirmPassword")}
            label={"Підтвердьте новий пароль"}
            name={"confirm-password"}
            placeholder="Повторіть новий пароль"
            halfWidth={true}
            type={seePasswordConfirm}
            icon={
                <IconButton onClick={handleTogleConfirmPassword}>
                  {seePasswordConfirm === "text" ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
          />
          {paswordError && <Typography sx={{color: 'red'}}>{paswordError}</Typography>}
        </Box>
        <ButtonGreen
          type="submit"
          sx={{
            width: { xs: "100%", md: "50%" },
            mt: { xs: "32px", md: "26px" },
          }}
        >
          Зберегти зміни
        </ButtonGreen>
      </form>
    </Box>
  );
};

export default MyData;
