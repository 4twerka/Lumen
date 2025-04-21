import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import FormButtonSubmit from "../../../Forms/FormButtonSubmit";
import ButtonOutline from "../../../Buttons/ButtonOutline";
import styles from "./ProfileMenu.module.css";
import ShoppingIcon from "../../../../assets/Shopping.svg?react";
import LogOutIcon from "../../../../assets/Logout.svg?react";
import MyDataIcon from "../../../../assets/MyData.svg?react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../hooks";
import { logOutUser } from "../../../../store/slices/userSlice";

interface ProfileMenuProps {
  anchorProfileEl: null | HTMLElement;
  openProfile: boolean;
  handleCloseProfile: () => void;
  isAuth: boolean;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  anchorProfileEl,
  openProfile,
  handleCloseProfile,
  isAuth,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleNavigateLogin = () => {
    navigate("/login");
  };
  const handleNavigateRegistration = () => {
    navigate("/registration");
  };
  const handleNavigateMyData = () => {
    navigate("/profile/my-data");
  };
  const handleNavigateMyOrders = () => {
    navigate("/profile/my-orders");
  };
  const handleLogout = () => {
    dispatch(logOutUser());
    navigate("/")
  }
  return (
    <Menu
      sx={{ "& .MuiMenu-list": { padding: "1rem" } }}
      id="profile-btn"
      anchorEl={anchorProfileEl}
      open={openProfile}
      onClose={handleCloseProfile}
      MenuListProps={{
        "aria-labelledby": "profile-btn",
      }}
    >
      {isAuth ? (
        <>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "1rem",
              color: "#2E2E2E",
              paddingBottom: "1rem",
            }}
          >
            Вітаємо в Lumen!
          </Typography>
          <MenuItem
            className={styles.authMenuItem}
            onClick={() => {
              handleNavigateMyOrders();
              handleCloseProfile();
            }}
          >
            <ShoppingIcon />
            Мої замовлення
          </MenuItem>
          <MenuItem
            className={styles.authMenuItem}
            onClick={() => {
              handleNavigateMyData();
              handleCloseProfile();
            }}
          >
            <MyDataIcon />
            Мої дані
          </MenuItem>
          <MenuItem
            className={styles.authMenuItem}
            onClick={() => {
              handleLogout()
              handleCloseProfile();
            }}
          >
            <LogOutIcon />
            Вийти
          </MenuItem>
        </>
      ) : (
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
      )}
    </Menu>
  );
};

export default ProfileMenu;
