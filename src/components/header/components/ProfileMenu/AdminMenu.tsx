import { MenuItem } from "@mui/material";
import React from "react";
import styles from "./ProfileMenu.module.css";
import ShoppingIcon from "../../../../assets/Shopping.svg?react";
import LogOutIcon from "../../../../assets/Logout.svg?react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../hooks";
import { logOutUser } from "../../../../store/slices/userSlice";
import AddIcon from '@mui/icons-material/Add';

interface AdminMenuProps {
  handleCloseProfile: () => void;
}

const AdminMenu: React.FC<AdminMenuProps> = ({ handleCloseProfile }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  const handleNavigateMyOrders = () => {
    navigate("/profile/my-orders");
  }

  return (
    <>
      <MenuItem
        className={styles.authMenuItem}
        onClick={() => {
          handleNavigateMyOrders();
          handleCloseProfile();
        }}
      >
        <ShoppingIcon />
        Замовлення
      </MenuItem>
      <MenuItem
        className={styles.authMenuItem}
        onClick={() => {
          navigate("/add-product");
          handleCloseProfile();
        }}
      >
        <AddIcon />
        Додати товар
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

export default AdminMenu;
