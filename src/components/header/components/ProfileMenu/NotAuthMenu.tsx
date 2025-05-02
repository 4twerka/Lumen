import { Typography } from "@mui/material";
import React from "react";
import FormButtonSubmit from "../../../Forms/FormButtonSubmit";
import ButtonOutline from "../../../Buttons/ButtonOutline";
import styles from "./ProfileMenu.module.css";
import { useNavigate } from "react-router";

const NotAuthMenu: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/login");
  };
  const handleNavigateRegistration = () => {
    navigate("/registration");
  };
  return (
    <>
      <Typography className={styles.unAuthMenuItem}>
        Ви вже маєте обліковий запис?
      </Typography>
      <FormButtonSubmit
        sx={{ height: "48px", textTransform: "none", borderRadius: "8px" }}
        onClick={handleNavigateLogin}
      >
        Увійти
      </FormButtonSubmit>
      <Typography className={styles.unAuthMenuItem} sx={{ pt: "1rem" }}>
        Ви новий користувач?
      </Typography>
      <ButtonOutline onClick={handleNavigateRegistration}>
        Зареєструватися
      </ButtonOutline>
    </>
  );
};

export default NotAuthMenu;
