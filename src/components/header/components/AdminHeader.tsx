import { Button, Typography } from "@mui/material";
import React from "react";
import LogoutIcon from "../../../assets/Logout.svg?react";
import { useAppDispatch } from "../../../hooks";
import { logOutUser } from "../../../store/slices/userSlice";
import { useNavigate } from "react-router";

const AdminHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await dispatch(logOutUser());
    navigate("/");
  };
  return (
    <>
      <Typography
        sx={{
          color: "#111111",
          fontWeight: 400,
          fontSize: "0.875rem",
          flexGrow: 1,
          paddingLeft: "40px",
          display: { xs: "none", md: "block" },
        }}
      >
        Адміністративна панель
      </Typography>
      <Button
        onClick={handleLogout}
        variant="outlined"
        sx={{
          border: "none",
          fontWeight: 500,
          color: "#111111",
          height: "40px",
          gap: "4px",
        }}
      >
        <LogoutIcon />
        Вийти
      </Button>
    </>
  );
};

export default AdminHeader;
