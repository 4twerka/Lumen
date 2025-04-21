import { Box, styled } from "@mui/material";
import React from "react";
import ShoppingIcon from "../../../assets/Shopping.svg?react";
import LogOutIcon from "../../../assets/Logout.svg?react";
import MyDataIcon from "../../../assets/MyData.svg?react";
import { Link, useLocation } from "react-router";
import { useAppDispatch } from "../../../hooks";
import { logOutUser } from "../../../store/slices/userSlice";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#111111",
  padding: "0.5rem 1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  width: "100%",
  borderRadius: "4px",
  fontSize: "0.875rem",
  fontWeight: 400,
  //   backgroundColor: location.pathname === '/profile' ? '#F1F1F4' : 'none',
  // '&:hover': {
  //     backgroundColor: 'rgba(115, 39, 13, 0.04)',
  //   },
});

const ProfileNavigation: React.FC = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    dispatch(logOutUser());
    // navigate('/')
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "20%" },
        display: {
          xs:
            location.pathname.includes("my-orders") ||
            location.pathname.includes("my-data")
              ? "none"
              : "flex",
          md: "flex",
        },
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <StyledLink
        sx={
          location.pathname === "/profile"
            ? { backgroundColor: "#F1F1F4" }
            : {
                backgroundColor:
                  location.pathname === "/profile/my-orders"
                    ? "rgba(115, 39, 13, 0.12)"
                    : "transparent",
              }
        }
        to={"my-orders"}
      >
        <ShoppingIcon /> Мої замовлення
      </StyledLink>
      <StyledLink
        sx={
          location.pathname === "/profile"
            ? { backgroundColor: "#F1F1F4" }
            : {
                backgroundColor:
                  location.pathname === "/profile/my-data"
                    ? "rgba(115, 39, 13, 0.12)"
                    : "transparent",
              }
        }
        to={"my-data"}
      >
        <MyDataIcon /> Мої дані
      </StyledLink>
      <StyledLink
        onClick={() => {
          handleLogout();
        }}
        to={"/"}
        sx={
          location.pathname === "/profile"
            ? { backgroundColor: "#F1F1F4" }
            : { backgroundColor: "transparent" }
        }
      >
        <LogOutIcon /> Вийти
      </StyledLink>
    </Box>
  );
};

export default ProfileNavigation;
