import { MenuItem, Typography } from "@mui/material";
import React from "react";
import styles from "./ProfileMenu.module.css";
import ShoppingIcon from "../../../../assets/Shopping.svg?react";
import LogOutIcon from "../../../../assets/Logout.svg?react";
import MyDataIcon from "../../../../assets/MyData.svg?react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../hooks";
import { logOutUser } from "../../../../store/slices/userSlice";

interface UserMenuProps {
  handleCloseProfile: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ handleCloseProfile }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleNavigateMyData = () => {
    navigate("/profile/my-data");
  };
  const handleNavigateMyOrders = () => {
    navigate("/profile/my-orders");
  };
  const handleLogout = () => {
    dispatch(logOutUser());
    navigate("/");
  };
  return (
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
          handleLogout();
          handleCloseProfile();
        }}
      >
        <LogOutIcon />
        Вийти
      </MenuItem>
    </>
  );
};

export default UserMenu;
